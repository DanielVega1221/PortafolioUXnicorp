import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { CASOS, getCasoLocalized } from "./data";
import CasesPageHeader from "@/components/cases/CasesPageHeader";
import CasesFooterCta from "@/components/cases/CasesFooterCta";

export const metadata: Metadata = {
  title: "Proyectos reales — Landing Pages, Tiendas Online y Sistemas Web",
  description:
    "6 proyectos de desarrollo web en Argentina: landing pages, tiendas online, sistemas de gestión y webs institucionales. Sin mockups, sin demos.",
  keywords: [
    "proyectos desarrollo web argentina",
    "landing page argentina ejemplos",
    "tienda online a medida argentina",
    "sistema de gestión a medida argentina",
    "sistema erp argentina caso de uso",
    "web institucional argentina",
    "sitio corporativo argentina",
    "sistema crm a medida",
    "desarrollo web portfolio argentina",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/casos",
    languages: {
      es: "https://www.uxnicorp.com.ar/casos",
      en: "https://www.uxnicorp.com.ar/en/casos",
      "x-default": "https://www.uxnicorp.com.ar/casos",
    },
  },
  openGraph: {
    title: "Proyectos reales | UXnicorp — Desarrollo Web Argentina",
    description:
      "6 proyectos: landing pages, tiendas online, sistemas de gestión y webs institucionales. Sin mockups, sin demos.",
    url: "https://www.uxnicorp.com.ar/casos",
    type: "website",
    locale: "es_AR",
    siteName: "UXnicorp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Proyectos UXnicorp — Desarrollo web Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos reales | UXnicorp — Desarrollo Web Argentina",
    description:
      "6 proyectos: landing pages, tiendas online, sistemas de gestión y webs institucionales.",
    images: ["/og-image.png"],
  },
};

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "0.15rem" }}>
      <circle cx="7" cy="7" r="6" fill={color} fillOpacity="0.15" />
      <path d="M4.5 7l1.75 1.75L9.5 5.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ImageZone({ src, alt }: { src?: string; alt: string }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
    );
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(255,255,255,0.35)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        color: "rgba(0,0,0,0.18)",
      }}
    >
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <rect x="2" y="6" width="26" height="19" rx="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="15.5" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6l1.5-3h7L20 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="24" cy="10" r="1.5" fill="currentColor" />
      </svg>
      <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.06em" }}>Screenshot del proyecto</span>
    </div>
  );
}

export default function CasosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Casos de éxito — UXnicorp",
    description: "Proyectos reales de desarrollo web y UX: landing pages, sistemas ERP, plataformas web y sitios corporativos en Argentina.",
    url: "https://www.uxnicorp.com.ar/casos",
    numberOfItems: CASOS.length,
    itemListElement: CASOS.map((caso, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: caso.cliente,
        description: caso.problema,
        url: caso.linkSitio ?? `https://www.uxnicorp.com.ar/casos#${caso.slug}`,
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
      <Script
        id="casos-jsonld-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">

        <CasesPageHeader locale="es" />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
          {CASOS.map((caso) => {
            const t = getCasoLocalized(caso, "es");
            return (
            <div
              key={caso.slug}
              style={{
                borderRadius: "1.5rem",
                background: caso.bg,
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "380px", flexShrink: 0, alignSelf: "stretch", minHeight: "280px" }}>
                <ImageZone src={caso.imagen} alt={caso.cliente} />
              </div>

              <div
                style={{
                  padding: "1.75rem 2rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.75rem",
                  alignItems: "start",
                  flex: 1,
                  borderLeft: "1px solid rgba(255,255,255,0.5)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        padding: "0.22rem 0.65rem",
                        borderRadius: "99px",
                        background: "rgba(255,255,255,0.65)",
                        color: caso.acento,
                      }}
                    >
                      {t.tipo}
                    </span>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        padding: "0.22rem 0.65rem",
                        borderRadius: "99px",
                        background: "rgba(255,255,255,0.65)",
                        color: "#9ca3af",
                      }}
                    >
                      {t.industria}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      letterSpacing: "-0.035em",
                      color: "#111",
                      margin: 0,
                      lineHeight: 1.15,
                    }}
                  >
                    {caso.cliente}
                  </h3>
                  <p style={{ fontSize: "0.84rem", lineHeight: 1.65, color: "#4a5568", margin: 0 }}>
                    {t.problema}
                  </p>
                  {caso.linkSitio && (
                    <a
                      href={caso.linkSitio}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: caso.acento,
                        textDecoration: "none",
                        marginTop: "0.25rem",
                      }}
                    >
                      Ver sitio
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", margin: "0 0 0.75rem 0" }}>
                      Qué hicimos
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {t.queHicimos.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.45rem",
                            fontSize: "0.82rem",
                            lineHeight: 1.5,
                            color: "#374151",
                          }}
                        >
                          <CheckIcon color={caso.acento} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    style={{
                      padding: "1rem 1.1rem",
                      borderRadius: "1rem",
                      background: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(255,255,255,0.8)",
                    }}
                  >
                    <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: caso.acento, margin: "0 0 0.45rem 0" }}>
                      Resultado
                    </p>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.6, color: "#111", margin: 0 }}>
                      {t.resultado}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <CasesFooterCta locale="es" />

      </div>
    </main>
  );
}
 
