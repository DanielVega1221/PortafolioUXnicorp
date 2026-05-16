import React from "react";
import Script from "next/script";
import type { Metadata } from "next";
import { SERVICIOS_EN } from "./data";
import { ServicioCardEN } from "./ServicioCardEN";
import ServicesFooterCta from "@/components/services/ServicesFooterCta";
import ServicesPageHeader from "@/components/services/ServicesPageHeader";
import ServiciosExtrasSection from "@/components/services/ServiciosExtrasSection";

export const metadata: Metadata = {
  title: "Web Development Services — Landing Pages, Online Stores & Systems | UXnicorp",
  description:
    "Landing pages, online stores and custom management systems (ERP, CRM). Clear pricing, real timelines, no outsourcing. See what's included in each service.",
  keywords: [
    "web development services argentina",
    "landing page price",
    "online store development",
    "ecommerce development agency",
    "erp system development",
    "crm development",
    "inventory system web",
    "invoicing system web",
    "corporate website development",
    "custom software argentina",
    "web development pricing",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/en/servicios",
    languages: {
      es: "https://www.uxnicorp.com.ar/servicios",
      en: "https://www.uxnicorp.com.ar/en/servicios",
      "x-default": "https://www.uxnicorp.com.ar/servicios",
    },
  },
  openGraph: {
    title: "Web Development Services | UXnicorp",
    description:
      "Landing pages, online stores and management systems. Clear pricing, real timelines.",
    url: "https://www.uxnicorp.com.ar/en/servicios",
    type: "website",
    locale: "en_US",
    siteName: "UXnicorp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UXnicorp Services — Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | UXnicorp",
    description:
      "Landing pages, online stores and management systems. Clear pricing, real timelines.",
    images: ["/og-image.png"],
  },
};

export default function EnServiciosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development Services — UXnicorp",
    url: "https://www.uxnicorp.com.ar/en/servicios",
    numberOfItems: SERVICIOS_EN.length,
    itemListElement: SERVICIOS_EN.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.nombre,
        description: s.seo.description,
        url: `https://www.uxnicorp.com.ar/en/servicios/${s.slug}`,
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

        <ServicesPageHeader locale="en" />

        <Script
          id="servicios-en-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {SERVICIOS_EN.map((s) => (
            <ServicioCardEN key={s.slug} s={s} />
          ))}
        </div>

        <ServiciosExtrasSection locale="en" />

        <ServicesFooterCta locale="en" />

      </div>
    </main>
  );
}
