import Navbar from "./navbar";
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
      <p className="flex p-4 justify-center items-center text-sm text-gray-600">
        <Copyright className="w-4 h-4" />
        &nbsp;2025 | Designed and coded with 🩷 by Malin Rydefalk
      </p>
  );
}
