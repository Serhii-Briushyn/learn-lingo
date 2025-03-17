import { NavLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";

interface NavigationProps {
  variant?: "menu" | "header";
}

const Navigation: React.FC<NavigationProps> = ({ variant = "header" }) => {
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
      <NavLink className={linkClass} to="/">
        Home
      </NavLink>
      <NavLink className={linkClass} to="/teachers">
        Teachers
      </NavLink>
    </>
  );
};

export default Navigation;
