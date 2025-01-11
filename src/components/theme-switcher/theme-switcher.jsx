"use client";
import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useThemeContext } from "@/context/theme/theme-context";

export default function ThemeSwitcherButtons() {
  const { resolvedTheme, setTheme } = useThemeContext();

  return (
    <>
      {resolvedTheme === "light" ? (
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
