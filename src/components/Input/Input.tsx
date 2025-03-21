import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  error?: FieldError;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, type, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          {...props}
          type={type}
          className="w-full border border-solid border-black/10 rounded-xl py-4 px-4.5 text-base font-normal placeholder:text-black"
        />
        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
