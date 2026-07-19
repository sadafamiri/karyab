"use client";

import { useParams } from "next/navigation";
import { useOpportunities } from "@/context/OpportunityContext";
import OpportunityForm from "@/components/opportunities/OpportunityForm";

export default function EditOpportunityPage() {
  const { id } = useParams();

  const { opportunities } = useOpportunities();

  const opportunity = opportunities.find((item) => item.id === id);

  if (!opportunity) {
    return (
      <h1 className="py-20 text-center text-3xl font-bold">
        Opportunity Not Found
      </h1>
    );
  }

  return (
    <div className="mx-auto max-w-3xl py-20">
      <h1 className="mb-8 text-4xl font-bold">Edit Opportunity</h1>

      <OpportunityForm opportunity={opportunity} />
    </div>
  );
}
