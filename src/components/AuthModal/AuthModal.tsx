import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import * as yup from "yup";
import ReactDOM from "react-dom";
import { login, register as registerUser } from "service/authService";
import { FirebaseError } from "firebase/app";
import FIREBASE_ERRORS from "helpers/firebaseErrors";

interface AuthModalProps {
  mode?: "login" | "register";
  onClose: () => void;
}

const schema = yup.object({
  name: yup.string().optional(),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

type FormData = yup.InferType<typeof schema>;

const AuthModal: React.FC<AuthModalProps> = ({ mode = "login", onClose }) => {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      if (mode === "register") {
        await registerUser(data.name || "", data.email, data.password);
        toast.success(
          `Welcome, ${data.name || "User"}! You have successfully registered.`
        );
      } else {
        await login(data.email, data.password);
        toast.success("Welcome back! You have successfully logged in.");
      }
      onClose();
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

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-[343px] w-full rounded-primary relative p-8 tablet:max-w-[566px] tablet:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-xl cursor-pointer transition-all ease-in hover:scale-125"
        >
          <svg className="w-8 h-8 stroke-black">
            <use href={`/sprite.svg#icon-close`} />
          </svg>
        </button>

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
              <input
                {...formRegister("name")}
                placeholder="Name"
                className="w-full border border-solid border-black/10 rounded-xl py-4 px-4.5 text-base font-normal"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
          )}

          <div className="mb-4.5">
            <input
              {...formRegister("email")}
              placeholder="Email"
              className="w-full border border-solid border-black/10 rounded-xl py-4 px-4.5 text-base font-normal"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-10">
            <input
              {...formRegister("password")}
              type="password"
              placeholder="Password"
              className="w-full border border-solid border-black/10 rounded-xl py-4 px-4.5 text-base font-normal"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-accent flex items-center justify-center font-bold text-lg rounded-xl w-full h-[60px] hover:bg-accent-light transition-all ease-in cursor-pointer"
          >
            {mode === "register" ? "Sign Up" : "Log in"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default AuthModal;
