import Container from "@/components/layout/Container";
import OpportunityForm from "@/components/opportunities/OpportunityForm";

export default function AddOpportunityPage() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="mb-8 text-4xl font-bold">Add Opportunity</h1>

        <OpportunityForm />
      </Container>
    </section>
  );
}
