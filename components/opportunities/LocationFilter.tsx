"use client";

import { useTranslations } from "next-intl";

type LocationFilterProps = {
  location: string;
  setLocation: (value: string) => void;
};

export default function LocationFilter({
  location,
  setLocation,
}: LocationFilterProps) {
  const t = useTranslations("LocationFilter");

  const locations = [
    { value: "All", label: t("all") },
    { value: "Kabul", label: t("kabul") },
    { value: "Herat", label: t("herat") },
    { value: "Online", label: t("online") },
  ];

  return (
    <div className="mb-6">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      >
        {locations.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
