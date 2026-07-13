import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg">
        K
      </div>

      <div>
        <h1 className="text-xl font-bold text-slate-900">KaarYab</h1>

        <p className="text-xs text-slate-500">Afghanistan</p>
      </div>
    </Link>
  );
}
