 //  درست شد 
import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <Navigation />

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/add-opportunity"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Add Opportunity
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
