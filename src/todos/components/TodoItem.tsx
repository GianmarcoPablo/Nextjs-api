"use client"
import { Todo } from "@prisma/client"
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"
import styles from "./TodoItem.module.css"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

interface Props {
    todo: Todo,
    toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>
}

export default function TodoItem({ todo, toggleTodo }: Props) {
    const { id, completed, createdAt, description, updatedAt } = todo

    const router = useRouter()
    const [isFetching, setIsFetching] = useState(false)
    const [isPending, startTransition] = useTransition()
    const isOptimisticCompleted = (isFetching || isPending) ? !completed : completed

    const onToggleTodo = async () => {
        setIsFetching(true)
        await toggleTodo(id, !completed)
        setIsFetching(false)

        startTransition(() => {
            router.refresh()
        })
    }

    return (
        <div
            className={isOptimisticCompleted ? styles.todoDone : styles.todoPending}
        >
            <div
                className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <div
                    onClick={() => onToggleTodo()}
                    className={`
                    flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 
                    ${isOptimisticCompleted ? 'bg-blue-100' : 'bg-red-100'}        
                `}>
                    {isOptimisticCompleted
                        ? <IoCheckboxOutline size={30} />
                        : <IoSquareOutline size={30} />
                    }
                </div>

                <div className="text-center sm:text-left">
                    {todo.description}
                </div>
            </div>
        </div>
    )
}
