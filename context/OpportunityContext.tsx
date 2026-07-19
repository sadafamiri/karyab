"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
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
  deleteOpportunity: (id: string) => void;
};

const OpportunityContext = createContext<OpportunityContextType | undefined>(
  undefined,
);

export function OpportunityProvider({ children }: { children: ReactNode }) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("opportunities");

      if (saved) {
        return JSON.parse(saved);
      }
    }

    return initialData;
  });
  useEffect(() => {
    localStorage.setItem("opportunities", JSON.stringify(opportunities));
  }, [opportunities]);
  function addOpportunity(opportunity: Opportunity) {
    console.log("addOpportunity called");

    setOpportunities((prev) => [...prev, opportunity]);
  }

  function deleteOpportunity(id: string) {
    setOpportunities((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <OpportunityContext.Provider
      value={{
        opportunities,
        addOpportunity,
        deleteOpportunity,
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
