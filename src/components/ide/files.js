import { getProject, projectFile } from "@/data/projects";

export function resolveFile(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") return { name: "README.md", crumbs: ["README.md"] };
  if (path === "/projects") return { name: "projects/", crumbs: ["projects"] };
  if (path === "/stack") return { name: "stack.json", crumbs: ["stack.json"] };
  if (path === "/contact") return { name: "contact.ts", crumbs: ["contact.ts"] };

  const match = path.match(/^\/projects\/([^/]+)$/);
  const project = match && getProject(match[1]);
  if (project) {
    const file = projectFile(project);
    return { name: file, crumbs: ["projects", file] };
  }

  const missing = decodeURIComponent(path.split("/").pop() || "");
  return { name: missing, crumbs: [missing], missing: true };
}

export const navItems = [
  { href: "/", key: "nav_readme", icon: "info", match: (p) => p === "/" },
  {
    href: "/projects",
    key: "nav_projects",
    icon: "grid",
    match: (p) => p.startsWith("/projects"),
  },
  { href: "/stack", key: "nav_stack", icon: "braces", match: (p) => p === "/stack" },
  { href: "/contact", key: "nav_contact", icon: "at", match: (p) => p === "/contact" },
];
