import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs"

export async function GET() {
    try {

        await prisma.todo.deleteMany()
        await prisma.user.deleteMany()

        const user = await prisma.user.create({
            data: {
                email: "test1@google.com",
                password: bcrypt.hashSync("123456", 10),
                roles: ["admin", "client", "super-user"],
                todos: {
                    create: [
                        { description: "Piedra del alma", completed: true },
                        { description: "Piedra del poder" },
                        { description: "Piedra de la mente" },
                        { description: "Piedra del tiempo" },
                        { description: "Piedra de la realidad" },
                    ]
                }
            }
        })
        return NextResponse.json({ message: "Sedd Executed" });
    } catch (error) {
        return NextResponse.json({ message: "Error", error });
    }
}