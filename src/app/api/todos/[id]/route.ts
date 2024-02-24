import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import * as yup from 'yup'

interface Segments {
    params: {
        id: string;
    }
}

const getTodo = async (id: string): Promise<Todo | null> => {
    const todo = await prisma.todo.findFirst({ where: { id } })
    return todo
}

export async function GET(request: Request, { params }: Segments) {

    const { id } = params
    try {

        const todo = await getTodo(id)
        if (!todo) return NextResponse.json({ message: `Todo con el ${id} no existe` }, { status: 404 })
        return NextResponse.json(todo)

    } catch (error) {
        return NextResponse.json({ message: "Error", error });
    }
}

const putSchema = yup.object({
    completed: yup.boolean().optional(),
    description: yup.string().optional()
})

export async function PUT(request: Request, { params }: Segments) {
    const { id } = params
    try {

        const todo = await getTodo(id)
        if (!todo) return NextResponse.json({ message: `Todo con el ${id} no existe` }, { status: 404 })

        const { completed, description } = await putSchema.validate(await request.json())

        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { completed, description }
        })

        return NextResponse.json(updatedTodo)

    } catch (error) {
        return NextResponse.json({ message: "Error", error });
    }
}

