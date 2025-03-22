import { logout } from "service/authService";
import { useAuth } from "hooks/useAuth";
import clsx from "clsx";
import toast from "react-hot-toast";
import { FiLogOut } from "react-icons/fi";

interface AuthNavProps {
  onAction: (mode?: "login" | "register") => void;
  variant?: "menu" | "header";
}

const headerLoginLogoutBtn =
  "flex gap-2 items-center text-base/tight font-bold cursor-pointer hover:text-grey transition-all duration-300 ease-in";
const headerRegisterBtn =
  "bg-black dark:bg-dark-light rounded-xl px-10 py-3.5 text-white cursor-pointer hover:bg-grey transition-all duration-300 ease-in";
const menuUniversalBtn =
  "bg-accent text-black flex gap-2 justify-center items-center text-base font-bold cursor-pointer border-2 border-accent box-border rounded-xl px-10 py-3.5 hover:bg-accent-light transition-all duration-300 ease-in";

const AuthNav: React.FC<AuthNavProps> = ({ onAction, variant = "header" }) => {
  const { user } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("You have successfully logged out!");
    onAction();
  };

  return (
    <>
      {user ? (
        <button
          onClick={handleLogout}
          className={
            variant === "header" ? headerLoginLogoutBtn : menuUniversalBtn
          }
        >
          <FiLogOut
            size={20}
            color={variant === "header" ? "var(--color-accent)" : "black"}
          />
          Logout
        </button>
      ) : (
        <div
          className={
            variant === "header" ? "flex gap-4" : "flex gap-4 w-full flex-col"
          }
        >
          <button
            onClick={() => onAction("login")}
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
            onClick={() => onAction("register")}
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
