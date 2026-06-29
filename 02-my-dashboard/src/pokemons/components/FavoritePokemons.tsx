'use client'

import { useAppSelector } from "@/src/store"
import { PokemonGrid } from "./PokemonGrid"
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useMemo, useState } from "react";

export const FavoritePokemons = () => {

  const favorites= useAppSelector(state => state.pokemons.favorites);
  const favoritePokemons = useMemo(() => 
    Object.values(favorites), 
    [ favorites]
  )
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {
        favoritePokemons.length!==0
          ? <PokemonGrid pokemons={favoritePokemons} />
          : <NoFavorites />
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay Favoritos</span>
    </div>
  )
}
