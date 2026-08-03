import { opportunities } from "@/data/opportunities";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityDetails({ params }: Props) {
  const { id } = await params;

  const t = await getTranslations("OpportunityDetails");

  const opportunity = opportunities.find((item) => item.id === id);

  if (!opportunity) {
    return (
      <Container>
        <h1 className="py-20 text-center text-3xl font-bold">
          {t("notFound")}
        </h1>
      </Container>
    );
  }

  return (
    <section className="py-20">
      <Container>
        <Link href="/opportunities" className="text-blue-600 hover:underline">
          ← {t("back")}
        </Link>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            {opportunity.category}
          </span>

          <h1 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            {opportunity.title}
          </h1>

          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            {opportunity.organization}
          </p>

          <div className="mt-6 space-y-2 text-slate-700 dark:text-slate-300">
            <p>
              📍 <strong>{t("location")}:</strong> {opportunity.location}
            </p>

            <p>
              💼 <strong>{t("type")}:</strong> {opportunity.type}
            </p>

            <p>
              📅 <strong>{t("deadline")}:</strong> {opportunity.deadline}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {t("description")}
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {opportunity.description}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {t("requirements")}
            </h2>

            <ul className="mt-3 list-disc pl-5 text-slate-700 dark:text-slate-300">
              {opportunity.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <a
            href={opportunity.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {t("apply")}
          </a>
        </div>
      </Container>
    </section>
  );
}
