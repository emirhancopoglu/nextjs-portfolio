"use client";
import { ThemeProvider } from "next-themes";
import { TerminalContextProvider } from "react-terminal";
import { Montserrat } from "next/font/google";
import { ThemeSwitchProvider } from "@/context/theme-context";
import "@/i18next";
import "@/app/globals.css";
import Header from "@/components/header/header";
import Contact from "@/components/contact/contact";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${MontserratFont.variable} antialiased`}>
        <ThemeProvider enableSystem={false}>
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
