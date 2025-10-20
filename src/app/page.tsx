import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Link from "next/link";

export default function HomePage() {
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
        <p>Here are a few projects I've worked on recently:</p>
        <ul>
          <li>
            <strong>Portfolio Website:</strong> A personal portfolio showcasing
            my projects and skills, built with Next.js and styled-components.
          </li>
          <li>
            <strong>E-commerce Platform:</strong> Developed a e-commerce
            application using React, Next.js and Tailwind CSS.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            possimus laboriosam dicta recusandae tempore maxime odit natus
            excepturi officia, vitae saepe asperiores quasi cum praesentium
            consequatur atque impedit? Laborum, voluptate?
          </li>
        </ul>
      </section>
      <section className="full-width relative overflow-hidden pt-20 pb-30">
        <div className="full-width absolute inset-0 inset-shadow-[0_0_60px_70px_white] bg-gradient-to-bl from-blue-200 to-purple-200" />
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
