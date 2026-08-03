"use client";

import { ReactNode } from "react";

import { AuthProvider } from "@/context/AuthContext";
import { OpportunityProvider } from "@/context/OpportunityContext";
import { SavedProvider } from "@/context/SavedContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <OpportunityProvider>
        <SavedProvider>{children}</SavedProvider>
      </OpportunityProvider>
    </AuthProvider>
  );
}
