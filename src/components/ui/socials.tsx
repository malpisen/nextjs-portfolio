import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Socials() {
  return (
    <ul className="flex justify-center space-x-4">
      <li>
        <Link href="https://www.linkedin.com/in/malin-rydefalk/">
          <SiLinkedin className="clickable-icon w-6 h-6" />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/malpisen">
          <SiGithub className="clickable-icon w-6 h-6 " />
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <Mail className="clickable-icon w-6 h-6" />
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <Phone className="clickable-icon w-6 h-6" />
        </Link>
      </li>
    </ul>
  );
}
