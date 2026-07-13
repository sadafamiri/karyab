type Props = {
  icon: string;
  title: string;
  total: number;
};

export default function CategoryCard({ icon, title, total }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-xl font-bold">{title}</h3>

      <p className="mt-2 text-slate-500">{total}+ Opportunities</p>
    </div>
  );
}
