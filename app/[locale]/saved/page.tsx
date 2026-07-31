"use client";

import Container from "@/components/layout/Container";
import { useSaved } from "@/context/SavedContext";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import { useOpportunities } from "@/context/OpportunityContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useTranslations } from "next-intl";

export default function SavedPage() {
  const { savedIds } = useSaved();
  const { opportunities } = useOpportunities();
  const t = useTranslations("Saved");

  const savedOpportunities = opportunities.filter((item) =>
    savedIds.includes(item.id),
  );

  return (
    <ProtectedRoute>
      <Container>
        <section className="py-20">
          <h1 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
            {t("title")}
          </h1>

          <p className="mb-8 text-slate-600 dark:text-slate-400">
            {t("savedCount", {
              count: savedIds.length,
            })}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                id={opportunity.id}
                title={opportunity.title}
                organization={opportunity.organization}
                location={opportunity.location}
                category={opportunity.category}
                type={opportunity.type}
                deadline={opportunity.deadline}
              />
            ))}
          </div>

          {savedOpportunities.length === 0 && (
            <p className="mt-10 text-center text-slate-500">{t("empty")}</p>
          )}
        </section>
      </Container>
    </ProtectedRoute>
  );
}
