import React, { createContext, useState, useContext } from "react";

const themes = {
  light: "bg-gray-100 text-gray-900",
  dark: "bg-gray-900 text-white",
  teal: "bg-teal-100 text-teal-900",
  pink: "bg-pink-100 text-pink-900",
  amber: "bg-amber-100 text-amber-900",
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
