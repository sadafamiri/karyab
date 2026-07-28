import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KaarYab Afghanistan",
  description: "Opportunity Finder Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
