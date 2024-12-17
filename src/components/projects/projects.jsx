import React from "react";
import Image from "next/image";
import { useThemeContext } from "@/context/theme-context";
import NiksaMetal from "@/assets/niksametal.png";
import NiksaMetalWhite from "@/assets/niksawhitelogo.png";
import ViraGasWhite from "@/assets/viragaswhite.png";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Projects() {
  const { theme } = useThemeContext();
  return (
    <>
      <div className="flex gap-4  max-xl:gap-4 pt-4 max-sm:justify-center max-sm:flex-col">
        <div
          className={`flex flex-col justify-center items-center hover:scale-90 transition-all duration-500 w-[45rem] h-60 shadow-xl rounded-md max-sm:h-44 max-md:w-full max-sm:p-4 max-lg:w-[48%] max-xl:w-[23%] p-4 border ${
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
        <div className="flex flex-col justify-center">
          <p className="font-extrabold pb-2 max-sm:text-center">
            Vira Gas Springs
          </p>
          <p
            className={`text-justify  ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Frontend Developer pozisyonunda freelance olarak, gazlı amörtisör ve
            yay üreten firma için web sitesi geliştirdim.
          </p>
          <p className="font-extrabold py-2 max-sm:text-center">
            Bu projede neler yaptım?
          </p>
          <p
            className={`text-justify  ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Mevcut tasarımı modern ve kullanıcı dostu hale getirdim, duyarlı
            (responsive) yapıya kavuşturdum. SEO optimizasyonu gerçekleştirdim
            ve çoklu dil desteği ekledim.
          </p>
          <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-row gap-2">
              <a href="https://react.dev" target="_blank">
                <FaReact
                  size={50}
                  className={` rounded-full p-2 hover:bg-gray-200 transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gray-300 , text-black"
                      : "bg-[#F4F4F5]"
                  }`}
                  alt="ReactJS"
                />
              </a>
              <a href="https://tailwindcss.com" target="_blank">
                <RiTailwindCssFill
                  size={50}
                  className={` rounded-full p-2 hover:bg-gray-200 transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gray-300 , text-black"
                      : "bg-[#F4F4F5]"
                  }`}
                  alt="Tailwind"
                />
              </a>
            </div>

            <button
              className={` border p-2 font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-300 , text-black" : "bg-[#F4F4F5]"
              }`}
            >
              <a href="https://github.com/Dev-Capella/viragas" target="_blank">
                GitHub Repository
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-4 max-xl:gap-4 mt-32 max-sm:justify-center max-sm:flex-col max-sm:mt-12">
        <div
          className={`flex flex-col justify-center items-center hover:scale-90 transition-all duration-500 w-[45rem] h-60 shadow-xl rounded-md max-sm:h-44 max-md:w-full max-sm:p-4 max-lg:w-[48%] max-xl:w-[23%] p-4 border ${
            theme === "dark" ? "border-gray-500" : "border-gray-200"
          }`}
        >
          <a href="https://www.viragas.com" target="_blank">
            <Image
              className="w-[28rem] h-full cursor-pointer object-contain pointer-events-none"
              alt="Niksa Metal"
              src={theme === "dark" ? NiksaMetalWhite : NiksaMetal}
            ></Image>
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-extrabold pb-2 max-sm:text-center">Niksa Metal</p>
          <p
            className={`text-justify  ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Frontend Developer pozisyonunda freelance olarak, profil demir ve
            çelikten masa, sandalye ayağı üreten firma için web sitesi
            geliştirdim.
          </p>
          <p className="font-extrabold py-2 max-sm:text-center">
            Bu projede neler yaptım?
          </p>
          <p
            className={`text-justify  ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Sıfırdan modern, duyarlı (responsive) tasarım oluşturdum. Ürün
            fotoğraf galerisi için Ant Design kütüphanesini kullandım.
          </p>
          <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-row gap-2">
              <a href="https://react.dev" target="_blank">
                <FaReact
                  size={50}
                  className={` rounded-full p-2 hover:bg-gray-200 transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gray-300 , text-black"
                      : "bg-[#F4F4F5]"
                  }`}
                  alt="ReactJS"
                />
              </a>
              <a href="https://tailwindcss.com" target="_blank">
                <RiTailwindCssFill
                  size={50}
                  className={` rounded-full p-2 hover:bg-gray-200 transition-colors duration-300 ${
                    theme === "dark"
                      ? "bg-gray-300 , text-black"
                      : "bg-[#F4F4F5]"
                  }`}
                  alt="Tailwind"
                />
              </a>
            </div>

            <button
              className={`border p-2 font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-300 , text-black" : "bg-[#F4F4F5]"
              }`}
            >
              <a href="https://github.com/Dev-Capella/niksa" target="_blank">
                GitHub Repository
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
