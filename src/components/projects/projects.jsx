import React from "react";
import ProjectVira from "@/components/projects/projects-items/project-vira";
import ProjectNiksa from "@/components/projects/projects-items/project-niksa";
import ProjectWallet from "@/components/projects/projects-items/project-wallet";
import ProjectTufi from "@/components/projects/projects-items/project-tufi";
import ProjectDerin from "@/components/projects/projects-items/project-derin";

export default function Projects() {
  return (
    <>
      <ProjectVira />
      <ProjectNiksa />
      <ProjectWallet />
      <ProjectTufi />
      <ProjectDerin />
    </>
  );
}
