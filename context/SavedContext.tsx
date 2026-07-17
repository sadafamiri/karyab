"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SavedContextType = {
  savedIds: string[];
  saveOpportunity: (id: string) => void;
  removeOpportunity: (id: string) => void;
};

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export function SavedProvider({ children }: { children: ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  function saveOpportunity(id: string) {
    if (savedIds.includes(id)) return;

    setSavedIds([...savedIds, id]);
  }
  function removeOpportunity(id: string) {
    setSavedIds(savedIds.filter((savedId) => savedId !== id));
  }
  return (
    <SavedContext.Provider
      value={{
        savedIds,
        saveOpportunity,
        removeOpportunity,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const context = useContext(SavedContext);

  if (!context) {
    throw new Error("useSaved must be used inside SavedProvider");
  }

  return context;
}
