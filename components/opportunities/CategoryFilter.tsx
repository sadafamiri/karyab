"use client";

import { useTranslations } from "next-intl";

type CategoryFilterProps = {
  category: string;
  setCategory: (value: string) => void;
};

export default function CategoryFilter({
  category,
  setCategory,
}: CategoryFilterProps) {
  const t = useTranslations("CategoryFilter");

  const categories = [
    { value: "All", label: t("all") },
    { value: "Job", label: t("job") },
    { value: "Internship", label: t("internship") },
    { value: "Scholarship", label: t("scholarship") },
    { value: "Online Course", label: t("onlineCourse") },
  ];

  return (
    <div className="mb-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      >
        {categories.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
