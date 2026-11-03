"use client";
import { Fragment } from "react";
import { stack } from "@/data/profile";
import { pagePad } from "@/components/ide/buttons";
import { Code, Line, Str } from "@/components/ide/code";

export default function StackView() {
  const entries = Object.entries(stack);

  return (
    <div className={pagePad}>
      <Code className="max-w-[860px]">
        <Line n={1}>{"{"}</Line>
        {entries.map(([key, values], i) => (
          <Line key={key} n={i + 2} indent={1}>
            <span className="text-ide-ident">&quot;{key}&quot;</span>: [
            {values.map((v, j) => (
              <Fragment key={v}>
                {j > 0 && ", "}
                <Str>{v}</Str>
              </Fragment>
            ))}
            ]{i < entries.length - 1 ? "," : ""}
          </Line>
        ))}
        <Line n={entries.length + 2}>{"}"}</Line>
      </Code>
    </div>
  );
}
