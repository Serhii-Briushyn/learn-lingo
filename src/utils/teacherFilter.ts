import { Filters } from "types/Filters";
import { Teacher } from "types/Teacher";

export const filterTeachers = (
  teachers: Teacher[],
  filters: Filters
): Teacher[] => {
  const { language, level, maxPrice } = filters;

  return teachers.filter((teacher) => {
    const matchLang = language ? teacher.languages.includes(language) : true;
    const matchLevel = level ? teacher.levels.includes(level) : true;
    const matchPrice =
      typeof maxPrice === "number" ? teacher.price_per_hour <= maxPrice : true;

    return matchLang && matchLevel && matchPrice;
  });
};
