import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { CASOS, getCasoLocalized } from "@/app/casos/data";
import CasesPageHeader from "@/components/cases/CasesPageHeader";
import CasesFooterCta from "@/components/cases/CasesFooterCta";

export const metadata: Metadata = {
  title: "Real Projects — Landing Pages, Online Stores & Web Systems | UXnicorp",
  description:
    "6 web development projects from Argentina: landing pages, online stores, management systems and corporate websites. No mockups, no demos.",
  keywords: [
    "web development projects argentina",
    "landing page examples argentina",
    "online store development argentina",
    "erp system argentina",
    "crm development examples",
    "management system argentina",
    "corporate website argentina",
    "institutional website examples",
    "web development portfolio argentina",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/en/casos",
    languages: {
      es: "https://www.uxnicorp.com.ar/casos",
      en: "https://www.uxnicorp.com.ar/en/casos",
      "x-default": "https://www.uxnicorp.com.ar/casos",
    },
  },
  openGraph: {
    title: "Real Projects | UXnicorp — Web Development Argentina",
    description:
      "6 projects: landing pages, online stores, management systems and corporate websites. No mockups, no demos.",
    url: "https://www.uxnicorp.com.ar/en/casos",
    type: "website",
    locale: "en_US",
    siteName: "UXnicorp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UXnicorp — Real web development projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Projects | UXnicorp — Web Development Argentina",
    description:
      "6 projects: landing pages, online stores, management systems and corporate websites.",
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
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
      />
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
      <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.06em" }}>Project screenshot</span>
    </div>
  );
}

export default function CasosEnPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Case Studies — UXnicorp",
    description:
      "Real web development projects: landing pages, ERP systems, fintech platforms, and corporate websites from Argentina.",
    url: "https://www.uxnicorp.com.ar/en/casos",
    numberOfItems: CASOS.length,
    inLanguage: "en",
    itemListElement: CASOS.map((caso, i) => {
      const t = getCasoLocalized(caso, "en");
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: caso.cliente,
          description: t.problema,
          url: caso.linkSitio ?? `https://www.uxnicorp.com.ar/en/casos#${caso.slug}`,
        },
      };
    }),
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
        id="casos-jsonld-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">

        <CasesPageHeader locale="en" />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
          {CASOS.map((caso) => {
            const t = getCasoLocalized(caso, "en");
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
                      Visit site
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", margin: "0 0 0.75rem 0" }}>
                      What we did
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
                      Result
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

        <CasesFooterCta locale="en" />

      </div>
    </main>
  );
}
