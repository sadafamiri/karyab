import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 mt-20">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <Logo />
            <p className="mt-4 text-sm text-slate-600">
              KaarYab Afghanistan helps Afghan youth discover jobs, internships,
              scholarships, remote work, and learning opportunities in one
              place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/opportunities">Opportunities</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <p className="text-sm text-slate-600">Herat, Afghanistan</p>

            <p className="mt-2 text-sm text-slate-600">
              Email: info@kaaryab.af
            </p>
          </div>
        </div>

        <div className="border-t py-6 text-center text-sm text-slate-500">
          © 2026 KaarYab Afghanistan. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
