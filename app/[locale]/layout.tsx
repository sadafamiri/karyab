import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ThemeProvider from "@/context/ThemeProvider";
import { AuthProvider } from "@/context/AuthContext";
import { OpportunityProvider } from "@/context/OpportunityContext";
import { SavedProvider } from "@/context/SavedContext";

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
      <ThemeProvider>
        <AuthProvider>
          <OpportunityProvider>
            <SavedProvider>
              <Navbar />
              {children}
              <Footer />
            </SavedProvider>
          </OpportunityProvider>
        </AuthProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
