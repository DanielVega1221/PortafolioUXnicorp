"use client";

import { useCurrency } from "../CurrencyProvider";
import type { Servicio } from "../data";

type Props = {
  precioUSD: string;
  precioARS: string;
  tiempo: string;
  acento: string;
};

export function PriceDisplay({ precioUSD, precioARS, tiempo, acento }: Props) {
  const { currency } = useCurrency();
  const precio = currency === "ARS" ? precioARS : precioUSD;

  return (
    <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
      <span
        style={{
          padding: "0.4rem 1rem",
          borderRadius: "0.6rem",
          background: "rgba(255,255,255,0.65)",
          fontSize: "0.875rem",
          fontWeight: 700,
          color: acento,
        }}
      >
        {precio}
      </span>
      <span
        style={{
          padding: "0.4rem 1rem",
          borderRadius: "0.6rem",
          background: "rgba(255,255,255,0.65)",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "#4a5568",
        }}
      >
        {tiempo}
      </span>
    </div>
  );
}
