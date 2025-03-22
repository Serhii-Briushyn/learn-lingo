import { createContext } from "react";

export interface FavoritesContextType {
  favorites: string[];
  loading: boolean;
  toggleFavorite: (teacherId: string) => Promise<void>;
}

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null
);
