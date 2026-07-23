type DashboardCardProps = {
  title: string;
  value: number;
};

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
      <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {title}
      </h2>

      <p className="mt-3 text-4xl font-bold text-blue-600 dark:text-blue-400">
        {value}
      </p>
    </div>
  );
}
