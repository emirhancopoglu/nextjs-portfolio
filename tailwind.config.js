/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ide: {
          bg: "var(--ide-bg)",
          panel: "var(--ide-panel)",
          border: "var(--ide-border)",
          line: "var(--ide-line)",
          active: "var(--ide-active)",
          text: "var(--ide-text)",
          strong: "var(--ide-strong)",
          soft: "var(--ide-soft)",
          muted: "var(--ide-muted)",
          dim: "var(--ide-dim)",
          accent: "var(--ide-accent)",
          "accent-fg": "var(--ide-accent-fg)",
          ink: "var(--ide-ink)",
          keyword: "var(--ide-keyword)",
          ident: "var(--ide-ident)",
          string: "var(--ide-string)",
          file: "var(--ide-file)",
          json: "var(--ide-json)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
