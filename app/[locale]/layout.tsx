import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Providers from "@/context/Providers";

const locales = ["en", "fa", "ps"];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === "fa" || locale === "ps" ? "rtl" : "ltr"}>
        <Providers>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </Providers>
      </div>
    </NextIntlClientProvider>
  );
}
