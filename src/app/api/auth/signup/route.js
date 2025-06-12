import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password || !name) {
        return new Response(
            JSON.stringify({ message: "All fields are required." }),
            {
                status: 400,
            }
        );
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return new Response(
                JSON.stringify({ message: "User already exists." }),
                {
                    status: 409,
                }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return new Response(
            JSON.stringify({ message: "User created successfully." }),
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error("Signup error:", error);
        return new Response(JSON.stringify({ message: "Server error." }), {
            status: 500,
        });
    }
}
