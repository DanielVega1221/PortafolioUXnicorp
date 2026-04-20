import React from "react";
import TransitionLink from "@/components/TransitionLink";
import type { Metadata } from "next";
import { SERVICIOS_EN } from "./data";
import { CurrencyToggle } from "@/app/servicios/CurrencyToggle";
import { ServicioCardEN } from "./ServicioCardEN";

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
          href="/en"
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
          Back
        </TransitionLink>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            Services
          </p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h1 className="max-w-2xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
              What we do,<br />how and how much it costs.
            </h1>
            <CurrencyToggle />
          </div>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-500">
            Three types of project. Real pricing. Each page has the full detail of stages, what&apos;s included and what&apos;s not.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {SERVICIOS_EN.map((s) => (
            <ServicioCardEN key={s.slug} s={s} />
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
              Don&apos;t see what you need?
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Tell us what you have in mind. If it makes sense, we&apos;ll scope it out.
            </p>
          </div>
          <a
            href="/en#contacto"
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
            Let&apos;s talk
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}
