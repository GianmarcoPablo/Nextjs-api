"use client"

import { Todo } from '@prisma/client'
import { TodoItem } from '..'
// import * as todosApi from "@/todos/helpers/todos"
import { toggleTodo } from '../actions/todo.actions'
import { useRouter } from 'next/navigation'

interface Props {
    todos?: Todo[]
}

export default function TodosGrid({ todos = [] }: Props) {

    //const router = useRouter()

    // const toggleTodo = async (id: string, completed: boolean) => {
    //     const updatedTodo = await todosApi.updateTodo(id, completed)
    //     router.refresh()
    //     return updatedTodo
    // }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    )
}
