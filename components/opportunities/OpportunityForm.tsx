"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormData = {
  title: string;
  organization: string;
  category: string;
  location: string;
  deadline: string;
  description: string;
  requirements: string;
  applyLink: string;
};

const schema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  organization: z.string().min(3, "Organization is required"),
  category: z.string().min(1, "Select a category"),
  location: z.string().min(2, "Location is required"),
  deadline: z.string().min(1, "Deadline is required"),
  description: z.string().min(10, "Description is too short"),
  requirements: z.string().min(5, "Requirements are required"),
  applyLink: z.string().url("Enter a valid URL"),
});

export default function OpportunityForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border bg-white p-8 shadow"
    >
      {/* Title */}
      <div>
        <label className="mb-2 block font-semibold">Title</label>

        <input
          {...register("title")}
          className="w-full rounded-lg border p-3"
          placeholder="Frontend Developer"
        />

        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      {/* Organization */}
      <div>
        <label className="mb-2 block font-semibold">Organization</label>

        <input
          {...register("organization")}
          className="w-full rounded-lg border p-3"
          placeholder="Google"
        />

        {errors.organization && (
          <p className="mt-1 text-sm text-red-600">
            {errors.organization.message}
          </p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block font-semibold">Category</label>

        <select
          {...register("category")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">Select Category</option>
          <option value="Job">Job</option>
          <option value="Internship">Internship</option>
          <option value="Scholarship">Scholarship</option>
          <option value="Training">Training</option>
          <option value="Volunteer">Volunteer</option>
        </select>

        {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label className="mb-2 block font-semibold">Location</label>

        <input
          {...register("location")}
          className="w-full rounded-lg border p-3"
          placeholder="Herat"
        />

        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
        )}
      </div>

      {/* Deadline */}
      <div>
        <label className="mb-2 block font-semibold">Deadline</label>

        <input
          type="date"
          {...register("deadline")}
          className="w-full rounded-lg border p-3"
        />

        {errors.deadline && (
          <p className="mt-1 text-sm text-red-600">{errors.deadline.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block font-semibold">Description</label>

        <textarea
          {...register("description")}
          rows={5}
          className="w-full rounded-lg border p-3"
          placeholder="Write opportunity description..."
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Requirements */}
      <div>
        <label className="mb-2 block font-semibold">Requirements</label>

        <textarea
          {...register("requirements")}
          rows={4}
          className="w-full rounded-lg border p-3"
          placeholder="React, HTML, CSS..."
        />

        {errors.requirements && (
          <p className="mt-1 text-sm text-red-600">
            {errors.requirements.message}
          </p>
        )}
      </div>

      {/* Apply Link */}
      <div>
        <label className="mb-2 block font-semibold">Apply Link</label>

        <input
          {...register("applyLink")}
          className="w-full rounded-lg border p-3"
          placeholder="https://example.com"
        />

        {errors.applyLink && (
          <p className="mt-1 text-sm text-red-600">
            {errors.applyLink.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Add Opportunity
      </button>
    </form>
  );
}
