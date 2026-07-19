"use client";

import Container from "@/components/layout/Container";
import { useSaved } from "@/context/SavedContext";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import { useOpportunities } from "@/context/OpportunityContext";

export default function SavedPage() {
  const { savedIds } = useSaved();
  const { opportunities } = useOpportunities();
  const savedOpportunities = opportunities.filter((item) =>
    savedIds.includes(item.id),
  );

  return (
    <Container>
      <section className="py-20">
        <h1 className="mb-8 text-4xl font-bold">Saved Opportunities</h1>

        <p className="mb-8">You have saved {savedIds.length} opportunities.</p>

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
      </section>
    </Container>
  );
}
