import Container from "@/components/layout/Container";
import OpportunityForm from "@/components/opportunities/OpportunityForm";

export default function AddOpportunityPage() {
  return (
    <section className="bg-slate-50 py-20 transition-colors duration-300 dark:bg-slate-950">
      <Container>
        <h1 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
          Add Opportunity
        </h1>

        <OpportunityForm />
      </Container>
    </section>
  );
}
