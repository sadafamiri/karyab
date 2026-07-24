    //  درست شد 
    import Link from "next/link";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-20 transition-colors duration-300 dark:bg-slate-900">
      <Container>
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            🇦🇫 Empowering Afghan Youth
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Discover Your Next Opportunity
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Find jobs, internships, scholarships, remote work, and learning
            opportunities across Afghanistan in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/opportunities"
              className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              Explore Opportunities
            </Link>

            <Link
              href="/add-opportunity"
              className="rounded-xl border border-slate-300 px-6 py-3 text-slate-900 transition hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800"
            >
              Add Opportunity
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
