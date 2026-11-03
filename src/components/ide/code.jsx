import { Arrow } from "./icons";

/**
 * Tiny building blocks for rendering "source code" with line numbers.
 * Long lines soft-wrap with a hanging indent, like an editor with word wrap on.
 */
export function Code({ children, className = "" }) {
  return (
    <div
      className={`font-mono text-[12.5px] leading-[22px] sm:text-[13.5px] sm:leading-[26px] ${className}`}
    >
      {children}
    </div>
  );
}

export function Line({ n, indent = 0, children }) {
  return (
    <div className="grid grid-cols-[2.5ch_minmax(0,1fr)] gap-x-3 sm:grid-cols-[3ch_minmax(0,1fr)] sm:gap-x-[18px]">
      <span className="select-none text-right text-ide-dim" aria-hidden="true">
        {n ?? ""}
      </span>
      <span
        className="whitespace-pre-wrap break-words text-ide-text"
        style={{ paddingLeft: `${indent * 2 + 2}ch`, textIndent: "-2ch" }}
      >
        {children}
        {children === undefined ? " " : null}
      </span>
    </div>
  );
}

export const Kw = ({ children }) => <span className="text-ide-keyword">{children}</span>;
export const Ident = ({ children }) => <span className="text-ide-ident">{children}</span>;
export const Str = ({ children }) => (
  <span className="text-ide-string">&quot;{children}&quot;</span>
);
export const Comment = ({ children }) => <span className="text-ide-muted">{children}</span>;

export function LinkStr({ href, children, external = true, arrow = false, download = false }) {
  const linkProps = download
    ? { download: true }
    : external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

  // Quotes stay outside the link so only the value itself is underlined.
  return (
    <span className="text-ide-accent-fg">
      &quot;
      <a href={href} {...linkProps} className="ide-link">
        {children}
        {arrow && (
          <Arrow dir={download ? "down-to-line" : "up-right"} className="ml-[0.4ch] inline-block h-[0.95em] w-[0.95em] -translate-y-px align-middle" />
        )}
      </a>
      &quot;
    </span>
  );
}
