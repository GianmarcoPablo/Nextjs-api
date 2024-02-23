import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
    params: {
        id: string;
    }
}

export async function GET(request: Request, { params }: Segments) {

    const { id } = params
    try {

        const todo = await prisma.todo.findUnique({ where: { id } })
        if (!todo) return NextResponse.json({ message: `Todo con el ${id} no existe` }, { status: 404 })
        return NextResponse.json(todo)

    } catch (error) {
        return NextResponse.json({ message: "Error", error });
    }
}

export async function PUT(request: Request, { params }: Segments) {

    const { id } = params
    try {

        const todo = await prisma.todo.findUnique({ where: { id } })
        if (!todo) return NextResponse.json({ message: `Todo con el ${id} no existe` }, { status: 404 })

        const body = await request.json()

        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: body
        })

        return NextResponse.json(updatedTodo)

    } catch (error) {
        return NextResponse.json({ message: "Error", error });
    }
}