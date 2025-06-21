import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers"; // ✅ Use Next.js cookies helper

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const prisma = new PrismaClient();

export async function POST(req) {
    const body = await req.json();
    const { priceId, plan } = body;

    // ✅ 1. Get token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
        });
    }

    // ✅ 2. Verify JWT
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET || "yoursecretkey");
    } catch (err) {
        return new Response(JSON.stringify({ error: "Invalid token" }), {
            status: 401,
        });
    }

    // ✅ 3. Find user by ID
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
            status: 404,
        });
    }

    // ✅ 4. Create Stripe customer if needed
    let customerId = user.stripeCustomerId;
    if (!customerId) {
        const customer = await stripe.customers.create({ email: user.email });
        await prisma.user.update({
            where: { id: user.id },
            data: { stripeCustomerId: customer.id },
        });
        customerId = customer.id;
    }

    // ✅ 5. Create Stripe Checkout session
    const stripeSession = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        customer: customerId,
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscription`,
        metadata: {
            userId: user.id,
            plan,
        },
    });

    return new Response(JSON.stringify({ url: stripeSession.url }));
}
