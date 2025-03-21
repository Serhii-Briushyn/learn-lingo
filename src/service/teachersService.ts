import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Teacher } from "types/Teacher";

export const getAllTeachers = async (): Promise<Teacher[]> => {
  try {
    const teachersRef = collection(db, "teachers");
    const snapshot = await getDocs(teachersRef);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Teacher[];
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw error;
  }
};
