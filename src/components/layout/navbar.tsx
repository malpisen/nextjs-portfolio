import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="content-grid bg-gray-500 text-white">
      <ul className="breakout my-4 flex items-center space-x-4">
        <li>
          <Link href="/" className="text-2xl font-bold hover:underline">
            Malin Rydefalk
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
          {/* If this changes to Link - prefetch={false} */}
          <button className="px-4 py-2 text-black bg-pink-200 rounded-lg hover:bg-pink-300 cursor-pointer">
            Download CV
          </button>
        </div>
      </ul>
    </nav>
  );
}
