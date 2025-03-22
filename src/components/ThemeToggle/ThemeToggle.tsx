import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-1/2 -translate-y-1/2 right-1/4 tablet:right-1/6 w-max desktop:left-1/4 transform cursor-pointer transition-all duration-300 ease-in hover:scale-125"
    >
      {isDarkMode ? (
        <BsFillSunFill size={24} color="#f8b400" />
      ) : (
        <BsFillMoonStarsFill size={24} color="#1e3a8a" />
      )}
    </button>
  );
};

export default ThemeToggle;
