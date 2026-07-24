type Props = {
  icon: string;
  title: string;
  total: number;
};

export default function CategoryCard({ icon, title, total }: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
        {total}+ Opportunities
      </p>
    </div>
  );
}
