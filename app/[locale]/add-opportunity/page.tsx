import Container from "@/components/layout/Container";
import OpportunityForm from "@/components/opportunities/OpportunityForm";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useTranslations } from "next-intl";

export default function AddOpportunityPage() {
  const t = useTranslations("AddOpportunity");

  return (
    <ProtectedRoute>
      <section className="bg-slate-50 py-20 transition-colors duration-300 dark:bg-slate-950">
        <Container>
          <h1 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
            {t("title")}
          </h1>

          <OpportunityForm />
        </Container>
      </section>
    </ProtectedRoute>
  );
}
