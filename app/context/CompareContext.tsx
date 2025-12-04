"use client";

import { createContext, useContext, useEffect, useState } from "react";

// ⭐ Updated based on new API structure
export interface CompareProduct {
  slug: string;
  name: string;
  image: string;
  brand: string;
  specs: {
    field_name?: string | null;
    value: string | null;
    unit?: string | null;
    display_section: "highlight" | "detail" | "tag";
  }[];
}

interface CompareContextType {
  items: CompareProduct[];
  addItem: (product: CompareProduct) => void;
  removeItem: (slug: string) => void;
  clear: () => void;
}

const CompareContext = createContext<CompareContextType | null>(null);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CompareProduct[]>([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("compare_items");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("compare_items", JSON.stringify(items));
  }, [items]);

  const addItem = (product: CompareProduct) => {
    setItems((prev) => {
      if (prev.find((p) => p.slug === product.slug)) {
        return prev; // Already exists, do nothing
      }
      return [...prev, product];
    });
  };

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((p) => p.slug !== slug));
  };

  const clear = () => setItems([]);

  return (
    <CompareContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be inside CompareProvider");
  return ctx;
}
