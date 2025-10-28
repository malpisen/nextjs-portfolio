import { getProjects } from "@/lib/data/project-data";
import { Project } from "@/lib/types/project";
import ProjectList from "@/components/sections/project-list";

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();

  return (
    <section className="full-width relative overflow-hidden py-20">
      <div
        className="full-width absolute inset-0 rounded-4xl inset-shadow-[0_0_60px_70px_white] 
        bg-gradient-to-bl from-orange-200/70 from-25% via-yellow-200/70 via-40% to-green-200/70"
      />
      <div className="relative m-auto">
        <h2 className="text-center mb-5">Projects</h2>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
