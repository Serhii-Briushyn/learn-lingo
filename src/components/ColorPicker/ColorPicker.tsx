import { useEffect, useRef, useState } from "react";
import { colors } from "helpers/colors";
import { useThemeColors } from "hooks/useThemeColors";
import { motion, AnimatePresence } from "framer-motion";

const ColorPicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedColor, changeTheme } = useThemeColors();

  const pickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleColorSelect = (color: {
    main: string;
    light: string;
    gradientFrom: string;
    gradientTo: string;
  }) => {
    changeTheme(color);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-6 right-6 color-picker" ref={pickerRef}>
      <div
        className="w-8 h-8 rounded-full cursor-pointer border border-grey-light hover:scale-110 transition-all duration-300 ease-in"
        style={{ backgroundColor: `var(${selectedColor})` }}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="absolute top-10 left-0 flex flex-col gap-1 transition-all duration-300 ease-in"
          >
            {colors.map((color) => (
              <li
                key={color.main}
                className="w-8 h-8 rounded-full cursor-pointer hover:scale-110 border border-grey-light transition-all duration-300 ease-in"
                style={{ backgroundColor: `var(${color.main})` }}
                onClick={() => handleColorSelect(color)}
              ></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;
