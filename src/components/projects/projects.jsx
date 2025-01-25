import React from "react";
import ProjectVira from "@/components/projects/projects-items/project-vira";
import ProjectNiksa from "@/components/projects/projects-items/project-niksa";
import ProjectWallet from "@/components/projects/projects-items/project-wallet";
import ProjectTufi from "@/components/projects/projects-items/project-tufi";

export default function Projects() {
  return (
    <>
      <ProjectVira />
      <ProjectNiksa />
      <ProjectWallet />
      <ProjectTufi />
    </>
  );
}
