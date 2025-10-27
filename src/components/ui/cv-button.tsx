import Link from "next/link";
import { Download } from "lucide-react";

export default function CVButton() {
  return (
    <Link
      href="/files/Malin_Rydefalk_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="inline-flex items-center place-self-start gap-2 px-3 py-2 rounded-lg shadow-md
      border border-gray-200 bg-gradient-to-br from-pink-200 to-orange-200 
      hover:bg-gradient-to-tl hover:from-pink-200 hover:to-orange-200 
      hover:shadow-lg transition-all duration-200 ease-in-out"
    >
      <Download />
      Download CV
    </Link>
  );
}
