import { useState, useEffect } from "react";
import { db } from "service/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
} from "firebase/firestore";
import { FavoritesContext } from "./FavoritesContext";
import { useAuth } from "hooks/useAuth";
import toast from "react-hot-toast";

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading: authLoading } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setFavorites(userSnap.data().favorites || []);
        } else {
          await setDoc(userRef, { favorites: [] });
        }
      } catch {
        toast.error("Failed to fetch favorites. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user]);

  const toggleFavorite = async (teacherId: string) => {
    if (!user) {
      toast.error("Please log in or sign up to add teachers to favorites.");
      return;
    }

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, { favorites: [teacherId] });
      setFavorites([teacherId]);
      return;
    }

    const isFavorite = favorites.includes(teacherId);

    if (isFavorite) {
      await updateDoc(userRef, { favorites: arrayRemove(teacherId) });
      setFavorites((prev) => prev.filter((id) => id !== teacherId));
    } else {
      await updateDoc(userRef, { favorites: arrayUnion(teacherId) });
      setFavorites((prev) => [...prev, teacherId]);
    }
  };

  if (authLoading) return null;

  return (
    <FavoritesContext.Provider value={{ favorites, loading, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
