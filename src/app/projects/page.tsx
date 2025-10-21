import { Project } from "@/lib/types/project";
import ProjectCard from "@/components/ui/project-card";

export default async function ProjectsPage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/data/projects.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const projects: Project[] = await res.json();

  return (
    <section className="full-width relative overflow-hidden py-20">
      <div className="full-width absolute inset-0 rounded-4xl inset-shadow-[0_0_60px_70px_white] bg-gradient-to-bl from-orange-200 from-25% via-yellow-200 via-40% to-green-200" />
      <div className="relative m-auto text-center">
        <h2>Projects</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 py-10 px-20 xl:px-0 gap-6 items-stretch">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard key={project.id} project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
