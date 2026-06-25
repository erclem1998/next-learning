import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/pokemons";
import { cacheLife, cacheTag, revalidateTag } from "next/cache";


export const metadata = {
 title: 'Favoritos',
 description: 'Duis nostrud labore elit consequat et voluptate anim.',
};



export default async function PokemonsPage() {
  // 'use cache'

  // cacheLife({
  //   stale: 10,
  //   revalidate: 60
  // })

  // cacheTag('pokemons')
  // revalidateTag('pokemons', 'max')


  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pókemons Favoritos <small className="text-blue-500">Global State</small></span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}