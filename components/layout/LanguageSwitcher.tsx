"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
    >
      <option value="en">🇺🇸 English</option>
      <option value="fa">🇦🇫 دری</option>
      <option value="ps">🇦🇫 پښتو</option>
    </select>
  );
}
