'use client'

import { Todo } from "@/generated/prisma/client"
import { TodoItem } from "./TodoItem"

import * as api from '@/todos/helpers/todos'
import { useRouter } from "next/navigation"

interface Props {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {

  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updatedTodo = await api.updateTodo(id, complete)
    router.refresh()
    return updatedTodo
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {
            todos.map( (todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={ toggleTodo } />
            ))
        }
    </div>
  )
}
