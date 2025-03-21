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

  return (
    <main className="container m-auto bg-grey-light min-h-screen flex flex-col w-full pb-5 px-10 tablet:px-16 desktop:px-32 relative">
      <TeachersFilters
        filters={filters}
        setFilters={handleFilterChange}
        teachers={teachers}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <TeachersList teachers={visibleTeachers} />
          <LoadMoreButton
            hasMore={visibleCount < filteredTeachers.length}
            onLoadMore={() => setVisibleCount((prev) => prev + 4)}
          />
        </>
      )}
    </main>
  );
};

export default TeachersPage;
