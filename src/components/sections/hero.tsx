import Image from "next/image";
import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail, Phone } from "lucide-react";
import Socials from "../ui/socials";

export default function Hero() {
  return (
    <section className="full-width relative overflow-hidden py-20">
      <div className="full-width absolute inset-0 rounded-full inset-shadow-[0_0_60px_70px_white] bg-gradient-to-bl from-pink-200 to-orange-200" />
      <div className="relative max-w-4xl m-auto grid md:grid-cols-2 items-center text-center">
        <div className="mx-10 space-y-4">
          <h2 className="text-5xl">Hello World, {<br />}I'm Malin</h2>
          <h3 className="font-normal">Frontend Developer</h3>
          <Socials />
        </div>
        <Image
          className="rounded-3xl shadow-lg place-self-center my-4"
          src="/images/malin-rydefalk.jpg"
          width={250}
          height={293}
          alt="Picture of Malin"
        />
      </div>
    </section>
  );
}
