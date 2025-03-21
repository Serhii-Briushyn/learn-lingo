import { createContext } from "react";
import { Teacher } from "types/Teacher";

export interface TeachersContextType {
  teachers: Teacher[];
  loading: boolean;
  error: string | null;
}

export const TeachersContext = createContext<TeachersContextType>({
  teachers: [],
  loading: true,
  error: null,
});
