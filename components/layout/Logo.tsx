import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-md">
        K
      </div>

      <div>
        <h1 className="text-xl font-bold text-slate-900 transition-colors dark:text-white">
          KaarYab
        </h1>

        <p className="text-xs text-slate-500 transition-colors dark:text-slate-400">
          Afghanistan
        </p>
      </div>
    </Link>
  );
}
