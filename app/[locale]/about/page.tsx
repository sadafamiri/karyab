import Container from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="mb-8 text-center text-5xl font-bold">
          About KaarYab Afghanistan
        </h1>

        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-8 text-slate-700">
          <p>
            KaarYab Afghanistan is an opportunity finder platform designed to
            help Afghan youth discover jobs, internships, scholarships, training
            programs, remote work, and online learning opportunities.
          </p>

          <p>
            Many opportunities are scattered across different websites and
            social media platforms. KaarYab brings them together in one place,
            making it easier for students, graduates, and job seekers to find
            suitable opportunities.
          </p>

          <p>
            Users can browse opportunities, search and filter results, save
            opportunities, and even submit new opportunities through the
            platform.
          </p>

          <p>
            This project was built using Next.js, React, Tailwind CSS, React
            Hook Form, Zod Validation, Context API, and LocalStorage as a final
            capstone project.
          </p>
        </div>
      </Container>
    </section>
  );
}
