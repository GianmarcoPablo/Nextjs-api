import { Todo } from "@prisma/client";

export const updateTodo = async (id: string, completed: boolean): Promise<Todo> => {
    const body = { completed }

    const dbToodo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    console.log(dbToodo);

    return dbToodo
}

export const createTodo = async (description: string): Promise<Todo> => {
    const body = { description }

    const dbToodo = await fetch(`/api/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    console.log(dbToodo);

    return dbToodo
}

export const deleteTodosCompleted = async (): Promise<boolean> => {
    const url = `/api/todos`

    const rpta = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await rpta.json()
    console.log(data)
    return true
}