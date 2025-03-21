import { NavLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";
import { useAuth } from "hooks/useAuth";

interface NavigationProps {
  variant?: "menu" | "header";
  onLinkClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  variant = "header",
  onLinkClick,
}) => {
  const { user } = useAuth();

  const linkClass: NavLinkProps["className"] = ({ isActive }) => {
    const baseHeader = "text-base font-normal transition-all";
    const baseMenu =
      "text-xl font-medium transition-all border-b-2 border-accent-light";

    const activeHeader = "border-b-2";
    const hoverHeader = "hover:border-b-2 ";

    const activeMenu = "border-black";
    const hoverMenu = "hover:border-black ";

    return clsx(
      variant === "header" && [
        baseHeader,
        isActive ? activeHeader : hoverHeader,
      ],
      variant === "menu" && [baseMenu, isActive ? activeMenu : hoverMenu]
    );
  };

  return (
    <>
      <NavLink onClick={onLinkClick} className={linkClass} to="/">
        Home
      </NavLink>
      <NavLink onClick={onLinkClick} className={linkClass} to="/teachers">
        Teachers
      </NavLink>
      {user && (
        <NavLink onClick={onLinkClick} className={linkClass} to="/favorites">
          Favorites
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
