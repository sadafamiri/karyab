import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SavedProvider } from "@/context/SavedContext";

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
    <html lang="en">
      <body>
        <SavedProvider>
          <Navbar />
          {children}
          <Footer />
        </SavedProvider>
      </body>
    </html>
  );
}
