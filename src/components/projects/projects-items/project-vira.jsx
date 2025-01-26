import React from "react";
import Image from "next/image";
import { useThemeContext } from "@/context/theme/theme-context";
import { useTranslation } from "react-i18next";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import ViraGasWhite from "@/assets/viragaswhite.png";

export default function ProjectVira() {
  const { theme } = useThemeContext();
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-4 items-center max-xl:gap-4 pt-4 max-sm:justify-center max-sm:flex-col">
        <div
          className={`flex flex-col justify-center items-center hover:scale-90 transition-all duration-500 w-[40%] h-60 shadow-xl rounded-md max-sm:h-44 max-md:w-full max-sm:p-4 max-lg:w-[48%] max-xl:w-[23%] p-4 border border-gray-200 dark:border-gray-500 `}
        >
          <a
            className="w-full h-full"
            href="https://www.viragas.com"
            target="_blank"
          >
            <Image
              className="w-full h-full cursor-pointer object-contain pointer-events-none"
              alt="Vira Gas"
              src={ViraGasWhite}
            ></Image>
          </a>
        </div>
        <div className="flex flex-col justify-center w-[60%] max-xl:w-full">
          <p className="font-extrabold pb-2 max-sm:text-center">
            Vira Gas Springs
          </p>
          <p className={`text-justify text-gray-600 dark:text-gray-300`}>
            {t("ViraGasDescription")}
          </p>
          <p className="font-extrabold py-2 max-sm:text-center">
            {t("WhatIDid")}
          </p>
          <p className={`text-justify text-gray-600 dark:text-gray-300`}>
            {t("ViraGasWhatIDid")}
          </p>
          <div className="flex flex-row justify-between pt-4 items-center">
            <div className="flex flex-row gap-2">
              <a href="https://react.dev" target="_blank">
                <FaReact
                  size={50}
                  className={`rounded-full p-2 hover:bg-gray-200 transition-colors duration-300 text-black dark:text-white dark:hover:bg-gray-800`}
                  alt="ReactJS"
                />
              </a>
              <a href="https://tailwindcss.com" target="_blank">
                <RiTailwindCssFill
                  size={50}
                  className={`rounded-full p-2 hover:bg-gray-200 transition-colors duration-300 text-black dark:text-white dark:hover:bg-gray-800`}
                  alt="Tailwind"
                />
              </a>
            </div>
            <a
              className="text-black"
              href="https://github.com/Dev-Capella/viragas"
              target="_blank"
            >
              <button
                className={`border p-2 font-semibold rounded-full bg-[#F4F4F5] hover:bg-gray-300 transition-colors duration-300  dark:bg-gray-300 dark:hover:bg-gray-200 dark:text-black`}
              >
                GitHub Repository
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
