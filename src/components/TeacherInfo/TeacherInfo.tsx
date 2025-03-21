import { Teacher } from "types/Teacher";

interface TeacherInfoProps {
  teacher: Teacher;
}

const TeacherInfo: React.FC<TeacherInfoProps> = ({ teacher }) => {
  return (
    <div className="flex justify-between">
      <div className="hidden desktop:flex flex-col gap-2">
        <p className="text-base font-medium text-grey">Languages</p>
        <h3 className="text-2xl leading-none font-medium">
          {teacher.name} {teacher.surname}
        </h3>
      </div>

      <ul className="flex flex-col tablet:flex-row items-start gap-1 desktop:gap-4 max-desktop:justify-between max-desktop:w-full text-base font-medium h-max desktop:mr-[90px] ">
        <li className="flex items-center gap-1">
          <svg className="w-4 h-4 fill-none stroke-black">
            <use href={`/sprite.svg#icon-book-open`} />
          </svg>
          Lessons online
        </li>

        <li className="max-tablet:hidden w-0.5 h-4 bg-black opacity-20 self-center"></li>

        <li>Lessons done: {teacher.lessons_done}</li>

        <li className="max-tablet:hidden w-0.5 h-4 bg-black opacity-20 self-center"></li>

        <li className="flex items-center gap-1">
          <svg className="w-4 h-4">
            <use href={`/sprite.svg#icon-star-yellow`} />
          </svg>
          Rating: {teacher.rating}
        </li>

        <li className="max-tablet:hidden w-0.5 h-4 bg-black opacity-20 self-center"></li>

        <li>
          Price / 1 hour:{" "}
          <span className="text-green-500">${teacher.price_per_hour}</span>
        </li>
      </ul>
    </div>
  );
};

export default TeacherInfo;
