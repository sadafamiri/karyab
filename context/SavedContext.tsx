"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type SavedContextType = {
  savedIds: string[];
  saveOpportunity: (id: string) => void;
  removeOpportunity: (id: string) => void;
};

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export function SavedProvider({ children }: { children: ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedOpportunities");

    if (saved) {
      setSavedIds(JSON.parse(saved));
    }
  }, []);

  function saveOpportunity(id: string) {
    setSavedIds((prev) => {
      if (prev.includes(id)) return prev;

      const updated = [...prev, id];

      localStorage.setItem("savedOpportunities", JSON.stringify(updated));

      return updated;
    });
  }

  function removeOpportunity(id: string) {
    setSavedIds((prev) => {
      const updated = prev.filter((savedId) => savedId !== id);

      localStorage.setItem("savedOpportunities", JSON.stringify(updated));

      return updated;
    });
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
