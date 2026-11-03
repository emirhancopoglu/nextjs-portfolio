import { notFound } from "next/navigation";
import { getProject, projectFile, projects } from "@/data/projects";
import ProjectView from "@/components/views/project-view";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: projectFile(project), description: `${project.name} · ${project.stack}` };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  return <ProjectView slug={slug} />;
}
