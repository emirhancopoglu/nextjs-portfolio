"use client";
import { useState } from "react";
import { ReactTerminal } from "react-terminal";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/utils/container";
import Projects from "@/components/projects/projects";
import { useThemeContext } from "@/context/theme/theme-context";

export default function TerminalPage() {
  const { theme } = useThemeContext();
  const [checkInput, setCheckInput] = useState("");
  const { t } = useTranslation();

  const commands = {
    help: (
      <>
        <br />
        <span className="text-[#7286D3] font-bold">
          <span className="text-[#1F509A] font-bold">
            {t("availableCommand")}
          </span>
          about, resume, projects, mail, help, clear
        </span>
        <br />
      </>
    ),
    about: (
      <>
        <br />
        <span className="text-[#7286D3] font-bold">{t("about")}</span>
        <br />
      </>
    ),
    mail: (
      <>
        <br />
        <span className="text-[#7286D3] font-bold">
          {t("mail")}
          <a href="mailto:copogluemirhan@outlook.com"> e-mail</a>
        </span>
        <br />
      </>
    ),
    resume: (
      <>
        <br />
        <span className="text-[#7286D3] font-bold">{t("resume")}</span>
        <a
          href="https://drive.google.com/file/d/14fiYFFtbi6SzqwLe_tGdCVsRDUENfwdm/view?usp=sharing"
          target="_blank"
          className="text-[#7286D3] font-bold"
        >
          {t("resumeReview")}
        </a>
        <br />
      </>
    ),
  };

  const welcomeMessage = (
    <>
      (c) Microsoft Corporation. {t("reserved")}
      <br /> <br />
      {t("typeCommand")}
      <span className="text-[#7286D3] font-bold">{t("defaultCommand")}</span>
      <span className="text-[#7286D3] font-bold">
        {" "}
        about, resume, projects, mail, help, clear
      </span>
      <br />
    </>
  );

  const handleDefaultCommand = (userInput) => {
    if (userInput === "projects") {
      setCheckInput("projects");
      return (
        <span className="text-[#7286D3] font-bold">
          <br />
          {t("projects")}
          <br />
        </span>
      );
    } else {
      return `${t("notFoundCommand")} ${userInput}`;
    }
  };

  return (
    <Container>
      <AnimatePresence mode="wait">
        {checkInput === "projects" ? (
          <motion.div
            key="projects"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-auto max-lg:h-full  pt-4 max-2xl:pl-4 max-2xl:pr-4 overflow-hidden"
          >
            <div className="flex justify-end">
              <button
                className={`border p-2 rounded-lg hover:scale-95 transition-all duration-300 text-black ${
                  theme === "dark" ? "bg-gray-300 , text-black" : "bg-[#F4F4F5]"
                }`}
                onClick={() => setCheckInput("")}
              >
                <p className="text-sm font-bold">{t("backToTerminal")}</p>
              </button>
            </div>
            <Projects />
          </motion.div>
        ) : (
          <motion.div
            key="terminal"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[47rem] max-lg:h-screen pt-4 max-2xl:pl-4 max-2xl:pr-4 overflow-hidden"
          >
            <ReactTerminal
              commands={commands}
              welcomeMessage={welcomeMessage}
              themes={{
                "custom-theme": {
                  themeBGColor: `${theme === "dark" ? "#2B2B30" : "#F0F0F0"}`, // Terminal'in Ana Arkaplan Rengi
                  themeToolbarColor: `${
                    theme === "dark" ? "#2B2B30" : "#F0F0F0" // Terminal'in Başlığı
                  }`,
                  themeColor: `${theme === "dark" ? "#B2B2B2" : "#4C4C6D"}`, // Terminal yazıları
                  themePromptColor: "#F05454", // Prompt yazısı
                },
              }}
              theme="custom-theme"
              errorMessage={t("notFoundCommand")}
              prompt=" C:\Users\Jarvis>"
              defaultHandler={handleDefaultCommand}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}
