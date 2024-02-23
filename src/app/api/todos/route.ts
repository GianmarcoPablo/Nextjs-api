import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from 'yup'

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const take = searchParams.get('take') ?? '10'
    const skip = searchParams.get('skip') ?? '0'

    if (isNaN(parseInt(take))) return NextResponse.json({ message: "Take tiene que ser un numero" }, { status: 400 });

    if (isNaN(parseInt(skip))) return NextResponse.json({ message: "Skip tiene que ser un numero" }, { status: 400 });

    try {
        const todos = await prisma.todo.findMany({
            take: parseInt(take),
            skip: parseInt(skip),
        });
        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json({ message: "Error", error });
    }
}

const postSchema = yup.object().shape({
    description: yup.string().required(),
    completed: yup.boolean().optional().default(false), // TODO: MOSTRAR ALGO INTERESANTE
})

export async function POST(request: Request) {
    try {
        const { description, completed } = await postSchema.validate(await request.json())
        const todo = await prisma.todo.create({ data: { description, completed } });
        return NextResponse.json(todo);
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}