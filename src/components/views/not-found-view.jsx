"use client";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Button, pagePad } from "@/components/ide/buttons";
import { Arrow } from "@/components/ide/icons";
import { Code, Comment, Ident, Kw, Line, Str } from "@/components/ide/code";

export default function NotFoundView() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const path = decodeURIComponent(pathname.replace(/^\/+/, ""));

  return (
    <div className={pagePad}>
      <Code className="max-w-[760px]">
        <Line n={1}>
          <Kw>import</Kw> {"{ "}
          <Ident>file</Ident>
          {" }"} <Kw>from</Kw> <Str>{`./${path}`}</Str>;
        </Line>
        <Line n={2} />
        <Line n={3}>
          <span className="text-[#e5484d]">{t("nf_comment")}</span>
        </Line>
        <Line n={4}>
          <Comment>{t("nf_message", { path })}</Comment>
        </Line>
      </Code>

      <div className="mt-6 flex flex-wrap gap-2.5 lg:pl-[calc(3ch+18px)]">
        <Button href="/" className="!font-mono">
          <Arrow dir="left" className="h-4 w-4" />
          README.md
        </Button>
        <Button href="/projects" variant="ghost">
          projects/
        </Button>
      </div>
    </div>
  );
}
