import { useEffect, useState } from "react";
import Navigation from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import { useModalHandlers } from "hooks/useModalHandlers";

interface MenuProps {
  onAction: (mode?: "login" | "register") => void;
}

const Menu: React.FC<MenuProps> = ({ onAction }) => {
  const [isVisible, setIsVisible] = useState(false);

  useModalHandlers(onAction);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onAction(), 300);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
      onClick={handleClose}
    >
      <div
        className={`
          relative max-w-[425px] w-full h-screen bg-accent-light  desktop:hidden 
          px-10 py-16 flex flex-col justify-between transition-transform duration-300 ease-in-out
          ${isVisible ? "translate-x-0" : "translate-x-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-5 text-xl cursor-pointer transition-all ease-in hover:scale-125"
          onClick={handleClose}
        >
          <svg className="w-8 h-8 stroke-black">
            <use href={`/sprite.svg#icon-close`} />
          </svg>
        </button>

        <div className="absolute left-1/2 top-2/6 -translate-x-1/2  flex flex-col items-center gap-4">
          <Navigation variant="menu" onLinkClick={handleClose} />
        </div>

        <div className="mt-auto flex flex-col">
          <AuthNav variant="menu" onAction={onAction} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
