import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Server Actions",
    description: "Rest todos page"
}

export default async function RestTodosPage() {

    const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } })

    return (
        <>
            <span className="text-3xl mb-10">Server Actions (alpha)</span>
            <div className="w-full px-3 mx-5 mb-5">
                <NewTodo />
            </div>
            <TodosGrid
                todos={todos}
            />
        </>
    )
}
