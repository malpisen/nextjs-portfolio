import { Project } from "@/lib/types/project";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 px-20 xl:px-0 gap-6 items-stretch">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard key={project.id} project={project} />
        </li>
      ))}
    </ul>
  );
}
