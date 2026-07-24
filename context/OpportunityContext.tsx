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
  updateOpportunity: (opportunity: Opportunity) => void;
};

const OpportunityContext = createContext<OpportunityContextType | undefined>(
  undefined,
);

export function OpportunityProvider({ children }: { children: ReactNode }) {
  const [opportunities, setOpportunities] =
    useState<Opportunity[]>(initialData);

  useEffect(() => {
    const saved = localStorage.getItem("opportunities");

    if (saved) {
      const parsed = JSON.parse(saved);

      if (parsed.length < initialData.length) {
        setOpportunities(initialData);
      } else {
        setOpportunities(parsed);
      }
    } else {
      setOpportunities(initialData);
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("opportunities", JSON.stringify(opportunities));
  }, [opportunities]);

  function addOpportunity(opportunity: Opportunity) {
    setOpportunities((prev) => [...prev, opportunity]);
  }

  function deleteOpportunity(id: string) {
    setOpportunities((prev) => prev.filter((item) => item.id !== id));
  }

  function updateOpportunity(updatedOpportunity: Opportunity) {
    setOpportunities((prev) =>
      prev.map((item) =>
        item.id === updatedOpportunity.id ? updatedOpportunity : item,
      ),
    );
  }

  return (
    <OpportunityContext.Provider
      value={{
        opportunities,
        addOpportunity,
        deleteOpportunity,
        updateOpportunity,
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
