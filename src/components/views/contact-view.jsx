"use client";
import { useTranslation } from "react-i18next";
import { profile } from "@/data/profile";
import { Button, pagePad } from "@/components/ide/buttons";
import { Arrow } from "@/components/ide/icons";
import { Code, Ident, Kw, Line, LinkStr } from "@/components/ide/code";

export default function ContactView() {
  const { t } = useTranslation();

  return (
    <div className={pagePad}>
      <Code className="max-w-[760px]">
        <Line n={1}>
          <Kw>export const</Kw> <Ident>contact</Ident> = {"{"}
        </Line>
        <Line n={2} indent={1}>
          email:{" "}
          <LinkStr href={`mailto:${profile.email}`} external={false}>
            {profile.email}
          </LinkStr>
          ,
        </Line>
        <Line n={3} indent={1}>
          linkedin: <LinkStr href={profile.linkedin}>in/emirhancopoglu</LinkStr>,
        </Line>
        <Line n={4} indent={1}>
          github: <LinkStr href={profile.github}>emirhancopoglu</LinkStr>,
        </Line>
        <Line n={5} indent={1}>
          resume: <LinkStr href={profile.resume} download>{t("resume_file")}</LinkStr>,
        </Line>
        <Line n={6}>{"};"}</Line>
      </Code>

      <div className="mt-6 flex flex-wrap gap-2.5 lg:pl-[calc(3ch+18px)]">
        <Button href={`mailto:${profile.email}`}>
          {t("send_mail")}
          <Arrow className="h-4 w-4" />
        </Button>
        <Button href={profile.linkedin} variant="ghost">
          linkedin
          <Arrow className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
