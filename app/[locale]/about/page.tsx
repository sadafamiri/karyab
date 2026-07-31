import Container from "@/components/layout/Container";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <section className="py-20">
      <Container>
        <h1 className="mb-8 text-center text-5xl font-bold">{t("title")}</h1>

        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
          <p>{t("p1")}</p>

          <p>{t("p2")}</p>

          <p>{t("p3")}</p>

          <p>{t("p4")}</p>
        </div>
      </Container>
    </section>
  );
}
