import { useEffect, useState } from "react";
import { getAllTeachers } from "service/teachersService";
import { Teacher } from "types/Teacher";
import { TeachersContext } from "./TeachersContext";

export const TeachersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const allTeachers = await getAllTeachers();
        setTeachers(allTeachers);
      } catch {
        setError("Failed to fetch teachers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <TeachersContext.Provider value={{ teachers, loading, error }}>
      {children}
    </TeachersContext.Provider>
  );
};
