"use client";
import { ThemeSwitchProvider } from "@/context/theme-context";
import { ThemeProvider } from "next-themes";
import { TerminalContextProvider } from "react-terminal";
import "@/app/globals.css";
import "@/i18next";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        //${geistSans.variable} ${geistMono.variable}
        className={` antialiased`}
      >
        <ThemeProvider>
          <ThemeSwitchProvider>
            <TerminalContextProvider> {children}</TerminalContextProvider>
          </ThemeSwitchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
