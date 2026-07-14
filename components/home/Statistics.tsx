import Container from "../layout/Container";

const stats = [
  {
    id: 1,
    title: "Jobs",
    value: "250+",
    icon: "💼",
  },
  {
    id: 2,
    title: "Scholarships",
    value: "120+",
    icon: "🎓",
  },
  {
    id: 3,
    title: "Internships",
    value: "85+",
    icon: "👨‍💻",
  },
  {
    id: 4,
    title: "Remote Opportunities",
    value: "300+",
    icon: "🌍",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Platform Statistics</h2>

          <p className="mt-3 text-slate-600">
            Discover how many opportunities are available.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl bg-white p-8 text-center shadow-sm border hover:shadow-lg transition"
            >
              <div className="text-5xl">{stat.icon}</div>

              <h3 className="mt-4 text-4xl font-bold text-blue-600">
                {stat.value}
              </h3>

              <p className="mt-2 text-slate-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
