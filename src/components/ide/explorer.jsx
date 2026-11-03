"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { projects, projectFile } from "@/data/projects";
import { FileGlyph } from "./icons";

const rowBase =
  "flex h-[30px] items-center gap-2 rounded-md px-2.5 font-mono text-[12.5px] transition-colors";
const rowState = (active) =>
  active
    ? "bg-ide-active text-ide-strong"
    : "text-ide-soft hover:bg-ide-active/60 hover:text-ide-text";

function FileRow({ href, kind, label, nested = false, active }) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`${rowBase} ${rowState(active)} ${nested ? "pl-[26px]" : ""}`}
      >
        <span className="flex w-[14px] shrink-0 items-center justify-center">
          <FileGlyph kind={kind} />
        </span>
        <span className="truncate">{label}</span>
      </Link>
    </li>
  );
}

export default function Explorer() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const folderActive = pathname === "/projects";

  return (
    <nav aria-label={t("explorer")} className="pb-6">
      <p className="px-[18px] pb-[14px] pt-[22px] font-mono text-[10.5px] tracking-[0.14em] text-ide-muted">
        {t("explorer")}
      </p>
      <ul className="space-y-[3px] px-2">
        <FileRow href="/" kind="readme" label="README.md" active={pathname === "/"} />

        <li>
          <div className={`${rowBase} gap-1.5 !px-0 ${rowState(folderActive)}`}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="explorer-projects"
              aria-label="projects/"
              className="flex h-full w-[20px] shrink-0 items-center justify-end text-[11px] text-ide-accent-fg"
            >
              <span className={`transition-transform ${open ? "" : "-rotate-90"}`}>▾</span>
            </button>
            <Link
              href="/projects"
              aria-current={folderActive ? "page" : undefined}
              className="flex h-full flex-1 items-center pr-2.5"
            >
              projects/
            </Link>
          </div>
          {open && (
            <ul id="explorer-projects" className="mt-[3px] space-y-[3px]">
              {projects.map((p) => (
                <FileRow
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  kind={p.ext || "tsx"}
                  label={projectFile(p)}
                  nested
                  active={pathname === `/projects/${p.slug}`}
                />
              ))}
            </ul>
          )}
        </li>

        <FileRow href="/stack" kind="json" label="stack.json" active={pathname === "/stack"} />
        <FileRow href="/contact" kind="ts" label="contact.ts" active={pathname === "/contact"} />
      </ul>
    </nav>
  );
}
