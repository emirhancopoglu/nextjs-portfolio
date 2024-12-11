"use client";
import React from "react";
import Container from "@/components/utils/container";
import ThemeSwitcherButtons from "@/components/theme-switcher/theme-switcher";
import { useThemeContext } from "@/context/theme-context";

export default function Header() {
  const { theme } = useThemeContext();
  return (
    <>
      <Container>
        <header
          className={`flex flex-row justify-between items-center w-full pt-4 pb-2 border-b ${
            theme === "dark" ? "border-gray-400" : ""
          } `}
        >
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Emirhan Çöpoğlu</h1>
            <h1 className="font-mono font-bold text-sm text-gray-500">
              Frontend Developer
            </h1>
          </div>
          <ThemeSwitcherButtons />
        </header>
      </Container>
    </>
  );
}
