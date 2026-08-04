"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import { AuthProvider } from "@/context/AuthContext";
import { OpportunityProvider } from "@/context/OpportunityContext";
import { SavedProvider } from "@/context/SavedContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AuthProvider>
        <OpportunityProvider>
          <SavedProvider>{children}</SavedProvider>
        </OpportunityProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
