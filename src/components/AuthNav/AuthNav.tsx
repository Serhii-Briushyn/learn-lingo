import { logout } from "service/authService";
import { useAuth } from "hooks/useAuth";
import clsx from "clsx";
import toast from "react-hot-toast";

interface AuthNavProps {
  onAuthOpen: (mode: "login" | "register") => void;
  variant?: "menu" | "header";
}
const headerLoginLogoutBtn =
  "flex gap-2 items-center text-base/tight font-bold cursor-pointer text-black transition-all hover:text-grey hover:scale-110 ease-in";
const headerRegisterBtn =
  "bg-black rounded-xl px-10 py-3.5 text-white cursor-pointer hover:bg-grey transition-colors ease-in";
const menuUniversalBtn =
  "bg-accent flex gap-2 justify-center items-center text-base font-bold cursor-pointer border-2 border-accent box-border rounded-xl px-10 py-3.5 transition-all ease-in hover:bg-accent-light";

const AuthNav: React.FC<AuthNavProps> = ({
  onAuthOpen,
  variant = "header",
}) => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <button
          onClick={() => {
            logout();
            toast.success("You have successfully logged out!");
          }}
          className={
            variant === "header" ? headerLoginLogoutBtn : menuUniversalBtn
          }
        >
          <svg
            className={clsx(
              "w-5 h-5 fill-none",
              variant === "header" ? "stroke-accent" : "stroke-black"
            )}
          >
            <use href={`/sprite.svg#icon-log-in`} />
          </svg>
          Logout
        </button>
      ) : (
        <div
          className={
            variant === "header" ? "flex gap-4" : "flex gap-4 w-full flex-col"
          }
        >
          <button
            onClick={() => onAuthOpen("login")}
            className={
              variant === "header" ? headerLoginLogoutBtn : menuUniversalBtn
            }
          >
            <svg
              className={clsx(
                "w-5 h-5 fill-none",
                variant === "header" ? "stroke-accent" : "stroke-black"
              )}
            >
              <use href={`/sprite.svg#icon-log-in`} />
            </svg>
            Log in
          </button>
          <button
            onClick={() => onAuthOpen("register")}
            className={
              variant === "header" ? headerRegisterBtn : menuUniversalBtn
            }
          >
            Registration
          </button>
        </div>
      )}
    </>
  );
};

export default AuthNav;
