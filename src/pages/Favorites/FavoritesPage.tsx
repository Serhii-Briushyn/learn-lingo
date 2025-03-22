import Loader from "components/Loader/Loader";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { TeachersContext } from "context/TeachersContext";
import { useFavorites } from "hooks/useFavorites";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { Teacher } from "types/Teacher";

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  const { teachers, loading, error } = useContext(TeachersContext);

  const favoriteTeachers = teachers.filter((teacher: Teacher) =>
    favorites.includes(teacher.id)
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (loading) return <Loader />;

  return (
    <main className="container m-auto flex flex-col pb-4 pt-4 px-4 tablet:pb-8 tablet:px-8 desktop:px-32">
      {favoriteTeachers.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul className="flex flex-col gap-8 mb-16">
          {favoriteTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default FavoritesPage;
