import Dropdown from "components/Dropdown/Dropdown";
import { Filters } from "types/Filters";
import { Teacher } from "types/Teacher";

interface TeachersFiltersProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  teachers: Teacher[];
}

const TeachersFilters: React.FC<TeachersFiltersProps> = ({
  filters,
  setFilters,
  teachers,
}) => {
  const uniqueLanguages = Array.from(
    new Set(teachers.flatMap((teacher) => teacher.languages))
  );

  const uniqueLevels = Array.from(
    new Set(teachers.flatMap((teacher) => teacher.levels))
  );

  const uniquePrices = Array.from(
    new Set(
      teachers.map((teacher) => Math.ceil(teacher.price_per_hour / 10) * 10)
    )
  ).sort((a, b) => a - b);

  const handleFilterChange = (
    name: keyof Filters,
    value: string | number | undefined
  ) => {
    setFilters({
      ...filters,
      [name]: value === "" ? undefined : value,
    });
  };

  return (
    <div className="flex flex-col tablet:flex-row gap-5 mb-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm/tight text-grey font-medium">
          Languages
        </p>
        <Dropdown
          options={["All Languages", ...uniqueLanguages]}
          value={filters.language || "All Languages"}
          type="language"
          onChange={(val) =>
            handleFilterChange(
              "language",
              val === "All Languages" ? undefined : val
            )
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm/tight text-grey font-medium">
          Level of knowledge
        </p>
        <Dropdown
          options={["All Levels", ...uniqueLevels]}
          value={filters.level || "All Levels"}
          type="level"
          onChange={(val) =>
            handleFilterChange("level", val === "All Levels" ? undefined : val)
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm/tight text-grey font-medium">
          Price
        </p>
        <Dropdown
          options={["All Prices", ...uniquePrices.map((price) => `${price} $`)]}
          value={filters.maxPrice ? `${filters.maxPrice} $` : "All Prices"}
          type="maxPrice"
          onChange={(val) =>
            handleFilterChange(
              "maxPrice",
              val === "All Prices" ? undefined : Number(val.replace(" $", ""))
            )
          }
        />
      </div>
    </div>
  );
};

export default TeachersFilters;
