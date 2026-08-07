import type { Metadata } from "next";
import Script from "next/script";
import TransitionLink from "@/components/TransitionLink";
import { CASOS, getCasoLocalized } from "@/app/casos/data";
import CasesPageHeader from "@/components/cases/CasesPageHeader";
import CasesFooterCta from "@/components/cases/CasesFooterCta";
import CaseMockup from "@/components/cases/CaseMockup";
import CheckIcon from "@/components/cases/CheckIcon";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Real Projects: Web Development from Argentina",
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
    title: "Real Projects: Web Development from Argentina | UXnicorp",
    description:
      "6 real web development projects from Argentina: landing pages, online stores, management systems and corporate websites. No mockups, no demos.",
    url: "https://www.uxnicorp.com.ar/en/casos",
    type: "website",
    locale: "en_US",
    siteName: "UXnicorp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UXnicorp: Real web development projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Projects: Web Development from Argentina | UXnicorp",
    description:
      "6 real web development projects from Argentina: landing pages, online stores, management systems and corporate websites. Verifiable results.",
    images: ["/og-image.png"],
  },
};

export default function CasosEnPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Case Studies: UXnicorp",
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
          url: `https://www.uxnicorp.com.ar/en/casos/${caso.slug}`,
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
          {CASOS.map((caso, i) => {
            const t = getCasoLocalized(caso, "en");
            return (
            <TransitionLink
              key={caso.slug}
              href={`/en/casos/${caso.slug}`}
              className="caso-card"
              style={{
                borderRadius: "1.5rem",
                background: caso.bg,
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <CaseMockup src={caso.imagen} alt={caso.cliente} priority={i === 0} />

              <div
                className="caso-card-content"
                style={{
                  padding: "1.75rem 2rem",
                  display: "grid",
                  gap: "1.75rem",
                  alignItems: "start",
                  flex: 1,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "0.69rem",
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
                        fontSize: "0.69rem",
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
                  <h2
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
                  </h2>
                  <p style={{ fontSize: "0.84rem", lineHeight: 1.65, color: "#4a5568", margin: 0 }}>
                    {t.problema}
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <p style={{ fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", margin: "0 0 0.75rem 0" }}>
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
                    <p style={{ fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: caso.acento, margin: "0 0 0.45rem 0" }}>
                      Result
                    </p>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.6, color: "#111", margin: 0 }}>
                      {t.resultado}
                    </p>
                  </div>
                </div>
              </div>
            </TransitionLink>
            );
          })}
        </div>

        <CasesFooterCta locale="en" />

      </div>

      <Footer locale="en" />

    </main>
  );
}
