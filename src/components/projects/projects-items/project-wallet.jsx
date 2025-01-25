import React from "react";
import Image from "next/image";
import { useThemeContext } from "@/context/theme/theme-context";
import { useTranslation } from "react-i18next";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import WalletManagement from "@/assets/walletmanagement.png";
export default function ProjectWallet() {
  const { theme } = useThemeContext();
  const { t } = useTranslation();
  return (
    <>
      <div className="flex gap-4 max-xl:gap-4 pt-4 max-sm:justify-center items-center max-sm:flex-col mt-32 max-sm:mt-12 mb-4 max-sm:mb-0 ">
        <div
          className={`flex flex-col justify-center items-center hover:scale-90 transition-all duration-500 w-[40%] h-60 shadow-xl rounded-md max-sm:h-44 max-md:w-full max-sm:p-4 max-lg:w-[48%] max-xl:w-[23%] p-4 border ${
            theme === "dark" ? "border-gray-500" : "border-gray-200"
          }`}
        >
          <a
            className="w-full h-full"
            href="https://walletmanagement.vercel.app"
            target="_blank"
          >
            <Image
              className="w-full h-full cursor-pointer object-contain pointer-events-none"
              alt="WalletManagement"
              src={WalletManagement}
            ></Image>
          </a>
        </div>
        <div className="flex flex-col justify-center w-[60%] max-xl:w-full">
          <p className="font-extrabold pb-2 max-sm:text-center">
            Wallet Management
          </p>
          <p
            className={`text-justify  ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("WalletDescription")}
          </p>
          <p className="font-extrabold py-2 max-sm:text-center">
            {t("WhatIDid")}
          </p>
          <p
            className={`text-justify  ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("WalletWhatIDid")}
          </p>
          <div className="flex flex-row justify-between pt-4 items-center">
            <div className="flex flex-row gap-2">
              <a href="https://nextjs.org/" target="_blank">
                <RiNextjsFill
                  size={50}
                  className={`rounded-full  hover:bg-gray-200 transition-colors duration-300 text-black  ${
                    theme === "dark" ? "text-white hover:bg-[#121212]" : ""
                  }`}
                  alt="NextJS"
                />
              </a>
              <a href="https://mui.com/material-ui/" target="_blank">
                <SiMui
                  size={50}
                  className={`rounded-full p-2 hover:bg-gray-200 transition-colors duration-300 text-black ${
                    theme === "dark" ? "text-white hover:bg-[#121212]" : ""
                  } `}
                  alt="MaterialUI"
                />
              </a>
              <a href="https://tailwindcss.com" target="_blank">
                <RiTailwindCssFill
                  size={50}
                  className={`rounded-full p-2 hover:bg-gray-200 transition-colors duration-300 text-black  ${
                    theme === "dark" ? "text-white hover:bg-[#121212]" : ""
                  }`}
                  alt="Tailwind"
                />
              </a>
            </div>
            <a
              className="text-black"
              href="https://github.com/emirhancopoglu/walletManagement"
              target="_blank"
            >
              <button
                className={`border p-2 font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 ${
                  theme === "dark" ? "bg-gray-300 , text-black" : "bg-[#F4F4F5]"
                }`}
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
