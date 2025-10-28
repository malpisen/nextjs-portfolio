import Link from "next/link";
import { Download } from "lucide-react";

export default function CVButton() {
  return (
    <Link
      href="/files/Malin_Rydefalk_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="button inline-flex px-3 rounded-lg border-gray-200 
      bg-gradient-to-br from-pink-200 to-orange-200 hover:bg-gradient-to-tl "
    >
      <Download />
      Download CV
    </Link>
  );
}
