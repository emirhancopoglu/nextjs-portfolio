import React from "react";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import NotFoundTerminalPage from "@/components/not-found-terminal/notfound-terminal";

export default function NotFound() {
  return (
    <>
      <Header />
      <NotFoundTerminalPage />
      <Contact />
    </>
  );
}
