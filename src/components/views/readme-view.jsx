"use client";
import { useTranslation } from "react-i18next";
import { profile, stackGroups } from "@/data/profile";
import { Button } from "@/components/ide/buttons";
import { Arrow } from "@/components/ide/icons";
import EditorCard from "./editor-card";

const chipTone = {
  shopify: "bg-[#e6f6cf] text-[#3f6212] dark:bg-[#addb94]/10 dark:text-ide-string",
  frontend: "bg-ide-active text-ide-text",
  tools: "bg-[#e8f0fe] text-[#1d4ed8] dark:bg-[#82aaff]/10 dark:text-ide-ident",
};

function LinkCard({ href, label, children, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group rounded-xl border border-ide-border px-4 py-3.5 transition-colors hover:border-ide-line hover:bg-ide-panel"
    >
      <p className="font-mono text-[11.5px] text-ide-muted">{label}</p>
      <p className="mt-1 flex items-center gap-1.5 text-[15px] font-semibold text-ide-strong">
        {children}
      </p>
    </a>
  );
}

export default function ReadmeView() {
  const { t } = useTranslation();

  return (
    <div className="flex px-5 pb-12 pt-7 lg:min-h-[calc(100dvh-154px)] lg:items-center lg:px-14 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-[minmax(0,1fr)] gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,460px)] xl:items-center xl:gap-14">
        <article className="min-w-0">
          <p className="font-mono text-[13px] text-ide-muted lg:text-[14px]"># README.md</p>

          <h1 className="mt-6 font-sans text-[46px] font-bold leading-[0.92] tracking-[-0.035em] text-ide-strong sm:text-[64px] lg:mt-7 lg:text-[80px]">
            Emirhan
            <br />
            Çöpoğlu<span className="caret-blink ml-[0.12em] text-ide-accent-fg">_</span>
          </h1>

          <p className="mt-5 font-mono text-[14px] text-ide-string lg:mt-6">
            &gt; Shopify / Frontend Developer · React · Next.js · Liquid
          </p>

          <p className="mt-5 max-w-[760px] text-base leading-[1.6] text-ide-soft lg:text-[17px]">
            {t("readme_bio")}
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <Button href="/projects" className="!h-[50px] !font-mono !text-[15px] !font-bold sm:px-7">
              open ./projects
            </Button>
            <Button href={t("resume_href")} download={t("resume_download")} variant="ghost" className="!h-[50px] !text-[15px] sm:px-7">
              {t("resume_file")}
              <Arrow dir="down-to-line" className="h-4 w-4" />
            </Button>
          </div>

          <dl className="mt-8 space-y-2.5 border-t border-ide-border pt-6 font-mono text-[12px]">
            {stackGroups.map((group) => (
              <div key={group.label} className="flex items-start gap-3">
                <dt className="w-[68px] shrink-0 pt-[5px] text-ide-muted">{t(group.label)}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className={`rounded-md px-2 py-1 ${chipTone[group.tone]}`}>
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </article>

        <aside className="flex min-w-0 flex-col gap-3">
          <EditorCard />
          <div className="grid grid-cols-2 gap-3">
            <LinkCard href={`mailto:${profile.email}`} label="contact.ts">
              {t("send_email")}
              <Arrow dir="right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </LinkCard>
            <LinkCard href={profile.github} label="remote" external>
              GitHub
              <Arrow className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </LinkCard>
          </div>
        </aside>
      </div>
    </div>
  );
}
