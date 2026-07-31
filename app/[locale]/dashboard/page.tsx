"use client";

import Container from "@/components/layout/Container";
import DashboardCard from "@/components/dashboard/DashboardCard";
import OpportunityChart from "@/components/dashboard/OpportunityChart";
import { useOpportunities } from "@/context/OpportunityContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const t = useTranslations("Dashboard");

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
    <ProtectedRoute>
      <section className="min-h-screen bg-slate-50 py-20 transition-colors dark:bg-slate-950">
        <Container>
          <h1 className="mb-10 text-5xl font-bold text-slate-900 dark:text-white">
            {t("title")}
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <DashboardCard title={t("total")} value={total} />

            <DashboardCard title={t("jobs")} value={jobs} />

            <DashboardCard title={t("internships")} value={internships} />

            <DashboardCard title={t("scholarships")} value={scholarships} />

            <DashboardCard title={t("remote")} value={remote} />
          </div>

          <OpportunityChart
            jobs={jobs}
            internships={internships}
            scholarships={scholarships}
            remote={remote}
          />
        </Container>
      </section>
    </ProtectedRoute>
  );
}
