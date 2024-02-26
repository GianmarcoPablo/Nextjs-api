"use client"
import { useOptimistic } from "react"
import { Todo } from "@prisma/client"
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"
import styles from "./TodoItem.module.css"

interface Props {
    todo: Todo,
    toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>
}

export default function TodoItemExperimental({ todo, toggleTodo }: Props) {
    const { id, completed, createdAt, description, updatedAt } = todo

    const [todoOptimistic, toggleOptimistic] = useOptimistic(
        todo,
        (state, newCompletedValue: boolean) => ({ ...state, completed: newCompletedValue })
    )

    const onToggleTodo = async () => {
        // Optimistic update
        toggleOptimistic(!todoOptimistic.completed)
        try {
            await toggleTodo(todoOptimistic.id, !todoOptimistic.completed)

        } catch (error) {
            // Revert optimistic update
            console.log('Error updating todo', error)
            toggleOptimistic(!todoOptimistic.completed)
        }
    }

    return (
        <div    // className={completed ? styles.todoDone : styles.todoPending}
            className={todoOptimistic.completed ? styles.todoDone : styles.todoPending}
        >
            <div
                className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <div
                    onClick={() => onToggleTodo()}
                    className={`
                    flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 
                    ${todoOptimistic.completed ? 'bg-blue-100' : 'bg-red-100'}        
                `}>
                    {todoOptimistic.completed
                        ? <IoCheckboxOutline size={30} />
                        : <IoSquareOutline size={30} />
                    }
                </div>

                <div className="text-center sm:text-left">
                    {description}
                </div>
            </div>
        </div>
    )
}
