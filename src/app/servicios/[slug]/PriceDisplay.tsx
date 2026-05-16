"use client";

import { useCurrency } from "../CurrencyProvider";

type Props = {
  precioUSD: string;
  precioARS: string;
  tiempo: string;
  acento: string;
  cuotas?: string;
};

export function PriceDisplay({ precioUSD, precioARS, tiempo, acento, cuotas }: Props) {
  const { currency } = useCurrency();
  const precio = currency === "ARS" ? precioARS : precioUSD;

  return (
    <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", alignItems: "center" }}>
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
      {cuotas && (
        <span
          style={{
            padding: "0.4rem 1rem",
            borderRadius: "0.6rem",
            background: "rgba(255,255,255,0.65)",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#6b7280",
          }}
        >
          {cuotas}
        </span>
      )}
    </div>
  );
}
