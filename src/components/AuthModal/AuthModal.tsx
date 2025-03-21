import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import * as yup from "yup";
import { login, register as registerUser } from "service/authService";
import { FirebaseError } from "firebase/app";
import FIREBASE_ERRORS from "helpers/firebaseErrors";
import { useModalHandlers } from "hooks/useModalHandlers";
import Input from "components/Input/Input";
import ModalWrapper from "components/ModalWrapper/ModalWrapper";

interface AuthModalProps {
  mode?: "login" | "register";
  onAction: (mode?: "login" | "register") => void;
}

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

type FormData = {
  name?: string;
  email: string;
  password: string;
};

const AuthModal: React.FC<AuthModalProps> = ({ mode = "login", onAction }) => {
  const schema = mode === "register" ? registerSchema : loginSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useModalHandlers(onAction);

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      if (mode === "register") {
        await registerUser(data.name!, data.email, data.password);
        toast.success(
          `Welcome, ${data.name}! You have successfully registered.`
        );
      } else {
        await login(data.email, data.password);
        toast.success("Welcome back! You have successfully logged in.");
      }
      onAction();
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        const message =
          FIREBASE_ERRORS[err.code] || "An unexpected error occurred.";
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <ModalWrapper onClose={() => onAction()}>
      <h2 className="text-4xl font-medium mb-5">
        {mode === "register" ? "Registration" : "Log In"}
      </h2>

      <p className="text-base font-normal mb-10">
        {mode === "register"
          ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
          : "Welcome back! Please enter your credentials to access your account and continue your search for a teacher."}
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {mode === "register" && (
          <div className="mb-4.5">
            <Input
              {...register("name")}
              placeholder="Name"
              error={errors.name}
            />
          </div>
        )}

        <div className="mb-4.5">
          <Input
            {...register("email")}
            placeholder="Email"
            error={errors.email}
          />
        </div>

        <div className="mb-10">
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            error={errors.password}
          />
        </div>

        <button
          type="submit"
          className="bg-accent flex items-center justify-center font-bold text-lg rounded-xl w-full h-[60px] hover:bg-accent-light transition-all ease-in cursor-pointer"
        >
          {mode === "register" ? "Sign Up" : "Log in"}
        </button>
      </form>
    </ModalWrapper>
  );
};

export default AuthModal;
