"use client";
import { ThemeProvider } from "next-themes";
import { Montserrat } from "next/font/google";
import { TerminalContextProvider } from "react-terminal";
import { ThemeSwitchProvider } from "@/context/theme/theme-context";
import "@/i18next";
import "@/app/globals.css";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${MontserratFont.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ThemeSwitchProvider>
            <TerminalContextProvider>{children}</TerminalContextProvider>
          </ThemeSwitchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
