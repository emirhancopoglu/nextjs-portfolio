"use client";
import { ReactTerminal } from "react-terminal";
import { useThemeContext } from "@/context/theme-context";
import { useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import Container from "@/components/utils/container";
import Projects from "@/components/projects/projects";
import { useTranslation } from "react-i18next";

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
          <a href="mailto:copogluemirhan@outlook.com">{""} e-mail</a>
        </span>
        <br />
      </>
    ),
    resume: (
      <>
        <br />
        <span className="text-[#7286D3] font-bold">{t("resume")}</span>
        <a
          href="https://drive.google.com/file/d/1RQ1cLz8N03LX2n5uXMp3FbrmF1ySmZhB/view?usp=sharing"
          target="_blank"
        >
          <FaFilePdf
            className=" mt-4"
            size={70}
            href="https://drive.google.com/file/d/1RQ1cLz8N03LX2n5uXMp3FbrmF1ySmZhB/view?usp=sharing"
          />
        </a>
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
    setCheckInput(userInput);
    if (userInput === "projects") {
      return (
        <span className="text-[#7286D3] font-bold">
          <br />
          {t("projects")}
          <br />
        </span>
      );
    } else {
      return `Komut bulunamadı: ${userInput}`;
    }
  };

  return (
    <>
      <Container>
        <div className="h-[47rem] pt-4 ">
          {checkInput === "projects" ? (
            <>
              <div className="flex justify-end">
                <button
                  className={`border p-2 rounded-lg hover:scale-95 transition-all duration-300 ${
                    theme === "dark" ? "border-gray-500" : "border-gray-200"
                  }`}
                  onClick={() => setCheckInput("")}
                >
                  <p className="text-sm">{t("backToTerminal")}</p>
                </button>
              </div>
              <Projects />
            </>
          ) : (
            <ReactTerminal
              commands={commands}
              welcomeMessage={welcomeMessage}
              themes={{
                "custom-theme": {
                  themeBGColor: `${theme === "light" ? "#F0F0F0" : "#2B2B30"}`,
                  themeToolbarColor: `${
                    theme === "light" ? "#F0F0F0" : "#2B2B30"
                  }`,
                  themeColor: `${theme === "light" ? "#4C4C6D" : "#B2B2B2"}`,
                  themePromptColor: "#F05454",
                },
              }}
              theme="custom-theme"
              errorMessage="Komut bulunamadı."
              prompt=" C:\Users\Jarvis>"
              defaultHandler={handleDefaultCommand}
            />
          )}
        </div>
      </Container>
    </>
  );
}
