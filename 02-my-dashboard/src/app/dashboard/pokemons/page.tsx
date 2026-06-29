import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/pokemons";

export const metadata = {
 title: '151 Pokemos',
 description: 'Duis nostrud labore elit consequat et voluptate anim.',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(res => res.json());

  const pokemons = data.results.map((pokemon) => {
    return {
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }
  });

  // throw new Error('Error al obtener los pokemons');

  return pokemons;
}



export default async function PokemonsPage() {
  // 'use cache'

  // cacheLife({
  //   stale: 10,
  //   revalidate: 60
  // })

  // cacheTag('pokemons')
  // revalidateTag('pokemons', 'max')

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pókemons <small className="text-blue-500">estático</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}