import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Link from "next/link";
import { Project } from "@/lib/types/project";
import ProjectCard from "@/components/ui/project-card";
import ProjectList from "@/components/sections/project-list";

export default async function HomePage() {
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
    <>
      <Hero />
      <section className="my-10">
        <h2>About Me</h2>
        <p>
          I'm Malin, a passionate web developer with a knack for creating
          dynamic and user-friendly websites. With a strong foundation in both
          front-end and back-end technologies, I strive to build seamless
          digital experiences that captivate users and drive engagement.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          eos voluptate? Temporibus tempora debitis aliquid sit suscipit
          doloremque repellat? Sunt recusandae deserunt aliquam, dicta magni
          amet alias similique minus assumenda?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
          doloremque quidem laboriosam perspiciatis illo nulla tempore rerum
          nobis repellat harum? Dolorum ea similique, placeat cum nesciunt velit
          reiciendis unde facilis.
        </p>
      </section>
      <Skills />
      <section className="my-10">
        <h2>Projects</h2>
        <ProjectList projects={projects.splice(0, 3)} />
      </section>
      <section className="full-width relative overflow-hidden pt-20 pb-30">
        <div className="full-width absolute inset-0 inset-shadow-[0_0_60px_70px_white] bg-gradient-to-bl from-indigo-200/70  to-purple-200/70" />
        <div className="relative">
          <h2>Contact Me</h2>
          <p>
            I'm always open to discussing new projects or opportunities. Feel
            free to reach out to me at
            <a href="mailto:malin@example.com"> malin@example.com</a> or
            <Link href={"/contact"}> here on my contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
