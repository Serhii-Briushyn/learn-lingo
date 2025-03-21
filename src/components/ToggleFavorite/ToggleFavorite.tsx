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
        <svg className="w-full h-full">
          <use href={`/sprite.svg#icon-heart-yellow`} />
        </svg>
      ) : (
        <svg className="w-full h-full stroke-black fill-none group-hover:hidden group-active:hidden">
          <use href={`/sprite.svg#icon-heart`} />
        </svg>
      )}

      {!isFavorite && (
        <svg className="w-full h-full hidden group-hover:block">
          <use href={`/sprite.svg#icon-heart-yellow`} />
        </svg>
      )}
    </button>
  );
};

export default ToggleFavorite;
