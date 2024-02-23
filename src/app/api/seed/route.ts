import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {

        await prisma.todo.deleteMany()

        await prisma.todo.createMany({
            data: [
                { description: "Piedra del alma", completed: true },
                { description: "Piedra del poder" },
                { description: "Piedra de la mente" },
                { description: "Piedra del tiempo" },
                { description: "Piedra de la realidad" },
            ]
        })
        return NextResponse.json({ message: "Sedd Executed" });
    } catch (error) {
        return NextResponse.json({ message: "Error", error });
    }
}