import { yupResolver } from "@hookform/resolvers/yup";
import { useModalHandlers } from "hooks/useModalHandlers";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { Teacher } from "types/Teacher";
import Input from "components/Input/Input";
import ModalWrapper from "components/ModalWrapper/ModalWrapper";
import BookingDescription from "components/BookingDescription/BookingDescription";
import SuccessMessage from "components/SuccessMessage/SuccessMessage";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  number: yup.string().required("Phone number is required"),
  reason: yup.string().required("Please select a reason for learning English"),
});

type FormData = {
  name: string;
  email: string;
  number: string;
  reason: string;
};

interface BookingModalProps {
  onClose: () => void;
  teacher: Teacher;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose, teacher }) => {
  const [submitted, setSubmitted] = useState(false);
  const reasons = [
    "Career and business",
    "Lesson for kids",
    "Living abroad",
    "Exams and coursework",
    "Culture, travel or hobby",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: { reason: reasons[0] },
  });

  useModalHandlers(onClose);

  useState(() => {
    setValue("reason", reasons[0]);
  });

  const onSubmit = () => {
    setSubmitted(true);
  };

  const handleReasonChange = (value: string) => {
    setValue("reason", value);
  };

  return (
    <ModalWrapper onClose={onClose}>
      {submitted ? (
        <SuccessMessage onClose={onClose} />
      ) : (
        <>
          <BookingDescription
            teacher={teacher}
            reasons={reasons}
            selectedReason={watch("reason")}
            onChange={handleReasonChange}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4.5">
              <Input
                {...register("name")}
                placeholder="Full Name"
                error={errors.name}
              />
            </div>

            <div className="mb-4.5">
              <Input
                {...register("email")}
                placeholder="Email"
                error={errors.email}
              />
            </div>

            <div className="mb-10">
              <Input
                {...register("number")}
                placeholder="Phone number"
                error={errors.number}
              />
            </div>

            <button
              type="submit"
              className="bg-accent text-black flex items-center justify-center font-bold text-lg rounded-xl w-full h-[60px] hover:bg-accent-light transition-all duration-300 ease-in cursor-pointer"
            >
              Book
            </button>
          </form>
        </>
      )}
    </ModalWrapper>
  );
};

export default BookingModal;
