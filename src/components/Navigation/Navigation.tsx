import { NavLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";
import { useAuth } from "hooks/useAuth";

interface NavigationProps {
  onLinkClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onLinkClick }) => {
  const { user } = useAuth();

  const linkClass: NavLinkProps["className"] = ({ isActive }) => {
    const baseClass = "transition-all duration-300 ease-in opacity-60";
    const activeClass = "underline opacity-100 cursor-default";
    const hoverClass = "hover:opacity-100";
    return clsx([baseClass, isActive ? activeClass : hoverClass]);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    isActive: boolean
  ) => {
    if (isActive) e.preventDefault();
    if (onLinkClick && !isActive) onLinkClick();
  };

  return (
    <>
      <NavLink
        onClick={(e) => handleClick(e, window.location.pathname === "/")}
        className={linkClass}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={(e) =>
          handleClick(e, window.location.pathname === "/teachers")
        }
        className={linkClass}
        to="/teachers"
      >
        Teachers
      </NavLink>
      {user && (
        <NavLink
          onClick={(e) =>
            handleClick(e, window.location.pathname === "/favorites")
          }
          className={linkClass}
          to="/favorites"
        >
          Favorites
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
