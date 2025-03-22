import { Teacher } from "types/Teacher";

const TeacherAvatar: React.FC<{ teacher: Teacher }> = ({ teacher }) => (
  <div className="flex max-tablet:flex-col max-desktop:flex-row max-desktop:gap-8">
    <div className="flex justify-center items-center max-tablet:m-auto w-30 h-30 bg-transparent border-3 border-accent-light rounded-full flex-shrink-0 relative">
      <img
        src={teacher.avatar_url}
        alt={`${teacher.name} ${teacher.surname}`}
        className="w-24 h-24 object-cover rounded-full"
      />
      <svg className="absolute top-4 right-4.5 w-3 h-3 rounded-full">
        <use href={`/sprite.svg#icon-circle-green`} />
      </svg>
    </div>
    <div className="flex desktop:hidden flex-col gap-2">
      <p className="text-base font-medium text-grey">Languages</p>
      <h3 className="text-2xl leading-none font-medium">
        {teacher.name} {teacher.surname}
      </h3>
    </div>
  </div>
);

export default TeacherAvatar;
