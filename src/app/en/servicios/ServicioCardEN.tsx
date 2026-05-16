"use client";

import React from "react";
import TransitionLink from "@/components/TransitionLink";
import type { ServicioEN } from "./data";
import { useCurrency } from "@/app/servicios/CurrencyProvider";

const ACENTOS: Record<string, { pill: string; border: string }> = {
  "landing-page": {
    pill: "rgba(243,122,166,0.12)",
    border: "rgba(243,122,166,0.25)",
  },
  ecommerce: {
    pill: "rgba(58,124,196,0.10)",
    border: "rgba(58,124,196,0.20)",
  },
  "sistemas-apps": {
    pill: "rgba(144,64,176,0.10)",
    border: "rgba(144,64,176,0.20)",
  },
};

export function ServicioCardEN({ s }: { s: ServicioEN }) {
  const ac = ACENTOS[s.slug] ?? { pill: "rgba(0,0,0,0.05)", border: "rgba(0,0,0,0.1)" };
  const { currency } = useCurrency();
  const precio = currency === "ARS" ? s.precioARS : s.precioUSD;

  return (
    <TransitionLink href={`/en/servicios/${s.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          borderRadius: "1.5rem",
          padding: "2rem 2.25rem",
          background: s.bg,
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
        }}
      >
        <div style={{ flex: "1 1 280px" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#111",
              margin: "0 0 0.4rem 0",
            }}
          >
            {s.nombre}
          </h2>
          <p style={{ fontSize: "0.875rem", color: "#4a5568", margin: 0, lineHeight: 1.55 }}>
            {s.tagline}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", flexWrap: "wrap" }}>
          <span
            style={{
              padding: "0.3rem 0.85rem",
              borderRadius: "0.5rem",
              background: ac.pill,
              border: `1px solid ${ac.border}`,
              fontSize: "0.8rem",
              fontWeight: 700,
              color: s.acento,
            }}
          >
            {precio}
          </span>
          <span
            style={{
              padding: "0.3rem 0.85rem",
              borderRadius: "0.5rem",
              background: "rgba(255,255,255,0.5)",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#4a5568",
            }}
          >
            {s.tiempo}
          </span>
          <span
            style={{
              padding: "0.3rem 0.85rem",
              borderRadius: "0.5rem",
              background: "rgba(255,255,255,0.5)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#9ca3af",
            }}
          >
            {s.cuotas}
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "#9ca3af" }}>
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </TransitionLink>
  );
}
