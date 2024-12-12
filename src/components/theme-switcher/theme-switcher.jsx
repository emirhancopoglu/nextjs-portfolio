"use client";
import React from "react";
import { useThemeContext } from "@/context/theme-context";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeSwitcherButtons() {
  const { theme, setTheme } = useThemeContext();

  return (
    <>
      {theme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className="transition-all duration-1000 "
        >
          <IoMoonOutline size={25} />
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
          className="transition-all duration-1000"
        >
          <IoSunnyOutline size={25} />
        </button>
      )}
    </>
  );
}
