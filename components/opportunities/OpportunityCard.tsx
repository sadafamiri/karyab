"use client";
import Link from "next/link";
import { useSaved } from "@/context/SavedContext";
import { useOpportunities } from "@/context/OpportunityContext";

type OpportunityCardProps = {
  id: string;
  title: string;
  organization: string;
  location: string;
  category: string;
  type: string;
  deadline: string;
};

export default function OpportunityCard({
  id,
  title,
  organization,
  location,
  category,
  type,
  deadline,
}: OpportunityCardProps) {
  const { saveOpportunity } = useSaved();
  const { deleteOpportunity } = useOpportunities();
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        {category}
      </span>

      <h2 className="mt-4 text-xl font-bold text-slate-900">{title}</h2>

      <p className="mt-2 text-slate-600">{organization}</p>

      <div className="mt-4 space-y-2 text-sm text-slate-500">
        <p>📍 {location}</p>
        <p>💼 {type}</p>
        <p>📅 {deadline}</p>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => saveOpportunity(id)}
          className="rounded-lg bg-green-600 px-4 py-2 text-white"
        >
          Save
        </button>

        <Link
          href={`/edit-opportunity/${id}`}
          className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
        >
          Edit
        </Link>

        <Link
          href={`/opportunities/${id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Details
        </Link>
      </div>
      <button
        onClick={() => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this opportunity?",
          );

          if (confirmDelete) {
            deleteOpportunity(id);
            alert("Opportunity deleted successfully.");
          }
        }}
        className="ml-3 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}
