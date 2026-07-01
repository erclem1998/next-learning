'use client'
import { Todo } from "@/generated/prisma/client"
import style from './TodosItems.module.css'
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"

interface Props {
    todo: Todo
    toggleTodo: (id: string, complete: boolean) => Promise<Todo|void>
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <div className={ todo.complete ? style.todoDone : style.todoPending }>
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div
                className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todo.complete ? 'bg-blue-100' : 'bg-red-200'}`}
                onClick={async () => {
                    await toggleTodo(todo.id, !todo.complete)
                }}
            >
                {
                    todo.complete
                    ? <IoCheckboxOutline size={30}/>
                    : <IoSquareOutline size={30} />
                }
                
            </div>
        </div>
        <div className="text-center sm:text-left">
            {todo.description}
        </div>
    </div>
  )
}
