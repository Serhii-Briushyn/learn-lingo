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
import { motion, AnimatePresence } from "framer-motion";

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(teacher.id);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li
      data-aos="fade-up"
      className="bg-white dark:bg-dark-light flex flex-col desktop:flex-row gap-12 p-6 rounded-3xl relative"
    >
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
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              exit={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.2, ease: "linear" }}
              className="flex flex-col gap-8"
            >
              <TeacherReviews
                reviews={teacher.reviews}
                setIsExpanded={setIsExpanded}
              />
              <TeacherLevels levels={teacher.levels} />
              <TeacherActions teacher={teacher} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isExpanded && <TeacherLevels levels={teacher.levels} />}
      </div>
    </li>
  );
};

export default TeacherCard;
