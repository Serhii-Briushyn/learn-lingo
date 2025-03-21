import { createContext } from "react";

export interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (teacherId: string) => Promise<void>;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null
);
