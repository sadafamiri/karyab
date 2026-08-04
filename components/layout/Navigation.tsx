"use client";

import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useAuth } from "@/context/AuthContext";
import { useLocale, useTranslations } from "next-intl";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const { user, logout } = useAuth();

  const locale = useLocale();
  const t = useTranslations("Navbar");

  const links = [
    {
      name: t("home"),
      href: "",
    },
    {
      name: t("opportunities"),
      href: "/opportunities",
    },
    {
      name: t("about"),
      href: "/about",
    },
    {
      name: t("contact"),
      href: "/contact",
    },
  ];

  return (
    <nav className="relative">
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={`/${locale}${link.href}`}
            className="text-sm font-medium text-slate-700 transition hover:text-blue-600 dark:text-white"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 p-2 md:hidden"
      >
        <span className="h-0.5 w-6 bg-slate-700 dark:bg-white"></span>
        <span className="h-0.5 w-6 bg-slate-700 dark:bg-white"></span>
        <span className="h-0.5 w-6 bg-slate-700 dark:bg-white"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute right-0 top-14 z-50 w-72 rounded-xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600 dark:text-white"
              >
                {link.name}
              </Link>
            ))}

            <hr className="border-slate-200 dark:border-slate-700" />

            <LanguageSwitcher />

            <ThemeToggle />

            <hr className="border-slate-200 dark:border-slate-700" />

            {user ? (
              <>
                <Link
                  href={`/${locale}/add-opportunity`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
                >
                  {t("addOpportunity")}
                </Link>

                <Link
                  href={`/${locale}/profile`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-700 dark:text-white"
                >
                  {t("hello")}, {user.name}
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  {t("logout")}
                </button>
              </>
            ) : (
              <>
                <Link
                  href={`/${locale}/signin`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-center dark:border-slate-700"
                >
                  {t("signin")}
                </Link>

                <Link
                  href={`/${locale}/signup`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
                >
                  {t("signup")}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
