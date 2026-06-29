'use client'
import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/src/store"
import { Suspense } from "react"

export const WidgetsGrid = () => {

  const isCart = useAppSelector( state => state.counter.count )

  return (
    <div className="flex flex-wrap p-2">
        <Suspense>
            <SimpleWidget
                title={`${isCart}`}
                subsTitle="Productos agregados"
                label="Contador"
                href="/dashboard/counter"
                icon={ <IoCartOutline size={70} className="text-blue-600" /> }
            />
        </Suspense>
    </div>
  )
}
