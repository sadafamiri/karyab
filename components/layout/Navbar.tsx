"use client";

import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <Navigation />

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {user ? (
              <>
                <Link
                  href="/add-opportunity"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Add Opportunity
                </Link>

                <span className="font-medium text-slate-700 dark:text-white">
                  Hi, {user.name}
                </span>

                <button
                  onClick={logout}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
