import Container from "@/components/layout/Container";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import { opportunities } from "@/data/opportunities";

export default function OpportunitiesPage() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="mb-10 text-center text-5xl font-bold">Opportunities</h1>

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
