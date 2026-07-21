"use client";

import Container from "@/components/layout/Container";
import DashboardCard from "@/components/dashboard/DashboardCard";
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
    <Container>
      <section className="py-20">
        <h1 className="mb-10 text-4xl font-bold">Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <DashboardCard title="Total Opportunities" value={total} />

          <DashboardCard title="Jobs" value={jobs} />

          <DashboardCard title="Internships" value={internships} />

          <DashboardCard title="Scholarships" value={scholarships} />

          <DashboardCard title="Remote" value={remote} />
        </div>
      </section>
    </Container>
  );
}
