import { Teacher } from "types/Teacher";

interface ToggleFavoriteProps {
  teacher: Teacher;
  toggleFavorite: (id: string) => void;
  isFavorite: boolean;
}

const ToggleFavorite: React.FC<ToggleFavoriteProps> = ({
  teacher,
  toggleFavorite,
  isFavorite,
}) => {
  return (
    <button
      onClick={() => toggleFavorite(teacher.id)}
      className="absolute top-6 right-6 w-6.5 h-6.5 cursor-pointer transition-all ease-in group"
    >
      {isFavorite ? (
        <svg className="w-full h-full hover:scale-110 transition-all duration-200 ease-in">
          <use href={`/sprite.svg#icon-heart-yellow`} />
        </svg>
      ) : (
        <svg className="w-full h-full stroke-black dark:stroke-white fill-none hover:stroke-yellow-300 hover:scale-110 transition-all duration-200 ease-in">
          <use href={`/sprite.svg#icon-heart`} />
        </svg>
      )}
    </button>
  );
};

export default ToggleFavorite;
