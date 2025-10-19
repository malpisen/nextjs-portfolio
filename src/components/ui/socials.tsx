import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Socials() {
  return (
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
  );
}
