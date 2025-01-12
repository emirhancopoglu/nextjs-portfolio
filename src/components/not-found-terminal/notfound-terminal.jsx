"use client";
import { ReactTerminal } from "react-terminal";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/context/theme/theme-context";
import Container from "@/components/utils/container";
import Link from "next/link";

export default function NotFoundTerminalPage() {
  const { theme } = useThemeContext();
  const { t } = useTranslation();
  const pathName = usePathname();
  const trimmedPath = pathName.replace("/", "");

  const welcomeMessage = (
    <>
      (c) Microsoft Corporation. {t("reserved")}
      <br /> <br />
      <span className="text-[#7286D3] font-bold">
        {trimmedPath} {t("notFoundMessage")}
        <Link href="/"> {t("notFoundClick")}.</Link>
        <br />
      </span>
      <br />
    </>
  );

  return (
    <Container>
      <div className="h-[47rem] max-lg:h-screen pt-4 max-2xl:pl-4 max-2xl:pr-4 overflow-hidden">
        <ReactTerminal
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
          enableInput={false}
          prompt="C:\Users\Jarvis>"
        />
      </div>
    </Container>
  );
}
