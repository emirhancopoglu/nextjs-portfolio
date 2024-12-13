import React from "react";
import Image from "next/image";
import { useThemeContext } from "@/context/theme-context";
import NiksaMetal from "@/assets/niksametal.png";
import NiksaMetalWhite from "@/assets/niksawhitelogo.png";
import ViraGasWhite from "@/assets/viragaswhite.png";
export default function Projects() {
  const { theme } = useThemeContext();
  return (
    <>
      <div className="flex flex-wrap justify-start gap-4 max-xl:gap-4 pt-4 max-sm:justify-center">
        <div
          className={`flex flex-col justify-center items-center hover:scale-90 transition-all duration-500 w-[30%] h-60 shadow-xl rounded-md max-sm:h-44 max-sm:w-[46%] max-sm:p-4 max-lg:w-[48%] max-xl:w-[23%] p-4 border ${
            theme === "dark" ? "border-gray-500" : "border-gray-200"
          }`}
        >
          <a href="https://www.niksametal.com" target="_blank">
            <Image
              className="w-full h-full cursor-pointer object-contain pointer-events-none"
              alt="Niksa Metal"
              src={theme === "dark" ? NiksaMetalWhite : NiksaMetal}
            ></Image>
          </a>
        </div>
        <div
          className={`flex flex-col justify-center items-center hover:scale-90 transition-all duration-500 w-[30%] h-60 shadow-xl rounded-md max-sm:h-44 max-sm:w-[46%] max-sm:p-4 max-lg:w-[48%] max-xl:w-[23%] p-4 border ${
            theme === "dark" ? "border-gray-500" : "border-gray-200"
          }`}
        >
          <a href="https://www.viragas.com" target="_blank">
            <Image
              className="w-full h-full cursor-pointer object-contain pointer-events-none"
              alt="Vira Gas"
              src={ViraGasWhite}
            ></Image>
          </a>
        </div>
      </div>
    </>
  );
}
