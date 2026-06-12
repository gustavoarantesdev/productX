import { PackageOpen } from "lucide-react";
import NavLinks from "./nav-links";

export default function SideBar() {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r border-gray-300 bg-white">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center">
        <span className="rounded-lg bg-blue-400 p-1.5">
          <PackageOpen size={20} color="white" />
        </span>
        <span className="ml-2 text-lg font-semibold">ProductX</span>
      </div>

      <hr className="mx-auto w-55 text-gray-300" />

      {/* Links */}
      <div className="p-4">
      <NavLinks />
      </div>
    </aside>
  );
}
