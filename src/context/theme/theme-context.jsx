"use client";
import React, { createContext, useContext } from "react";
import { useTheme } from "next-themes";

const ThemeContext = createContext();

export const ThemeSwitchProvider = ({ children }) => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
