import BookingModal from "components/BookingModal/BookingModal";
import { useState } from "react";
import { Teacher } from "types/Teacher";

const TeacherActions: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-accent text-black rounded-xl py-4 px-12 text-lg font-bold tablet:w-max cursor-pointer transition-all duration-300 ease-in hover:bg-accent-light"
      >
        Book trial lesson
      </button>
      {isModalOpen && (
        <BookingModal onClose={handleCloseModal} teacher={teacher} />
      )}
    </>
  );
};

export default TeacherActions;
