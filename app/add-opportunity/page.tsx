import Container from "@/components/layout/Container";
import OpportunityForm from "@/components/opportunities/OpportunityForm";

export default function AddOpportunityPage() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors">
      <Container>
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          Add Opportunity
        </h1>

        <OpportunityForm />
      </Container>
    </section>
  );
}
