import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: Action) => {
    const result = next(action);

    if (action.type === 'pokemons/toggleFavorite') {
      const { pokemons } = store.getState() as RootState;

      localStorage.setItem(
        'favorite-pokemons',
        JSON.stringify(pokemons.favorites)
      );
    }

    return result;
  };

export const loadState = () => {
  if (typeof window === 'undefined') return undefined;

  try {
    const serializedState = localStorage.getItem('favorite-pokemons');
    if (!serializedState) return undefined;

    return {
      pokemons: {
        favorites: JSON.parse(serializedState),
      },
    };
  } catch {
    return undefined;
  }
};