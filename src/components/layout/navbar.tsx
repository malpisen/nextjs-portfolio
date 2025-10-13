import Link from "next/link";

export function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Malin Rydefalk
          </Link>
        </li>
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
        {/* If this changes to Link - prefetch={false} */}
        <button className="ml-auto px-4 py-2 text-black bg-pink-200 rounded hover:bg-pink-300">
          Resume
        </button>
      </ul>
    </nav>
  );
}
