"use client";
import { useTranslation } from "react-i18next";

function LangSwitch() {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language;

  return (
    <span role="group" aria-label={t("switch_language")} className="flex items-center">
      {["tr", "en"].map((lng, i) => (
        <span key={lng} className="flex items-center">
          {i > 0 && <span className="px-[0.6ch]" aria-hidden="true">|</span>}
          <button
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={current === lng}
            className={`uppercase transition-opacity hover:opacity-100 ${
              current === lng ? "font-semibold" : "opacity-60"
            }`}
          >
            {lng}
          </button>
        </span>
      ))}
    </span>
  );
}

export default function StatusBar() {
  return (
    <footer className="flex h-5 shrink-0 items-center justify-between bg-ide-accent px-3 font-mono text-[11px] text-ide-ink lg:h-[27px] lg:px-4 lg:text-[11.5px]">
      <span className="whitespace-nowrap">⎇ main</span>
      <div className="flex items-center gap-[2ch]">
        <LangSwitch />
        <span className="hidden lg:inline">UTF-8</span>
        <span className="hidden lg:inline">Next.js</span>
      </div>
    </footer>
  );
}
