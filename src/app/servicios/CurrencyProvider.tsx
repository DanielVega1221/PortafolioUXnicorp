"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Currency = "USD" | "ARS";

interface CurrencyCtx {
  currency: Currency;
  toggle: () => void;
}

const CurrencyContext = createContext<CurrencyCtx>({ currency: "USD", toggle: () => {} });

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    const saved = localStorage.getItem("uxnicorp-currency") as Currency | null;
    if (saved === "ARS" || saved === "USD") setCurrency(saved);
  }, []);

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
