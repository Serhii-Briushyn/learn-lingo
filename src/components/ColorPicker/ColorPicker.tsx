import { useEffect, useRef, useState } from "react";
import { colors } from "helpers/colors";
import { useThemeColors } from "hooks/useThemeColors";

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

  return (
    <div className="absolute top-6 right-6 color-picker" ref={pickerRef}>
      <div
        className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
        style={{ backgroundColor: `var(${selectedColor})` }}
        onClick={() => setIsOpen(!isOpen)}
      ></div>

      {isOpen && (
        <div className="absolute top-12 left-0 flex flex-col gap-1 transition-all duration-300">
          {colors.map((color) => (
            <div
              key={color.main}
              className="w-10 h-10 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 border border-gray-300"
              style={{ backgroundColor: `var(${color.main})` }}
              onClick={() => changeTheme(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
