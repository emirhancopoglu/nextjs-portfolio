"use client";
import { ThemeProvider } from "next-themes";
import { TerminalContextProvider } from "react-terminal";
import { Montserrat } from "next/font/google";
import { ThemeSwitchProvider } from "@/context/theme-context";
import "@/i18next";
import "@/app/globals.css";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${MontserratFont.variable} antialiased`}>
        <ThemeProvider>
          <ThemeSwitchProvider>
            <TerminalContextProvider> {children}</TerminalContextProvider>
          </ThemeSwitchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
