import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { useThemeContext } from "@/context/theme/theme-context";
import DerinWayHomeLogo from "@/assets/derinwayhome.png";

export default function ProjectDerin() {
  const { theme } = useThemeContext();
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-4 max-xl:gap-4 pt-4 max-sm:justify-center items-center max-sm:flex-col mt-32 max-sm:mt-12 mb-4 max-sm:mb-0 ">
        <div
          className={`flex flex-col justify-center items-center hover:scale-90 transition-all duration-500 w-[40%] h-60 shadow-xl rounded-md max-sm:h-44 max-md:w-full max-sm:p-4 max-lg:w-[48%] max-xl:w-[23%] p-4 border border-gray-200 dark:border-gray-500`}
        >
          <a
            className="w-full h-full"
            href="https://derinwayhomes.com/"
            target="_blank"
          >
            <Image
              className="w-full h-full cursor-pointer object-contain pointer-events-none"
              alt="DerinWayHomeLogo"
              src={DerinWayHomeLogo}
            ></Image>
          </a>
        </div>
        <div className="flex flex-col justify-center w-[60%] max-xl:w-full">
          <p className="font-extrabold pb-2 max-sm:text-center">
            Derin Way Home
          </p>
          <p className={`text-justify text-gray-600 dark:text-gray-300`}>
            {t("DerinDescription")}
          </p>
          <p className="font-extrabold py-2 max-sm:text-center">
            {t("WhatIDid")}
          </p>
          <p className={`text-justify text-gray-600 dark:text-gray-300`}>
            {t("DerinWhatIDid")}
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
              href="https://github.com/Dev-Capella/derinwayhome"
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
