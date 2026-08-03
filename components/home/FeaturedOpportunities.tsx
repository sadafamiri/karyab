"use client";

import Container from "../layout/Container";
import OpportunityCard from "../opportunities/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import { useTranslations } from "next-intl";

export default function FeaturedOpportunities() {
  const t = useTranslations("Featured");

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">{t("title")}</h2>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
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
      </Container>
    </section>
  );
}
