'use client';

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as api from '@/todos/helpers/todos'
import { useRouter } from "next/navigation";


export const NewTodo = () => { 

  const [description, setDescription] = useState('')
  const userRouter = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    await api.createTodo(description)
    setDescription('')
    userRouter.refresh()
  }

  const deleteCompleted = async () => {
    await api.deleteCompletedTodos()
    userRouter.refresh()
  }

  return (
    <form onSubmit={onSubmit} className='flex w-full'>
      <input type="text"
        onChange={ (e) => setDescription(e.target.value) }
        value={description}
        className="w-6/12 rounded-lg border-2 border-black-100 bg-white text-black p-2"
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        onClick={ () => deleteCompleted() }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
            Borrar completados
      </button>


    </form>
  )
}