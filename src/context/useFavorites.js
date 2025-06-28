import { useContext } from "react";
import { FavoritesContext } from "./FavoritesProvider";

export function useFavorites() {
  return useContext(FavoritesContext);
}
