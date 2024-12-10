import React from "react";
import Header from "@/components/header/header";
import TerminalPage from "@/components/terminal/terminal";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Header />
      <TerminalPage />
      <Contact />
    </>
  );
}
