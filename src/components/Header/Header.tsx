import { useState } from "react";
import { LuMenu } from "react-icons/lu";

import Logo from "components/Logo/Logo";
import Menu from "components/Menu/Menu";
import Navigation from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import AuthModal from "components/AuthModal/AuthModal";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
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
    <header
      className={`container m-auto relative flex justify-between items-center w-full py-5 px-10 tablet:px-16 desktop:px-32 ${className}`}
    >
      <Logo />

      <nav className="hidden tablet:flex gap-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Navigation />
      </nav>

      <div className="hidden desktop:flex">
        <AuthNav onAction={handleAction} />
      </div>

      <button
        className="desktop:hidden text-black w-7 h-7 cursor-pointer hover:text-grey transition-all ease-in"
        onClick={() => setIsMenuOpen(true)}
      >
        <LuMenu className="h-full w-full text-current" />
      </button>

      {isMenuOpen && <Menu onAction={handleAction} />}

      {isAuthModalOpen && <AuthModal mode={authMode} onAction={handleAction} />}
    </header>
  );
};

export default Header;
