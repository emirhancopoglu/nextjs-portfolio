import Link from "next/link";

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border px-4 text-[14px] leading-none transition active:scale-[0.98]";

const variants = {
  primary:
    "border-ide-accent bg-ide-accent font-sans font-semibold text-ide-ink hover:brightness-105",
  ghost:
    "border-ide-line font-mono text-ide-text hover:border-ide-muted/60 hover:bg-ide-active",
};

export function Button({ href, variant = "primary", external, download, className = "", children }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const isExternal = external ?? /^(https?:|mailto:)/.test(href);

  if (download) {
    return (
      <a href={href} download className={cls}>
        {children}
      </a>
    );
  }

  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export const pagePad = "px-[18px] pb-12 pt-7 lg:pl-9 lg:pr-[52px] lg:pt-[26px]";
