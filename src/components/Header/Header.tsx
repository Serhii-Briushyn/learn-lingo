import { useState } from "react";
import { LuMenu } from "react-icons/lu";

import Logo from "components/Logo/Logo";
import Menu from "components/Menu/Menu";
import Navigation from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import AuthModal from "components/AuthModal/AuthModal";
import ThemeToggle from "components/ThemeToggle/ThemeToggle";

interface HeaderProps {
  isHomePage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHomePage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const handleAction = (mode?: "login" | "register") => {
    setIsMenuOpen(false);
    if (mode) {
      setAuthMode(mode);
      setIsAuthModalOpen(true);
    } else {
      setIsAuthModalOpen(false);
    }
  };

  return (
    <header className="w-full h-auto sticky top-0 bg-inherit z-50 ">
      <div
        className={`container m-auto relative flex justify-between items-center w-full py-5 px-10 tablet:px-16 
        ${isHomePage ? "desktop:px-32" : "desktop:px-40"}`}
      >
        <Logo />
        <nav className="text-base font-normal hidden tablet:flex gap-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Navigation />
        </nav>
        <div className="hidden desktop:flex">
          <AuthNav onAction={handleAction} />
        </div>
        <button
          className="desktop:hidden w-7 h-7 cursor-pointer hover:text-grey transition-all duration-300 ease-in"
          onClick={() => setIsMenuOpen(true)}
        >
          <LuMenu className="h-full w-full text-current" />
        </button>
        <ThemeToggle />
        {isMenuOpen && <Menu onAction={handleAction} />}
        {isAuthModalOpen && (
          <AuthModal mode={authMode} onAction={handleAction} />
        )}
      </div>
    </header>
  );
};

export default Header;
