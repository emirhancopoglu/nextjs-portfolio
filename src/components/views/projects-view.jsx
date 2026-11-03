"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { projects, projectFile } from "@/data/projects";
import { pagePad } from "@/components/ide/buttons";
import { ProjectPreview } from "./project-view";

export default function ProjectsView() {
  const { t } = useTranslation();

  return (
    <div className={pagePad}>
      <p className="font-mono text-[15px] text-ide-muted">{t("projects_cmd")}</p>
      <p className="mt-1.5 font-mono text-[15px] text-ide-string">
        {t("projects_count", { count: projects.length })}
      </p>

      <ul className="mt-7 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-ide-border transition-colors hover:border-ide-line hover:bg-ide-panel"
            >
              <div className="overflow-hidden border-b border-ide-border bg-ide-panel">
                <ProjectPreview
                  project={p}
                  sizes="(min-width: 1536px) 33vw, (min-width: 640px) 50vw, 100vw"
                  priority={i < 2}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 px-4 py-3.5">
                <p className="flex items-center gap-2 font-mono text-[13px] text-ide-soft">
                  <span className={`text-[9px] ${p.ext === "liquid" ? "text-ide-string" : "text-ide-file"}`} aria-hidden="true">◆</span>
                  {projectFile(p)}
                  <span className="ml-auto text-[12px] text-ide-keyword">{t(p.type)}</span>
                </p>
                <h2 className="text-[17px] font-semibold text-ide-strong">{p.name}</h2>
                <p className="font-mono text-[12.5px] text-ide-muted">{p.stack}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
