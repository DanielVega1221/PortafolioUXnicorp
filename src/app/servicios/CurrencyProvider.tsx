"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "USD" | "ARS";

interface CurrencyCtx {
  currency: Currency;
  toggle: () => void;
}

const CurrencyContext = createContext<CurrencyCtx>({ currency: "USD", toggle: () => {} });

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(() => {
    if (typeof window === "undefined") return "USD";
    const saved = localStorage.getItem("uxnicorp-currency") as Currency | null;
    return saved === "ARS" || saved === "USD" ? saved : "USD";
  });

  const toggle = () => {
    setCurrency((c) => {
      const next = c === "USD" ? "ARS" : "USD";
      localStorage.setItem("uxnicorp-currency", next);
      return next;
    });
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggle }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
