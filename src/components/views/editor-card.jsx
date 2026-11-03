"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";

/* ---------- syntax tokens ---------- */
const Kw = ({ children }) => <span className="text-ide-keyword">{children}</span>;
const Id = ({ children }) => <span className="text-ide-ident">{children}</span>;
const Key = ({ children }) => <span className="text-ide-json">{children}</span>;
const Lit = ({ children }) => <span className="text-ide-accent-fg">{children}</span>;
const Cmt = ({ children }) => <span className="text-ide-muted">{children}</span>;
const S = ({ children, q = '"' }) => (
  <span className="text-ide-string">
    {q}
    {children}
    {q}
  </span>
);
// Liquid
const D = ({ children }) => <span className="text-ide-json">{children}</span>; // {%- -%} {{ }}
const LS = ({ children }) => <S q="'">{children}</S>;
const Tag = ({ children }) => <span className="text-ide-ident">{children}</span>; // html tags

const LINES = 14;
const L = (indent, node) => ({ indent, node });

function profileTs(t) {
  return [
    L(0, <><Kw>export const</Kw> <Id>emirhan</Id> = {"{"}</>),
    L(1, <><Key>role</Key>: <S>Shopify / Frontend Dev</S>,</>),
    L(1, <><Key>focus</Key>: [</>),
    L(2, <><S>{t("focus_theme")}</S>,</>),
    L(2, <><S>Custom &amp; public apps</S>,</>),
    L(2, <><S>SPA</S>,</>),
    L(1, "],"),
    L(1, <><Key>available</Key>: <Lit>true</Lit>,</>),
    L(0, "};"),
  ];
}

function heroLiquid(t) {
  return [
    L(0, <Cmt>{"{%- comment -%} Emirhan Çöpoğlu {%- endcomment -%}"}</Cmt>),
    L(0, <><D>{"{%-"}</D> <Kw>liquid</Kw></>),
    L(1, <><Kw>assign</Kw> role = <LS>Shopify / Frontend Dev</LS></>),
    L(1, <><Kw>assign</Kw> focus = <LS>{`${t("focus_theme")}|Custom & public apps|SPA`}</LS> | <Id>split</Id>: <LS>|</LS></>),
    L(1, <><Kw>assign</Kw> available = <Lit>true</Lit></>),
    L(0, <D>{"-%}"}</D>),
    L(0, <><Tag>{"<section"}</Tag> class=<S>profile</S><Tag>{">"}</Tag></>),
    L(1, <><Tag>{"<h1>"}</Tag><D>{"{{"}</D> role <D>{"}}"}</D><Tag>{"</h1>"}</Tag></>),
    L(1, <><D>{"{%"}</D> <Kw>for</Kw> item <Kw>in</Kw> focus <D>{"%}"}</D><Tag>{"<span>"}</Tag><D>{"{{"}</D> item <D>{"}}"}</D><Tag>{"</span>"}</Tag><D>{"{%"}</D> <Kw>endfor</Kw> <D>{"%}"}</D></>),
    L(1, <><D>{"{%"}</D> <Kw>if</Kw> available <D>{"%}"}</D></>),
    L(2, <><D>{"{%"}</D> <Kw>render</Kw> <LS>cta</LS>, label: <LS>{t("cta_label")}</LS> <D>{"%}"}</D></>),
    L(1, <><D>{"{%"}</D> <Kw>endif</Kw> <D>{"%}"}</D></>),
    L(0, <><Tag>{"</section>"}</Tag></>),
    L(0, <><D>{"{%"}</D> <Kw>schema</Kw> <D>{"%}"}</D> {'{ "name": "Profile" }'} <D>{"{%"}</D> <Kw>endschema</Kw> <D>{"%}"}</D></>),
  ];
}

const FILES = [
  { id: "profile", name: "profile.ts", lang: "TypeScript", icon: <span className="text-[10px] font-bold text-ide-file">TS</span>, lines: profileTs },
  { id: "hero", name: "profile.liquid", lang: "Liquid", icon: <span className="text-[10px] text-ide-string">◆</span>, lines: heroLiquid },];

function CodeLines({ lines }) {
  const padded = [...lines, ...Array(Math.max(0, LINES - lines.length)).fill(L(0, ""))];
  return padded.map(({ indent, node }, i) => (
    <div key={i} className="grid grid-cols-[2.5ch_minmax(0,1fr)] gap-x-4">
      <span className="select-none text-right text-ide-dim" aria-hidden="true">
        {i + 1}
      </span>
      <span
        className="whitespace-pre-wrap break-words"
        style={{ paddingLeft: `${indent * 2 + 2}ch`, textIndent: "-2ch" }}
      >
        {node || " "}
      </span>
    </div>
  ));
}

export default function EditorCard() {
  const { t } = useTranslation();
  const [active, setActive] = useState("hero");
  const current = FILES.find((f) => f.id === active);

  return (
    <div className="overflow-hidden rounded-xl border border-ide-border bg-ide-panel text-ide-text shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)]">
      <div role="tablist" aria-label="Files" className="ide-scroll flex overflow-x-auto border-b border-ide-border font-mono text-[12px]">
        {FILES.map((f) => {
          const selected = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              id={`tab-${f.id}`}
              aria-selected={selected}
              aria-controls={`panel-${f.id}`}
              onClick={() => setActive(f.id)}
              className={`relative flex shrink-0 items-center gap-2 border-r border-ide-border px-4 py-2.5 transition-colors ${
                selected
                  ? "bg-ide-bg text-ide-strong before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-ide-accent"
                  : "text-ide-muted hover:text-ide-text"
              }`}
            >
              {f.icon}
              {f.name}
            </button>
          );
        })}
      </div>

      {/* All panels share one grid cell so the card height never jumps between tabs. */}
      <div className="grid bg-ide-bg px-4 py-4 font-mono text-[12.5px] leading-[1.75]">
        {FILES.map((f) => (
          <div
            key={f.id}
            role="tabpanel"
            id={`panel-${f.id}`}
            aria-labelledby={`tab-${f.id}`}
            aria-hidden={f.id !== active}
            className={`[grid-area:1/1] ${f.id === active ? "" : "invisible"}`}
          >
            <CodeLines lines={f.lines(t)} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-ide-border px-4 py-2 font-mono text-[11px] text-ide-muted">
        <span>{current.lang}</span>
        <span>Ln {LINES}, Col 1</span>
      </div>
    </div>
  );
}
