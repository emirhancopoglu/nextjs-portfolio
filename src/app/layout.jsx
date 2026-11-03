import { Inter, JetBrains_Mono } from "next/font/google";
import Providers from "@/components/providers";
import IdeShell from "@/components/ide/ide-shell";
import "@/app/globals.css";

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: {
    default: "Emirhan Çöpoğlu — Frontend Developer",
    template: "%s — Emirhan Çöpoğlu",
  },
  description:
    "Frontend Developer · React · Next.js. Hızlı, responsive ve çok dilli web siteleri.",
};

export const viewport = {
  themeColor: "#0d0e11",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      {/* Extensions (e.g. ColorZilla's cz-shortcut-listen) add attributes to <body>
          before hydration; ignore those attribute diffs on this element only. */}
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          <IdeShell>{children}</IdeShell>
        </Providers>
      </body>
    </html>
  );
}
