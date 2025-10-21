import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="rounded-2xl shadow-lg p-4 max-w-sm h-full bg-white hover:shadow-xl transition">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className="rounded-xl mb-4 object-cover w-full"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="flex flex-wrap justify-center gap-2 m-3 text-xs">
        {project.tags.map((tags) => (
          <li key={tags} className="bg-gray-100 px-2 py-1 rounded-md">
            {tags}
          </li>
        ))}
      </ul>
      <Link href={project.github} className="text-blue-600 hover:underline">
        View project →
      </Link>
    </article>
  );
}
