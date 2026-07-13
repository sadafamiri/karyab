import Link from "next/link";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🇦🇫 Empowering Afghan Youth
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
            Discover Your Next Opportunity
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find jobs, internships, scholarships, remote work, and learning
            opportunities across Afghanistan in one place.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/opportunities"
              className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Explore Opportunities
            </Link>

            <Link
              href="/add-opportunity"
              className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-100"
            >
              Add Opportunity
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
