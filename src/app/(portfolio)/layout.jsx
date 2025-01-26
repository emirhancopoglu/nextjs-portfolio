"use client";
import { ThemeProvider } from "next-themes";
import { Montserrat } from "next/font/google";
import { TerminalContextProvider } from "react-terminal";
import Header from "@/components/header/header";
import Contact from "@/components/contact/contact";
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${MontserratFont.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
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
