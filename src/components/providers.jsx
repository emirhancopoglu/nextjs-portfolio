"use client";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18next";

const STORAGE_KEY = "lang";

export default function Providers({ children }) {
  useEffect(() => {
    const sync = (lng) => {
      document.documentElement.lang = lng;
      try {
        localStorage.setItem(STORAGE_KEY, lng);
      } catch {}
    };

    i18n.on("languageChanged", sync);

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved !== i18n.language && ["tr", "en"].includes(saved)) {
        i18n.changeLanguage(saved);
      }
    } catch {}

    return () => i18n.off("languageChanged", sync);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="ide-theme"
      disableTransitionOnChange
    >
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  );
}
