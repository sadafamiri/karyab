"use client";

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
  const data = [
    { name: "Jobs", total: jobs },
    { name: "Internships", total: internships },
    { name: "Scholarships", total: scholarships },
    { name: "Remote", total: remote },
  ];

  return (
    <div className="mt-10 rounded-2xl border bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">Opportunities Overview</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="total" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
