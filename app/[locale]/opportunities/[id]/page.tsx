import { opportunities } from "@/data/opportunities";
import Container from "@/components/layout/Container";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityDetails({ params }: Props) {
  const { id } = await params;

  const opportunity = opportunities.find((item) => item.id === id);

  if (!opportunity) {
    return (
      <Container>
        <h1 className="py-20 text-center text-3xl font-bold">
          Opportunity Not Found
        </h1>
      </Container>
    );
  }

  return (
    <section className="py-20">
      <Container>
        <Link href="/opportunities" className="text-blue-600 hover:underline">
          ← Back
        </Link>

        <div className="mt-8 rounded-2xl border p-8 shadow">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            {opportunity.category}
          </span>

          <h1 className="mt-5 text-4xl font-bold">{opportunity.title}</h1>

          <p className="mt-3 text-lg text-slate-600">
            {opportunity.organization}
          </p>

          <div className="mt-6 space-y-2">
            <p>📍 {opportunity.location}</p>
            <p>💼 {opportunity.type}</p>
            <p>📅 {opportunity.deadline}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="mt-3 text-slate-600">{opportunity.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Requirements</h2>

            <ul className="mt-3 list-disc pl-5">
              {opportunity.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <a
            href={opportunity.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
          >
            Apply Now
          </a>
        </div>
      </Container>
    </section>
  );
}
