import React from "react";
import TransitionLink from "@/components/TransitionLink";
import type { Metadata } from "next";
import { SERVICIOS } from "./data";
import { ServicioCard } from "./ServicioCard";
import { CurrencyToggle } from "./CurrencyToggle";

export const metadata: Metadata = {
  title: "Servicios de diseño y desarrollo web | UXnicorp",
  description:
    "Landing pages, e-commerce y sistemas a medida. Diseño, desarrollo y estrategia en un solo equipo. Conocé precios, tiempos y qué incluye cada servicio.",
  keywords: [
    "servicios desarrollo web argentina",
    "landing page a medida argentina",
    "precio landing page argentina",
    "tienda online argentina",
    "precio tienda online argentina",
    "ecommerce a medida argentina",
    "sistema de gestión web",
    "sistema erp precio argentina",
    "sistema crm a medida",
    "sistema de inventario web",
    "software de facturación web",
    "web institucional argentina",
    "sitio corporativo precio",
    "desarrollo web argentina precios",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/servicios",
    languages: {
      es: "https://www.uxnicorp.com.ar/servicios",
    },
  },
  openGraph: {
    title: "Servicios de diseño y desarrollo web | UXnicorp",
    description:
      "Landing pages, e-commerce y sistemas a medida. Precios claros, tiempos reales, equipo local.",
    url: "https://www.uxnicorp.com.ar/servicios",
    type: "website",
    siteName: "UXnicorp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Servicios UXnicorp — Desarrollo Web Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de diseño y desarrollo web | UXnicorp",
    description:
      "Landing pages, e-commerce y sistemas a medida. Precios claros, tiempos reales.",
    images: ["/og-image.png"],
  },
};

export default function ServiciosPage() {
  return (
    <main
      style={{
        background:
          "radial-gradient(ellipse 90% 48% at 72% 20%, rgba(224,166,216,0.70) 0%, rgba(202,222,249,0.72) 38%, rgba(254,224,214,0.66) 72%, rgba(255,255,255,0) 100%), #ffffff",
        minHeight: "100vh",
      }}
    >
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">

        {/* Back */}
        <TransitionLink
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "#F37AA6",
            textDecoration: "none",
            marginBottom: "2.5rem",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2.5L5 7l4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Volver
        </TransitionLink>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            Servicios
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h1 className="max-w-2xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
              Lo que hacemos,<br />cómo y cuánto cuesta.
            </h1>
            <CurrencyToggle />
          </div>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-500">
            Tres tipos de proyecto. Precios reales. Cada página tiene el detalle completo de etapas, qué incluye y qué no.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {SERVICIOS.map((s) => (
            <ServicioCard key={s.slug} s={s} />
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "3rem",
            borderRadius: "1.5rem",
            padding: "2rem 2.25rem",
            background: "linear-gradient(135deg, #F37AA6 0%, #E0A6D8 100%)",
            boxShadow: "0 8px 40px rgba(243,122,166,0.22)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.3rem 0", letterSpacing: "-0.03em" }}>
              No ves lo que necesitás?
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Contanos qué tenés en mente. Si tiene sentido, lo armamos a medida.
            </p>
          </div>
          <a
            href="/#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              padding: "0.7rem 1.5rem",
              borderRadius: "0.875rem",
              background: "#fff",
              color: "#e0608a",
              fontWeight: 700,
              fontSize: "0.875rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            }}
          >
            Hablemos
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

       

      </div>
    </main>
  );
}
 
