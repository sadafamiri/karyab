"use client";

import { useParams } from "next/navigation";
import { useOpportunities } from "@/context/OpportunityContext";
import OpportunityForm from "@/components/opportunities/OpportunityForm";
import Container from "@/components/layout/Container";

export default function EditOpportunityPage() {
  const params = useParams();
  const id = params.id as string;

  const { opportunities } = useOpportunities();

  const opportunity = opportunities.find((item) => item.id === id);

  if (!opportunity) {
    return (
      <Container>
        <h1 className="py-20 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Opportunity Not Found
        </h1>
      </Container>
    );
  }

  return (
    <Container>
      <section className="py-20">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          Edit Opportunity
        </h1>

        <OpportunityForm opportunity={opportunity} />
      </section>
    </Container>
  );
}
