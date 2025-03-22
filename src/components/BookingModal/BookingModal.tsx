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
import CustomRadio from "components/CustomRadio/CustomRadio";
import styles from "./BookingModal.module.css";

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
        <div className="max-h-[95vh] py-8 tablet:py-16 flex flex-col gap-10">
          <BookingDescription teacher={teacher} />
          <form
            className="flex flex-col gap-10 overflow-hidden"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className={`${styles.form} overflow-auto flex flex-col pl-8 desktop:pl-16`}
            >
              <div className="mb-10">
                <p className="text-2xl font-medium mb-5">
                  What is your main reason for learning English?
                </p>
                {reasons.map((reason) => (
                  <CustomRadio
                    key={reason}
                    value={reason}
                    selectedValue={watch("reason")}
                    onChange={handleReasonChange}
                  />
                ))}
              </div>
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
              <div>
                <Input
                  {...register("number")}
                  placeholder="Phone number"
                  error={errors.number}
                />
              </div>
            </div>
            <div className="px-8 desktop:px-16">
              <button
                type="submit"
                className="bg-accent text-black flex items-center justify-center font-bold text-lg rounded-xl w-full py-4 hover:bg-accent-light transition-all duration-300 ease-in cursor-pointer"
              >
                Book
              </button>
            </div>
          </form>
        </div>
      )}
    </ModalWrapper>
  );
};

export default BookingModal;
