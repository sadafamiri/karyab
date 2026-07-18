"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { opportunities as initialData } from "@/data/opportunities";

export type Opportunity = {
  id: string;
  title: string;
  organization: string;
  category: string;
  location: string;
  type: string;
  deadline: string;
  description: string;
  requirements: string[];
  applyLink: string;
};

type OpportunityContextType = {
  opportunities: Opportunity[];
  addOpportunity: (opportunity: Opportunity) => void;
};

const OpportunityContext = createContext<OpportunityContextType | undefined>(
  undefined,
);

export function OpportunityProvider({ children }: { children: ReactNode }) {
  const [opportunities, setOpportunities] =
    useState<Opportunity[]>(initialData);

  function addOpportunity(opportunity: Opportunity) {
    setOpportunities((prev) => [...prev, opportunity]);
  }

  return (
    <OpportunityContext.Provider
      value={{
        opportunities,
        addOpportunity,
      }}
    >
      {children}
    </OpportunityContext.Provider>
  );
}

export function useOpportunities() {
  const context = useContext(OpportunityContext);

  if (!context) {
    throw new Error("useOpportunities must be used inside OpportunityProvider");
  }

  return context;
}
