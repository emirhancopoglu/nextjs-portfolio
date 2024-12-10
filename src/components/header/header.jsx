import React from "react";
import Container from "@/components/utils/container";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <Container>
        <header className="flex flex-row w-full pt-4 pb-2 justify-between border-b items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Emirhan Çöpoğlu</h1>
            <h1 className="font-mono font-bold text-sm text-gray-500">
              Frontend Developer
            </h1>
          </div>
          <button>
            <FaMoon size={25} />
          </button>
        </header>
      </Container>
    </>
  );
}
