import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiDotnet,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

export default function Skills() {
  return (
    <section className="full-width relative overflow-hidden pt-20 pb-30">
      <div className="full-width absolute inset-0 inset-shadow-[0_0_60px_70px_white] bg-gradient-to-bl from-yellow-100 to-green-100" />
      <div className="relative">
        <h2>Skills</h2>
        <ul className="flex justify-between items-center gap-5 text-4xl">
          <li>
            <SiHtml5 />
          </li>
          <li>
            <SiCss3 />
          </li>
          <li>
            <SiTailwindcss />
          </li>
          <li>
            <SiTypescript />
          </li>
          <li>
            <SiJavascript />
          </li>
          <li>
            <SiReact />
          </li>
          <li>
            <SiNextdotjs />
          </li>
          <li>
            <FaJava />
          </li>
          <li>
            <SiPython />
          </li>
          <li>
            <TbBrandCSharp />
          </li>
          <li>
            <SiDotnet />
          </li>
          <li>
            <SiGithub />
          </li>
          <li className="text-lg">and more...</li>
        </ul>
      </div>
    </section>
  );
}
