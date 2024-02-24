"use client"
import * as todosApi from "@/todos/helpers/todos"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { IoTrashOutline } from "react-icons/io5"

export default function NewTodo() {

    const [description, setDescription] = useState("")
    const router = useRouter()
    const onSusbmit = async (e: FormEvent) => {
        e.preventDefault()
        if (description.trim().length === 0) return
        await todosApi.createTodo(description)

        router.refresh()

        setDescription("")
    }

    const deleteCompleted = async () => {
        await todosApi.deleteTodosCompleted()
        router.refresh()
    }

    return (
        <form
            onSubmit={onSusbmit}
            className="flex w-full">
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="¿Qué necesitas hacer?"
            />
            <button
                type="submit"
                className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700"
            >
                Crear
            </button>

            <span className="flex flex-1"></span>

            <button
                onClick={() => deleteCompleted()}
                type="button"
                className="flex items-center justify-center rounde ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-colors"
            >
                Borrar completados
                <IoTrashOutline />
            </button>

        </form>
    )
}
