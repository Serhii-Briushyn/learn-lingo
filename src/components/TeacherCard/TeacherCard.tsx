import { useState } from "react";
import { useFavorites } from "hooks/useFavorites";
import { Teacher } from "types/Teacher";
import TeacherActions from "components/TeacherActions/TeacherActions";
import TeacherAvatar from "components/TeacherAvatar/TeacherAvatar";
import TeacherDescription from "components/TeacherDescription/TeacherDescription";
import TeacherInfo from "components/TeacherInfo/TeacherInfo";
import TeacherLevels from "components/TeacherLevels/TeacherLevels";
import TeacherReviews from "components/TeacherReviews/TeacherReviews";
import ToggleFavorite from "components/ToggleFavorite/ToggleFavorite";

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(teacher.id);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="bg-white flex flex-col desktop:flex-row gap-12 p-6 rounded-3xl relative">
      <TeacherAvatar teacher={teacher} />
      <ToggleFavorite
        teacher={teacher}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-8">
          <TeacherInfo teacher={teacher} />
          <TeacherDescription
            teacher={teacher}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>

        {isExpanded && (
          <TeacherReviews
            reviews={teacher.reviews}
            setIsExpanded={setIsExpanded}
          />
        )}

        <TeacherLevels levels={teacher.levels} />

        {isExpanded && <TeacherActions teacher={teacher} />}
      </div>
    </li>
  );
};

export default TeacherCard;
