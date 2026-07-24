 //  درست شد 
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <Logo />

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              KaarYab Afghanistan helps Afghan youth discover jobs, internships,
              scholarships, remote work, and learning opportunities in one
              place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/opportunities"
                  className="text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  Opportunities
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Contact
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              Herat, Afghanistan
            </p>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Email: info@kaaryab.af
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          © 2026 KaarYab Afghanistan. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
