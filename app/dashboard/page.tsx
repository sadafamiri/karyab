"use client";

import Container from "@/components/layout/Container";
import DashboardCard from "@/components/dashboard/DashboardCard";
import OpportunityChart from "@/components/dashboard/OpportunityChart";
import { useOpportunities } from "@/context/OpportunityContext";

export default function DashboardPage() {
  const { opportunities } = useOpportunities();

  const total = opportunities.length;

  const jobs = opportunities.filter((item) => item.category === "Job").length;

  const internships = opportunities.filter(
    (item) => item.category === "Internship",
  ).length;

  const scholarships = opportunities.filter(
    (item) => item.category === "Scholarship",
  ).length;

  const remote = opportunities.filter((item) => item.type === "Remote").length;

  return (
    <section className="min-h-screen bg-slate-50 py-20 transition-colors duration-300 dark:bg-slate-950">
      <Container>
        <h1 className="mb-10 text-4xl font-bold text-slate-900 dark:text-white">
          Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <DashboardCard title="Total Opportunities" value={total} />

          <DashboardCard title="Jobs" value={jobs} />

          <DashboardCard title="Internships" value={internships} />

          <DashboardCard title="Scholarships" value={scholarships} />

          <DashboardCard title="Remote" value={remote} />
        </div>

        <div className="mt-12">
          <OpportunityChart
            jobs={jobs}
            internships={internships}
            scholarships={scholarships}
            remote={remote}
          />
        </div>
      </Container>
    </section>
  );
}
