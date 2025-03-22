import { Teacher } from "types/Teacher";

interface BookingDescriptionProps {
  teacher: Teacher;
}

const BookingDescription: React.FC<BookingDescriptionProps> = ({ teacher }) => {
  return (
    <div className="flex flex-col gap-5 px-8 desktop:px-16">
      <h3 className="text-[40px] leading-[1.2] tracking-[-0.02em] font-medium">
        Book trial lesson
      </h3>
      <p className="text-base/snug font-normal opacity-80">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className="flex items-center gap-3.5">
        <img
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
          className="w-11 h-11 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <p className="text-xs text-grey font-medium">Your teacher</p>
          <p className="text-base font-medium">
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingDescription;
