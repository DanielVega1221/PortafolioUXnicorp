import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import { SERVICIOS } from "./data";
import { ServicioCard } from "./ServicioCard";
import ServicesFooterCta from "@/components/services/ServicesFooterCta";
import ServicesPageHeader from "@/components/services/ServicesPageHeader";
import ServiciosExtrasSection from "@/components/services/ServiciosExtrasSection";

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
      en: "https://www.uxnicorp.com.ar/en/servicios",
      "x-default": "https://www.uxnicorp.com.ar/servicios",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios de Desarrollo Web — UXnicorp",
    url: "https://www.uxnicorp.com.ar/servicios",
    numberOfItems: SERVICIOS.length,
    itemListElement: SERVICIOS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.nombre,
        description: s.seo.description,
        url: `https://www.uxnicorp.com.ar/servicios/${s.slug}`,
        provider: { "@type": "Organization", name: "UXnicorp" },
      },
    })),
  };

  return (
    <main
      style={{
        background:
          "radial-gradient(ellipse 90% 48% at 72% 20%, rgba(224,166,216,0.70) 0%, rgba(202,222,249,0.72) 38%, rgba(254,224,214,0.66) 72%, rgba(255,255,255,0) 100%), #ffffff",
        minHeight: "100vh",
      }}
    >
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">

        <ServicesPageHeader locale="es" />

        <Script
          id="servicios-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {SERVICIOS.map((s) => (
            <ServicioCard key={s.slug} s={s} />
          ))}
        </div>

        <ServiciosExtrasSection locale="es" />

        <ServicesFooterCta locale="es" />

       

      </div>
    </main>
  );
}
 
