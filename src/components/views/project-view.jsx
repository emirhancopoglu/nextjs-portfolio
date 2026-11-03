"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { displayUrl, getProject } from "@/data/projects";
import { Button, pagePad } from "@/components/ide/buttons";
import { Arrow } from "@/components/ide/icons";
import { Code, Ident, Kw, Line, LinkStr, Str } from "@/components/ide/code";
import ThemesVisual from "./themes-visual";

export function ProjectPreview({ project, sizes, priority = false, className = "" }) {
  const { t } = useTranslation();

  if (project.preview === "themes") return <ThemesVisual className={className} />;
  return (
    <Image
      src={project.image}
      alt={t("preview_alt", { name: project.name })}
      placeholder="blur"
      sizes={sizes}
      className={`aspect-[16/10] w-full object-cover object-top ${className}`}
      priority={priority}
    />
  );
}

function BrowserPreview({ project }) {
  const host = project.live ? displayUrl(project.live) : project.host;
  const Frame = project.live ? "a" : "div";
  const linkProps = project.live
    ? { href: project.live, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Frame
      {...linkProps}
      className="group block overflow-hidden rounded-xl border border-ide-border bg-ide-panel shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)]"
    >
      <div className="flex items-center gap-3 px-3.5 py-2.5 sm:gap-4 sm:px-4 sm:py-3">
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ide-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-ide-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-ide-line" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-lg border border-ide-border bg-ide-bg px-3 py-1.5 font-mono text-[12px] sm:text-[13px]">
          <span className="text-ide-muted">https://</span>
          <span className="text-ide-text">{host}</span>
        </div>
      </div>
      <div className="overflow-hidden border-t border-ide-border">
        <ProjectPreview
          project={project}
          sizes="(min-width: 1280px) 530px, 100vw"
          priority
          className={project.live ? "transition-transform duration-500 group-hover:scale-[1.02]" : ""}
        />
      </div>
    </Frame>
  );
}

const Prompt = () => (
  <>
    <span className="text-ide-accent-fg">~/portfolio</span> <span className="text-ide-muted">$</span>{" "}
  </>
);

function TerminalPanel({ project }) {
  return (
    <section
      aria-label="Terminal"
      className="border-t border-ide-border bg-ide-bg font-mono text-[12px] text-ide-text lg:sticky lg:bottom-0"
    >
      <div className="flex gap-5 px-5 pt-2.5 text-[11px] tracking-wide lg:px-9" aria-hidden="true">
        <span className="border-b border-ide-strong pb-1.5 text-ide-strong">TERMINAL</span>
        <span className="pb-1.5 text-ide-muted">PROBLEMS 0</span>
        <span className="pb-1.5 text-ide-muted">OUTPUT</span>
      </div>
      <div className="space-y-0.5 px-5 pb-4 pt-3 leading-[1.6] lg:px-9">
        {project.cli ? (
          <p className="break-words pb-2">
            <Prompt />
            {project.cli}
          </p>
        ) : (
          <>
            <p className="break-words">
              <Prompt />
              npm run dev --project {project.slug}
            </p>
            <p className="text-ide-muted">&gt; portfolio@0.1.0 dev</p>
            <p className="pb-2 text-ide-muted">&gt; next dev</p>
            <p className="whitespace-pre text-ide-strong">  ▲ Next.js 15.5.29</p>
            <p className="whitespace-pre pb-2 text-ide-muted">
              {"  - Local:        "}
              <span className="text-ide-ident">http://localhost:3000</span>
            </p>
          </>
        )}
        <p className="break-words text-ide-string">✓ Compiled successfully · {project.stack}</p>
        <p className="break-words text-ide-string opacity-75">
          {project.checks.map((c, i) => (
            <span key={c}>
              {i > 0 && " · "}✓ {c}
            </span>
          ))}
        </p>
        {project.live && (
          <p className="break-words">
            <Prompt />
            open{" "}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="ide-link"
            >
              {displayUrl(project.live)}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

export default function ProjectView({ slug }) {
  const { t } = useTranslation();
  const project = getProject(slug);
  if (!project) return null;

  // Code view lines; numbered in order below.
  const fields = [
    ["name", <Str key="v">{project.name}</Str>],
    ["type", <Str key="v">{t(project.type)}</Str>],
    ["stack", <Str key="v">{project.stack}</Str>],
    ["about", <Str key="v">{t(project.about)}</Str>],
    ...(project.meta || []).map(([k, v]) => [k, <Str key="v">{v}</Str>]),
    project.live && ["live", <LinkStr key="v" href={project.live}>{displayUrl(project.live)}</LinkStr>],
    [
      "repo",
      project.repo ? (
        <LinkStr key="v" href={project.repo}>github</LinkStr>
      ) : (
        <Str key="v">private</Str>
      ),
    ],
  ].filter(Boolean);

  return (
    // Fills the editor area so the terminal panel can stick to its bottom on desktop.
    <div className="flex flex-col lg:min-h-[calc(100dvh-154px)]">
      <div className={`${pagePad} flex-1`}>
        <div className="grid gap-x-8 gap-y-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,530px)]">
          <Code>
            <Line n={1}>
              <Kw>export const</Kw> <Ident>project</Ident> = {"{"}
            </Line>
            {fields.map(([key, value], i) => (
              <Line key={key} n={i + 2} indent={1}>
                {key}: {value},
              </Line>
            ))}
            <Line n={fields.length + 2}>{"};"}</Line>
          </Code>

          <div>
            <BrowserPreview project={project} />
            <div className="mt-3.5 flex flex-wrap gap-2.5">
              {project.live && (
                <Button href={project.live}>
                  {t(project.liveLabel || "live_site")}
                  <Arrow className="h-4 w-4" />
                </Button>
              )}
              <Button href="/projects" variant="ghost">
                <Arrow dir="left" className="h-4 w-4" />
                projects/
              </Button>
            </div>
          </div>
        </div>
      </div>

      <TerminalPanel project={project} />
    </div>
  );
}
