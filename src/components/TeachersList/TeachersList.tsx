import TeacherCard from "components/TeacherCard/TeacherCard";
import { Teacher } from "types/Teacher";

const TeachersList: React.FC<{ teachers: Teacher[] }> = ({ teachers }) => {
  if (!teachers.length)
    return <p className="text-base font-normal">No teachers found.</p>;

  return (
    <ul className="flex flex-col gap-8 mb-16">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </ul>
  );
};

export default TeachersList;
