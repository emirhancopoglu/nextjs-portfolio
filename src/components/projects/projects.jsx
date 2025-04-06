import React from "react";
import Image from "next/image";
import { projectItems } from "./projects-items/project-items";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      {projectItems.map((project, item) => (
        <div key={item} className="flex flex-col w-full rounded-2xl mb-20 mt-4">
          <div
            className={`
              flex 
              h-full
              ${
                project.reversed ? "flex-row-reverse" : "flex-row"
              } max-md:flex-col w-full items-end`}
          >
            <div className="w-1/2 h-full max-md:w-full">
              <Image
                src={project.image}
                alt="Alt"
                className={`w-full min-h-[400px] object-cover border dark:border-gray-400 ${
                  project.reversed
                    ? "rounded-bl-none rounded-tr-none rounded-tl-2xl rounded-br-2xl"
                    : "rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none"
                } max-md:rounded-bl-none max-md:rounded-tl-2xl max-md:rounded-tr-2xl max-md:rounded-br-none`}
              />
            </div>
            <div
              className={`w-1/2 max-md:w-full shadow-t ${
                project.reversed ? "pl-0 pr-10 py-8" : "pl-10 pr-0 py-8"
              }  max-md:px-2 py-2 text-justify flex flex-col justify-end `}
            >
              <h1 className="text-4xl font-bold">{project.projectName}</h1>
              <p className="mt-4 dark:text-[#95979D]">
                {" "}
                {t(`${project.projectKey}Description`)}
              </p>
              <p className="mt-4 dark:text-[#95979D]">
                {" "}
                {t(`${project.projectKey}WhatIDid`)}
              </p>
              <p className="font-bold text-sm mt-4 dark:text-[#95979D]">
                {project.usedTechnology}
              </p>
              <div className="flex flex-row gap-4 flex-shrink-0 items-center justify-end p-2">
                <a href={project.projectGithub} target="_blank">
                  <FaGithub size={50} className="flex-shrink-0" />
                </a>
                <a href={project.projectLink} target="_blank">
                  <IoIosLink size={50} className="flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
