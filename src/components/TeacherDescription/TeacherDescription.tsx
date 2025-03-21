import { Teacher } from "types/Teacher";

interface TeacherDescriptionProps {
  teacher: Teacher;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const TeacherDescription: React.FC<TeacherDescriptionProps> = ({
  teacher,
  isExpanded,
  setIsExpanded,
}) => (
  <div className="text-base font-medium">
    <p className="mb-2">
      <span className="text-grey">Speaks: </span>
      {teacher.languages.map((lang, index) => (
        <span key={lang} className="underline">
          {lang}
          {index < teacher.languages.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
    <p className="mb-2">
      <span className="text-grey">Lesson Info: </span>
      {teacher.lesson_info}
    </p>
    <p className="mb-4">
      <span className="text-grey">Conditions: </span>
      {teacher.conditions.join(". ")}
    </p>
    {!isExpanded ? (
      <button
        className="underline cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        Read more
      </button>
    ) : (
      <p className="text-base font-normal">{teacher.experience}</p>
    )}
  </div>
);

export default TeacherDescription;
