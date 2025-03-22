import { forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === "password";

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    if (isPasswordField) {
      return (
        <>
          <div className="relative">
            <input
              ref={ref}
              {...props}
              type={showPassword ? "text" : "password"}
              className="w-full bg-white dark:bg-dark-light border border-solid border-black/10 dark:border-white/10 rounded-xl py-4 px-4.5 text-base font-normal placeholder:text-black dark:placeholder:text-white focus:border-grey transition-all duration-200 ease-in outline-none"
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
          {error && (
            <p className="text-sm text-red-500 mt-2">{error.message}</p>
          )}
        </>
      );
    }

    return (
      <>
        <input
          ref={ref}
          {...props}
          type={type}
          className="w-full bg-white dark:bg-dark-light border border-solid border-black/10 dark:border-white/10 rounded-xl py-4 px-4.5 text-base font-normal placeholder:text-black dark:placeholder:text-white focus:border-grey transition-all duration-200 ease-in outline-none"
        />

        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
