import Container from "@/components/layout/Container";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-slate-950">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-center text-5xl font-bold text-slate-900 dark:text-white">
            {t("title")}
          </h1>

          <p className="mb-10 text-center text-slate-600 dark:text-slate-300">
            {t("description")}
          </p>

          <form className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-800">
            {/* Full Name */}
            <div>
              <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
                {t("fullName")}
              </label>

              <input
                type="text"
                placeholder={t("fullNamePlaceholder")}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
                {t("email")}
              </label>

              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
                {t("subject")}
              </label>

              <input
                type="text"
                placeholder={t("subjectPlaceholder")}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
                {t("message")}
              </label>

              <textarea
                rows={6}
                placeholder={t("messagePlaceholder")}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
