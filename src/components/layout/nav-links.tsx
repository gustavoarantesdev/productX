"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { House } from "lucide-react";

const links = [{ name: "Home", href: "/products", icon: House }];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center gap-2 hover:bg-blue-100 p-2 rounded-lg font-medium hover:text-blue-500 text-sm",
              pathname === link.href
                ? "bg-blue-100 text-blue-500"
                : "bg-gray-50",
            )}
          >
            <LinkIcon></LinkIcon>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
