import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import prisma from "@/lib/prisma"
import { NewTodo, TodosGrid } from "@/todos"
import { Metadata } from "next"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


export const metadata: Metadata = {
    title: "Server Actions",
    description: "Rest todos page"
}

export default async function RestTodosPage() {

    const session = await getServerSession(authOptions)

    if (!session?.user) redirect("/api/auth/signin")

    const todos = await prisma.todo.findMany({
        where: {
            userId: session?.user?.id
        },
        orderBy: { createdAt: "desc" }
    })

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
