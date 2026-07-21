type DashboardCardProps = {
  title: string;
  value: number;
};

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow">
      <h2 className="text-gray-500">{title}</h2>

      <p className="mt-3 text-4xl font-bold text-blue-600">{value}</p>
    </div>
  );
}
