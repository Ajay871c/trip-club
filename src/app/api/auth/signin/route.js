import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return new Response(
            JSON.stringify({ message: "Email and password required." }),
            {
                status: 400,
            }
        );
    }

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return new Response(
                JSON.stringify({ message: "Invalid credentials." }),
                {
                    status: 401,
                }
            );
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.name },
            process.env.JWT_SECRET || "yoursecretkey",
            { expiresIn: "7d" }
        );

        return new Response(JSON.stringify({ message: "Login successful" }), {
            status: 200,
            headers: {
                "Set-Cookie": `token=${token}; Path=/; HttpOnly; Max-Age=604800`,
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Server error" }), {
            status: 500,
        });
    }
}
