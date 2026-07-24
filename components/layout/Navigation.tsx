"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Opportunities",
    href: "/opportunities",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2"
      >
        <span className="w-6 h-0.5 bg-slate-700"></span>
        <span className="w-6 h-0.5 bg-slate-700"></span>
        <span className="w-6 h-0.5 bg-slate-700"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute right-0 top-12 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 md:hidden z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
