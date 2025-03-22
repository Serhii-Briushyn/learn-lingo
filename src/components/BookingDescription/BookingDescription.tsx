import CustomRadio from "components/CustomRadio/CustomRadio";
import { Teacher } from "types/Teacher";

interface BookingDescriptionProps {
  teacher: Teacher;
  reasons: string[];
  selectedReason: string;
  onChange: (value: string) => void;
}

const BookingDescription: React.FC<BookingDescriptionProps> = ({
  teacher,
  reasons,
  selectedReason,
  onChange,
}) => {
  return (
    <div className="mb-1">
      <h3 className="text-[40px] leading-[1.2] tracking-[-0.02em] font-medium mb-5">
        Book trial lesson
      </h3>
      <p className="text-base/snug font-normal opacity-80 mb-5">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className="flex items-center gap-3.5 mb-10">
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

      <div>
        <p className="text-2xl font-medium mb-5">
          What is your main reason for learning English?
        </p>
        {reasons.map((reason) => (
          <CustomRadio
            key={reason}
            value={reason}
            selectedValue={selectedReason}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingDescription;
