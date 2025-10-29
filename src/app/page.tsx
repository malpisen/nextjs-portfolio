import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import ContactForm from "@/components/sections/contact-form";
import Link from "next/link";
import { Project } from "@/lib/types/project";
import { getProjects } from "@/lib/data/project-data";
import ProjectList from "@/components/sections/project-list";

export default async function HomePage() {
  const projects: Project[] = await getProjects();

  return (
    <>
      <Hero />
      <section className="my-10">
        <h2>About Me</h2>
        <p>
          I&apos;m Malin, a passionate web developer with a knack for creating
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
        <h2>Some of my recent projects</h2>
        <ProjectList projects={projects.splice(0, 3)} />
      </section>
      <section className="full-width relative overflow-hidden pt-20 pb-30">
        <div className="full-width absolute inset-0 inset-shadow-[0_0_60px_70px_white] bg-gradient-to-bl from-blue-200/70 from-30% to-purple-200/70" />
        <div className="relative">
          <h2>Contact Me</h2>
          <p className="text-center mb-5">
            I&apos;m always open to discussing new projects or opportunities!
            <br />
            Feel free to reach out to me at{" "}
            <Link href="mailto:malin.rydefalk@gmail.com" className="font-semibold">
              malin.rydefalk@gmail.com
            </Link>
            , <Link href="tel:+46700497740" className="font-semibold">+46(0)70 049 77 40</Link> or fill
            out the form below.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
