import React from "react";
import Container from "@/components/utils/container";
import ThemeSwitcherButtons from "@/components/theme-switcher/theme-switcher";
import LanguageSwitcher from "@/components/lang-switcher/lang-switcher";

export default function Header() {
  return (
    <>
      <Container>
        <header
          className={`flex flex-row justify-between items-center w-full pt-4 pb-2 border-b max-2xl:pl-4 max-2xl:pr-4 border-gray-200 dark:border-gray-500`}
        >
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Emirhan Çöpoğlu</h1>
            <h1 className="font-bold text-sm">Frontend Developer</h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcherButtons />
          </div>
        </header>
      </Container>
    </>
  );
}
