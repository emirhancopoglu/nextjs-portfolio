import React from "react";
import ProjectVira from "./projects-items/project-vira";
import ProjectNiksa from "./projects-items/project-niksa";
import ProjectWallet from "./projects-items/project-wallet";

export default function Projects() {
  return (
    <>
      <ProjectVira />
      <ProjectNiksa />
      <ProjectWallet />
    </>
  );
}
