import Link from "next/link";
import CVButton from "../ui/cv-button";

export default function Navbar() {
  return (
    <nav className="content-grid">
      <ul className="breakout my-2 flex items-center space-x-4">
        <li>
          <Link href="/">
            <h1 className="transition-all duration-500 text-shadow-lg hover:scale-105">
              Malin Rydefalk
            </h1>
          </Link>
        </li>
        <div className="ml-auto flex items-center space-x-8">
          <li>
            <Link
              href="/projects"
              className="hover:underline hover:underline-offset-4"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:underline hover:underline-offset-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline hover:underline-offset-4"
            >
              Contact
            </Link>
          </li>
          <li>
            <CVButton />
          </li>
        </div>
      </ul>
    </nav>
  );
}
