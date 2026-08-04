"use client";

import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useAuth } from "@/context/AuthContext";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
  const { user, logout } = useAuth();

  const t = useTranslations("Navbar");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <Navigation />

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {user ? (
              <>
                <div className="hidden md:block">
                  <Link
                    href={`/${locale}/add-opportunity`}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    {t("addOpportunity")}
                  </Link>
                </div>

                <Link
                  href={`/${locale}/profile`}
                  className="hidden md:block font-medium text-slate-700 hover:text-blue-600 dark:text-white"
                >
                  {t("hello")}, {user.name}
                </Link>

                <button
                  onClick={logout}
                  className="hidden md:block rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                  {t("logout")}
                </button>
              </>
            ) : (
              <>
                <Link
                  href={`/${locale}/signin`}
                  className="hidden md:block rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800"
                >
                  {t("signin")}
                </Link>

                <Link
                  href={`/${locale}/signup`}
                  className="hidden md:block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  {t("signup")}
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
