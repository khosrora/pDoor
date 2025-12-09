"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type CompareProduct = {
  slug: string;
  name: string;
  image: string;
  brand: string;
  specs: { field_name: string; value: string }[];
};

type CompareContextType = {
  items: CompareProduct[];
  addItem: (product: CompareProduct) => void;
  removeItem: (slug: string) => void;
  clearAll: () => void;
};

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CompareProduct[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("compare_items");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("compare_items", JSON.stringify(items));
  }, [items]);

  const addItem = (product: CompareProduct) => {
    setItems((prev) => [...prev, product]);
  };

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((p) => p.slug !== slug));
  };

  const clearAll = () => setItems([]);

  return (
    <CompareContext.Provider value={{ items, addItem, removeItem, clearAll }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context)
    throw new Error("useCompare must be used within CompareProvider");
  return context;
};
