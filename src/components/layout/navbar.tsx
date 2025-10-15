import Link from "next/link";
import CVButton from "../ui/cv-button";

export default function Navbar() {
  return (
    <nav className="content-grid">
      <ul className="breakout my-4 flex items-center space-x-4">
        <li>
          <Link href="/" className="text-4xl font-bold hover:underline">
            <h1>Malin Rydefalk</h1>
          </Link>
        </li>
        <div className="ml-auto flex items-center space-x-4">
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <CVButton />
        </div>
      </ul>
    </nav>
  );
}
