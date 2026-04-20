"use client";

import { useCurrency } from "./CurrencyProvider";

export function CurrencyToggle() {
  const { currency, toggle } = useCurrency();
  const isARS = currency === "ARS";

  return (
    <button
      onClick={toggle}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.2rem",
        borderRadius: "99px",
        background: "rgba(255,255,255,0.55)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        backdropFilter: "blur(6px)",
        cursor: "pointer",
        gap: 0,
      }}
      aria-label="Cambiar moneda"
    >
      {(["USD", "ARS"] as const).map((opt) => {
        const active = currency === opt;
        return (
          <span
            key={opt}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              padding: "0.35rem 0.85rem",
              borderRadius: "99px",
              fontSize: "0.78rem",
              fontWeight: 700,
              transition: "background 0.18s, color 0.18s",
              background: active ? "#F37AA6" : "transparent",
              color: active ? "#fff" : "#9ca3af",
            }}
          >
            {opt === "USD" ? "🌎 Internacional" : "🇦🇷 Argentina"}
          </span>
        );
      })}
    </button>
  );
}
