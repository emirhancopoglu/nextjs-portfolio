"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Explorer from "./explorer";
import StatusBar from "./status-bar";
import { resolveFile, navItems } from "./files";
import { CloseIcon, FolderIcon, GridIcon, InfoIcon, MoonIcon, SunIcon } from "./icons";

function ThemeToggle({ className = "" }) {
  const { t } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      aria-label={t("toggle_theme")}
      title={t("toggle_theme")}
      className={`inline-flex items-center justify-center border border-ide-line text-ide-text transition-colors hover:border-ide-muted hover:bg-ide-active ${className}`}
    >
      {/* Icon is chosen by CSS (html.dark) so server and client markup match. */}
      <SunIcon className="hidden h-[18px] w-[18px] dark:block" />
      <MoonIcon className="h-[18px] w-[18px] dark:hidden" />
    </button>
  );
}

function Breadcrumb({ crumbs, className = "" }) {
  return (
    <span className={`truncate ${className}`}>
      {["portfolio", ...crumbs].map((c, i) => (
        <Fragment key={i}>
          {i > 0 && <span aria-hidden="true"> › </span>}
          {c}
        </Fragment>
      ))}
    </span>
  );
}

function NavIcon({ icon }) {
  if (icon === "info") return <InfoIcon className="h-[19px] w-[19px]" />;
  if (icon === "grid") return <GridIcon className="h-[17px] w-[17px]" />;
  if (icon === "braces") return <span className="text-[17px] font-semibold leading-none">{"{}"}</span>;
  return <span className="text-[18px] font-semibold leading-none">@</span>;
}

export default function IdeShell({ children }) {
  const pathname = usePathname();
  const { t } = useTranslation();
  const file = resolveFile(pathname);
  const scrollRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const firstPath = useRef(pathname);
  const hasNavigated = useRef(false);
  if (pathname !== firstPath.current) hasNavigated.current = true;

  useEffect(() => {
    setDrawerOpen(false);
    scrollRef.current?.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e) => e.key === "Escape" && setDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  return (
    <div className="flex h-dvh flex-col bg-ide-bg text-ide-text">
      {/* Desktop title bar */}
      <header className="hidden h-[53px] shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-ide-border bg-ide-panel px-4 lg:grid">
        <div className="flex gap-2 pl-1" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <p className="font-mono text-[11.5px] text-ide-muted">emirhan-copoglu — portfolio</p>
        <ThemeToggle className="h-[34px] w-[34px] justify-self-end rounded-[7px]" />
      </header>

      {/* Mobile top bar */}
      <header className="grid h-[60px] shrink-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-ide-border bg-ide-panel px-3 lg:hidden">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label={t("open_explorer")}
          aria-expanded={drawerOpen}
          className="flex h-11 w-11 items-center justify-center rounded-[9px] border border-ide-line text-ide-text"
        >
          <FolderIcon />
        </button>
        <div className="flex min-w-0 flex-col items-center gap-0.5 text-center font-mono leading-tight">
          <span className="max-w-full truncate text-[13.5px] text-ide-strong">{file.name}</span>
          <Breadcrumb crumbs={file.crumbs} className="max-w-full text-[10.5px] text-ide-muted" />
        </div>
        <ThemeToggle className="h-11 w-11 rounded-[9px]" />
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="ide-scroll hidden w-[232px] shrink-0 overflow-y-auto border-r border-ide-border bg-ide-panel lg:block">
          <Explorer />
        </aside>

        <main className="flex min-w-0 flex-1 flex-col">
          <div className="hidden h-[42px] shrink-0 border-b border-ide-border bg-ide-panel lg:flex">
            <div className="relative -mb-px flex items-center border-r border-ide-border bg-ide-bg px-[18px] font-mono text-[12.5px] text-ide-strong before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-ide-accent">
              {file.name}
            </div>
          </div>
          <div className="hidden h-8 shrink-0 items-center border-b border-ide-border px-[18px] font-mono text-[11.5px] text-ide-muted lg:flex">
            <Breadcrumb crumbs={file.crumbs} />
          </div>

          <div ref={scrollRef} className="ide-scroll min-h-0 flex-1 overflow-y-auto">
            {/*
              Page fade is a plain CSS animation (see .page-fade in globals.css):
              - opacity only, so nothing overflows and no scrollbar flashes;
              - no JS "commit final value" step, so no 1-frame flicker at the end
                (framer-motion's opacity animation blinked to 0 when finishing).
              Skipped on the first, server-rendered paint.
            */}
            <div key={pathname} className={hasNavigated.current ? "page-fade" : undefined}>
              {children}
            </div>
          </div>
        </main>
      </div>

      <StatusBar />

      {/* Mobile bottom navigation */}
      <nav
        aria-label="Primary"
        className="grid h-[80px] shrink-0 grid-cols-4 bg-ide-panel pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        {navItems.map((item) => {
          const active = item.match(pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-2 font-mono text-[11px] transition-colors ${
                active ? "text-ide-accent-fg" : "text-ide-muted hover:text-ide-soft"
              }`}
            >
              <span className="flex h-5 items-center">
                <NavIcon icon={item.icon} />
              </span>
              {t(item.key)}
            </Link>
          );
        })}
      </nav>

      {/* Mobile explorer drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label={t("explorer")}>
            <motion.button
              type="button"
              aria-label={t("close_explorer")}
              onClick={() => setDrawerOpen(false)}
              className="absolute inset-0 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="ide-scroll absolute inset-y-0 left-0 w-[272px] max-w-[85vw] overflow-y-auto border-r border-ide-border bg-ide-panel"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label={t("close_explorer")}
                className="absolute right-3 top-4 flex h-8 w-8 items-center justify-center rounded-md text-ide-muted hover:bg-ide-active hover:text-ide-text"
              >
                <CloseIcon />
              </button>
              <Explorer />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
