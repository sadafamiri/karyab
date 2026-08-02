"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useOpportunities } from "@/context/OpportunityContext";
import { Opportunity } from "@/context/OpportunityContext";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

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

type OpportunityFormProps = {
  opportunity?: Opportunity;
};

export default function OpportunityForm({ opportunity }: OpportunityFormProps) {
  const t = useTranslations("OpportunityForm");

  const schema = z.object({
    title: z.string().min(3, t("errors.title")),
    organization: z.string().min(3, t("errors.organization")),
    category: z.string().min(1, t("errors.category")),
    location: z.string().min(2, t("errors.location")),
    deadline: z.string().min(1, t("errors.deadline")),
    description: z.string().min(10, t("errors.description")),
    requirements: z.string().min(5, t("errors.requirements")),
    applyLink: z.string().url(t("errors.url")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),

    defaultValues: opportunity
      ? {
          title: opportunity.title,
          organization: opportunity.organization,
          category: opportunity.category,
          location: opportunity.location,
          deadline: opportunity.deadline,
          description: opportunity.description,
          requirements: opportunity.requirements.join(", "),
          applyLink: opportunity.applyLink,
        }
      : undefined,
  });

  const { addOpportunity, updateOpportunity } = useOpportunities();

  const router = useRouter();

  function onSubmit(data: FormData) {
    const newOpportunity = {
      id: opportunity ? opportunity.id : Date.now().toString(),
      title: data.title,
      organization: data.organization,
      category: data.category,
      location: data.location,
      type: opportunity ? opportunity.type : "Custom",
      deadline: data.deadline,
      description: data.description,
      requirements: data.requirements.split(",").map((item) => item.trim()),
      applyLink: data.applyLink,
    };

    if (opportunity) {
      updateOpportunity(newOpportunity);

      alert(t("updatedSuccess"));

      router.push("/opportunities");
    } else {
      addOpportunity(newOpportunity);

      alert(t("addedSuccess"));

      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800"
    >
      {" "}
      {/* Title */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t("title")}
        </label>

        <input
          {...register("title")}
          placeholder={t("titlePlaceholder")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>
      {/* Organization */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t("organization")}
        </label>

        <input
          {...register("organization")}
          placeholder={t("organizationPlaceholder")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.organization && (
          <p className="mt-1 text-sm text-red-600">
            {errors.organization.message}
          </p>
        )}
      </div>
      {/* Category */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t("category")}
        </label>

        <select
          {...register("category")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        >
          <option value="">{t("selectCategory")}</option>

          <option value="Job">{t("job")}</option>

          <option value="Internship">{t("internship")}</option>

          <option value="Scholarship">{t("scholarship")}</option>

          <option value="Training">{t("training")}</option>

          <option value="Volunteer">{t("volunteer")}</option>
        </select>

        {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>
      {/* Location */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t("location")}
        </label>

        <input
          {...register("location")}
          placeholder={t("locationPlaceholder")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
        )}
      </div>
      {/* Deadline */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t("deadline")}
        </label>

        <input
          type="date"
          {...register("deadline")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.deadline && (
          <p className="mt-1 text-sm text-red-600">{errors.deadline.message}</p>
        )}
      </div>
      {/* Description */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t("description")}
        </label>

        <textarea
          {...register("description")}
          rows={5}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>
      {/* Requirements */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t("requirements")}
        </label>

        <textarea
          {...register("requirements")}
          rows={4}
          placeholder={t("requirementsPlaceholder")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 placeholder:text-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.requirements && (
          <p className="mt-1 text-sm text-red-600">
            {errors.requirements.message}
          </p>
        )}
      </div>
      {/* Apply Link */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t("applyLink")}
        </label>

        <input
          {...register("applyLink")}
          placeholder="https://example.com"
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.applyLink && (
          <p className="mt-1 text-sm text-red-600">
            {errors.applyLink.message}
          </p>
        )}
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        {opportunity ? t("update") : t("add")}
      </button>
    </form>
  );
}
