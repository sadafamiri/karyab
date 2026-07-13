import Link from "next/link";

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
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
