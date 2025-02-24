import React from "react";
import Container from "@/components/utils/container";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Container>
        <div
          className={`flex flex-row justify-center items-center mt-4 border-t border-gray-200 dark:border-gray-500`}
        >
          <div className="flex flex-row mt-2">
            <a
              href="https://www.linkedin.com/in/emirhancopoglu/"
              target="_blank"
            >
              <FaLinkedin size={50} />
            </a>
            <a href="https://github.com/emirhancopoglu" target="_blank">
              <FaGithubSquare size={50} />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
