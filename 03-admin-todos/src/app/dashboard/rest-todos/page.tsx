import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
 title: 'Listado de TODOS',
 description: 'SEO Title',
};



export default async function RestTodosPage() {
  
  const todos = await prisma.todo.findMany({ orderBy: { id: 'asc' } });

  // useEffect(() => {
  //   fetch('/api/todos').then( (resp) => resp.json()).then(console.log)
  // }, [])
  
  return (
    <div>
      <h1 className="text-xl text-black">
        <div className="w-full px-3 mx-5 mb-5">
          <NewTodo />
        </div>
        <TodosGrid todos={todos} />
      </h1>
    </div>
  );
}