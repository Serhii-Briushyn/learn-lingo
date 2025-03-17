import { useState, useEffect } from "react";

export const useThemeColors = () => {
  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem("selectedColor") || "--color-orange"
  );
  const [selectedLightColor, setSelectedLightColor] = useState(
    localStorage.getItem("selectedLightColor") || "--color-orange-light"
  );
  const [gradientFrom, setGradientFrom] = useState(
    localStorage.getItem("gradientFrom") || "--color-gradient-orange-from"
  );
  const [gradientTo, setGradientTo] = useState(
    localStorage.getItem("gradientTo") || "--color-gradient-orange-to"
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--color-accent",
      `var(${selectedColor})`
    );
    document.documentElement.style.setProperty(
      "--color-accent-light",
      `var(${selectedLightColor})`
    );
    document.documentElement.style.setProperty(
      "--color-gradient-from",
      `var(${gradientFrom})`
    );
    document.documentElement.style.setProperty(
      "--color-gradient-to",
      `var(${gradientTo})`
    );
  }, [selectedColor, selectedLightColor, gradientFrom, gradientTo]);

  const changeTheme = (color: {
    main: string;
    light: string;
    gradientFrom: string;
    gradientTo: string;
  }) => {
    setSelectedColor(color.main);
    setSelectedLightColor(color.light);
    setGradientFrom(color.gradientFrom);
    setGradientTo(color.gradientTo);

    localStorage.setItem("selectedColor", color.main);
    localStorage.setItem("selectedLightColor", color.light);
    localStorage.setItem("gradientFrom", color.gradientFrom);
    localStorage.setItem("gradientTo", color.gradientTo);
  };

  return {
    selectedColor,
    selectedLightColor,
    gradientFrom,
    gradientTo,
    changeTheme,
  };
};
