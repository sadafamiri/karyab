"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const locales = ["en", "fa", "ps"] as const;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function changeLanguage(nextLocale: string) {
    if (!locales.includes(nextLocale as (typeof locales)[number])) return;

    const segments = pathname.split("/");
    if (locales.includes(segments[1] as (typeof locales)[number])) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }

    router.push(segments.join("/") || `/${nextLocale}`);
  }

  return (
    <select
      value={locale}
      onChange={(e) => changeLanguage(e.target.value)}
      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      aria-label="Select language"
    >
      <option value="en">English</option>
      <option value="fa">دری</option>
      <option value="ps">پښتو</option>
    </select>
  );
}
