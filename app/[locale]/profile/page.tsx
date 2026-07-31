"use client";

import Container from "@/components/layout/Container";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useTranslations } from "next-intl";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const t = useTranslations("Profile");

  if (!user) {
    return (
      <Container>
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            {t("notLoggedIn")}
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {t("loginMessage")}
          </p>
        </section>
      </Container>
    );
  }

  return (
    <ProtectedRoute>
      <Container>
        <section className="py-20">
          <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
                {user.name}
              </h1>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                {user.email}
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="flex justify-between rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                <span className="font-medium">{t("name")}</span>

                <span>{user.name}</span>
              </div>

              <div className="flex justify-between rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                <span className="font-medium">{t("email")}</span>

                <span>{user.email}</span>
              </div>
            </div>

            <button
              onClick={logout}
              className="mt-10 w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              {t("logout")}
            </button>
          </div>
        </section>
      </Container>
    </ProtectedRoute>
  );
}
