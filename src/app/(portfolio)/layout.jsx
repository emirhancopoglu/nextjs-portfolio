"use client";
import { ThemeProvider } from "next-themes";
import { TerminalContextProvider } from "react-terminal";
import { Montserrat } from "next/font/google";

import Header from "@/components/header/header";
import Contact from "@/components/contact/contact";
import "@/i18next";
import "@/app/globals.css";
import { ThemeSwitchProvider } from "@/context/theme/theme-context";

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
            <TerminalContextProvider>
              <Header />
              {children}
              <Contact />
            </TerminalContextProvider>
          </ThemeSwitchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
