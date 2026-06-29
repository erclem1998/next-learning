import { SimplePokemon } from '@/src/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon }
}

const initialState: PokemonsState = {
    favorites: {}
    // '1': { id: '1', name: 'bulbasaur' },
    // '3': { id: '3', name: 'venusaur' },
    // '5': { id: '5', name: 'charmeleon' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload;
    },
    toggleFavorite( state, action: PayloadAction<SimplePokemon> ){
        const pokemon = action.payload
        const { id } = pokemon
        if (!!state.favorites[id]) {
            delete state.favorites[id]
            return
        }
        else {
          state.favorites[id] = pokemon
        }
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer