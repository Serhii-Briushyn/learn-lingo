import Loader from "components/Loader/Loader";
import LoadMoreButton from "components/LoadMoreButton/LoadMoreButton";
import TeachersFilters from "components/TeachersFilters/TeachersFilters";
import TeachersList from "components/TeachersList/TeachersList";
import { TeachersContext } from "context/TeachersContext";
import { useState, useMemo, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { Filters } from "types/Filters";
import { filterTeachers } from "utils/teacherFilter";

const TeachersPage = () => {
  const { teachers, loading, error } = useContext(TeachersContext);
  const [filters, setFilters] = useState<Filters>(() => {
    const savedFilters = localStorage.getItem("teacherFilters");
    return savedFilters ? JSON.parse(savedFilters) : {};
  });
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const filteredTeachers = useMemo(
    () => filterTeachers(teachers, filters),
    [teachers, filters]
  );

  const visibleTeachers = filteredTeachers.slice(0, visibleCount);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    localStorage.setItem("teacherFilters", JSON.stringify(newFilters));
    setVisibleCount(4);
  };

  if (loading) return <Loader />;

  return (
    <main className="container m-auto flex flex-col pb-4 px-4 tablet:pb-8 tablet:px-8 desktop:px-32">
      <TeachersFilters
        filters={filters}
        setFilters={handleFilterChange}
        teachers={teachers}
      />
      <>
        <TeachersList teachers={visibleTeachers} />
        <LoadMoreButton
          hasMore={visibleCount < filteredTeachers.length}
          onLoadMore={() => setVisibleCount((prev) => prev + 4)}
        />
      </>
    </main>
  );
};

export default TeachersPage;
