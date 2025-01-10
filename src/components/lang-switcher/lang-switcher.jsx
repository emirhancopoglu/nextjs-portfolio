"use client";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      {i18n.language === "en" ? (
        <img
          alt="United States"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg"
          onClick={() => changeLanguage("tr")}
          className="object-contain"
          width={27}
          height={27}
        />
      ) : (
        <img
          alt="United States"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          onClick={() => changeLanguage("en")}
          className="object-contain"
          width={27}
          height={27}
        />
      )}
    </>
  );
};

export default LanguageSwitcher;
