import Image from "next/image";
import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="full-width py-10 bg-gradient-to-bl from-pink-200 to-orange-200">
      <div className="my-4 grid grid-cols-2 items-center text-center space-y-4">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">Hello World, {<br />}I'm Malin</h2>
          <h3 className="text-2xl">Frontend Developer</h3>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="https://www.linkedin.com/in/malin-rydefalk/">
                <SiLinkedin className="w-6 h-6 text-black hover:text-gray-700" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/malpisen">
                <SiGithub className="w-6 h-6 text-black hover:text-gray-700" />
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Mail className="w-6 h-6 text-black hover:text-gray-700" />
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Phone className="w-6 h-6 text-black hover:text-gray-700" />
              </Link>
            </li>
          </ul>
        </div>
        <Image
          className="rounded-lg shadow-lg place-self-center"
          src="/images/malin-rydefalk.jpg"
          width={300}
          height={350}
          alt="Picture of Malin"
        />
      </div>
    </section>
  );
}
