import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  type: "language" | "level" | "maxPrice";
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const widthMap = {
    language: "tablet:w-56",
    level: "tablet:w-48",
    maxPrice: "tablet:w-40",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`bg-white dark:bg-dark-light rounded-[14px] py-3.5 px-4.5 text-lg/tight font-medium flex justify-between items-center cursor-pointer ${widthMap[type]}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="truncate w-full">{value}</span>
        <svg
          className={`max-w-5 h-5 w-full fill-none stroke-black dark:stroke-white transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <use href={`/sprite.svg#icon-chevron-down`} />
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-[calc(100%+4px)] w-full flex flex-col gap-2 bg-white dark:bg-dark-light rounded-[14px] py-3.5 px-4.5 z-10"
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`text-lg/tight font-medium w-full truncate cursor-pointer transition-all duration-200 ease-in ${
                  value === option ? "text-black dark:text-white" : "opacity-20"
                } hover:opacity-100`}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
