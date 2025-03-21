import { useState, useEffect } from "react";
import { auth, db } from "service/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
} from "firebase/firestore";
import { FavoritesContext } from "./FavoritesContext";
import { onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";

interface FavoritesProviderProps {
  children: React.ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchFavorites = async () => {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setFavorites(userSnap.data().favorites || []);
      } else {
        await setDoc(userRef, { favorites: [] });
      }
    };

    fetchFavorites();
  }, [user]);

  const toggleFavorite = async (teacherId: string) => {
    if (!user) {
      toast.error("You must be logged in!");
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

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
