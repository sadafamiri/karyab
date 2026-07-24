import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SavedProvider } from "@/context/SavedContext";
import { OpportunityProvider } from "@/context/OpportunityContext";
import ThemeProvider from "@/context/ThemeProvider";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "KaarYab Afghanistan",
  description: "Opportunity Finder Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
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
      </body>
    </html>
  );
}
