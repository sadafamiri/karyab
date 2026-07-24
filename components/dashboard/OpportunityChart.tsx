"use client";

import { useTheme } from "next-themes";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type OpportunityChartProps = {
  jobs: number;
  internships: number;
  scholarships: number;
  remote: number;
};

export default function OpportunityChart({
  jobs,
  internships,
  scholarships,
  remote,
}: OpportunityChartProps) {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const data = [
    { name: "Jobs", total: jobs },
    { name: "Internships", total: internships },
    { name: "Scholarships", total: scholarships },
    { name: "Remote", total: remote },
  ];

  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-800">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Opportunities Overview
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid
            stroke={isDark ? "#475569" : "#e5e7eb"}
            strokeDasharray="3 3"
          />

          <XAxis dataKey="name" stroke={isDark ? "#cbd5e1" : "#475569"} />

          <YAxis stroke={isDark ? "#cbd5e1" : "#475569"} />

          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#1e293b" : "#ffffff",
              border: "1px solid #475569",
              borderRadius: "12px",
              color: isDark ? "#ffffff" : "#000000",
            }}
            labelStyle={{
              color: isDark ? "#ffffff" : "#000000",
            }}
          />

          <Bar dataKey="total" fill="#2563eb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
