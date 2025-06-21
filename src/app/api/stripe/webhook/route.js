import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false,
    },
};

// Helper: Read raw body for Stripe signature verification
async function getRawBody(readable) {
    const chunks = [];
    for await (const chunk of readable) chunks.push(Buffer.from(chunk));
    return Buffer.concat(chunks);
}

export async function POST(req) {
    const rawBody = await getRawBody(req.body);
    const signature = req.headers.get("stripe-signature");

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            rawBody,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error("❌ Invalid Stripe webhook signature:", err.message);
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    const data = event.data.object;

    try {
        switch (event.type) {
            case "customer.subscription.created":
            case "customer.subscription.updated": {
                const subscriptionId = data.id;
                const customerId = data.customer;
                const plan = data.items.data[0]?.price?.nickname ?? "Unknown";
                const status = data.status;
                const currentPeriodEnd = new Date(
                    data.current_period_end * 1000
                );

                const existingSub = await prisma.subscription.findUnique({
                    where: {
                        stripeSubscriptionId: subscriptionId,
                    },
                });

                if (existingSub) {
                    await prisma.subscription.update({
                        where: {
                            stripeSubscriptionId: subscriptionId,
                        },
                        data: {
                            plan,
                            status,
                            currentPeriodEnd,
                        },
                    });
                } else {
                    await prisma.subscription.create({
                        data: {
                            stripeSubscriptionId: subscriptionId,
                            plan,
                            status,
                            currentPeriodEnd,
                            user: {
                                connect: {
                                    stripeCustomerId: customerId,
                                },
                            },
                        },
                    });
                }
                break;
            }

            case "customer.subscription.deleted": {
                await prisma.subscription.updateMany({
                    where: {
                        stripeSubscriptionId: data.id,
                    },
                    data: {
                        status: "canceled",
                    },
                });
                break;
            }

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return new Response(JSON.stringify({ received: true }), {
            status: 200,
        });
    } catch (err) {
        console.error("💥 Webhook error:", err);
        return new Response("Internal Server Error", { status: 500 });
    }
}
