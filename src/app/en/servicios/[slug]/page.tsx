import React from "react";
import TransitionLink from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICIOS_EN, getServicioEN } from "../data";
import { PriceDisplay } from "@/app/servicios/[slug]/PriceDisplay";
import { CurrencyToggle } from "@/app/servicios/CurrencyToggle";

export function generateStaticParams() {
  return SERVICIOS_EN.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicioEN(slug);
  if (!s) return {};
  const canonicalUrl = `https://www.uxnicorp.com.ar/en/servicios/${slug}`;
  return {
    title: s.seo.title,
    description: s.seo.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `https://www.uxnicorp.com.ar/servicios/${slug}`,
        en: canonicalUrl,
      },
    },
    openGraph: {
      title: s.seo.title,
      description: s.seo.description,
      url: canonicalUrl,
      type: "website",
      locale: "en_US",
      siteName: "UXnicorp",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${s.nombre} — UXnicorp`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: s.seo.title,
      description: s.seo.description,
      images: ["/og-image.png"],
    },
  };
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: "0.1rem" }}>
      <circle cx="7.5" cy="7.5" r="6.5" fill={color} fillOpacity="0.15" />
      <path d="M4.75 7.5l2 2L10.25 5.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: "0.1rem" }}>
      <path d="M5 5l5 5M10 5l-5 5" stroke="rgba(0,0,0,0.3)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default async function EnServicioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getServicioEN(slug);
  if (!s) notFound();

  const siblings = SERVICIOS_EN.filter((x) => x.slug !== s.slug);

  return (
    <main
      style={{
        background:
          "radial-gradient(ellipse 90% 48% at 72% 20%, rgba(224,166,216,0.70) 0%, rgba(202,222,249,0.72) 38%, rgba(254,224,214,0.66) 72%, rgba(255,255,255,0) 100%), #ffffff",
        minHeight: "100vh",
      }}
    >
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">

        {/* Breadcrumb + toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <TransitionLink href="/en" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#F37AA6", textDecoration: "none" }}>
              Home
            </TransitionLink>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <TransitionLink href="/en/servicios" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#F37AA6", textDecoration: "none" }}>
              Services
            </TransitionLink>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>{s.nombre}</span>
          </div>
          <CurrencyToggle />
        </div>

        {/* Hero */}
        <div
          style={{
            borderRadius: "1.5rem",
            padding: "2.5rem 2.75rem",
            background: s.bg,
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: s.acento, marginBottom: "0.75rem" }}>
            Service
          </p>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#111",
              margin: "0 0 1rem 0",
              lineHeight: 1.1,
            }}
          >
            {s.nombre}
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151", maxWidth: "640px", margin: "0 0 1.5rem 0" }}>
            {s.descripcion}
          </p>
          <PriceDisplay
            precioUSD={s.precioUSD}
            precioARS={s.precioARS}
            tiempo={s.tiempo}
            acento={s.acento}
          />
        </div>

        {/* Process + Includes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
            marginBottom: "2rem",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Process */}
          <div
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              backdropFilter: "blur(8px)",
            }}
          >
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: s.acento, marginBottom: "1.25rem" }}>
              Process
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {s.etapas.map((e) => (
                <div key={e.num} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "1.75rem",
                      height: "1.75rem",
                      borderRadius: "0.5rem",
                      background: "rgba(255,255,255,0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      color: s.acento,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {e.num}
                  </span>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#111", margin: "0 0 0.2rem 0" }}>{e.titulo}</p>
                    <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "#4a5568", margin: 0 }}>{e.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Includes / Excludes */}
          <div
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              backdropFilter: "blur(8px)",
            }}
          >
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: s.acento, marginBottom: "1.25rem" }}>
              Includes
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem 0", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {s.incluye.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.84rem", color: "#1a1a1a", lineHeight: 1.45 }}>
                  <CheckIcon color={s.acento} />
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.32)", marginBottom: "0.75rem" }}>
              Does not include
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {s.noIncluye.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.8rem", color: "rgba(0,0,0,0.42)", lineHeight: 1.45 }}>
                  <CrossIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            borderRadius: "1.5rem",
            padding: "2rem 2.25rem",
            background: "linear-gradient(135deg, #F37AA6 0%, #E0A6D8 100%)",
            boxShadow: "0 8px 40px rgba(243,122,166,0.22)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.3rem 0", letterSpacing: "-0.03em" }}>
              Interested in this service?
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Tell us about your project and we&apos;ll get back to you with a quote.
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
            Request a quote
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Other services */}
        {siblings.length > 0 && (
          <div>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "1rem" }}>
              Other services
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {siblings.map((sib) => (
                <TransitionLink
                  key={sib.slug}
                  href={`/en/servicios/${sib.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.1rem 1.5rem",
                    borderRadius: "1rem",
                    background: sib.bg,
                    border: "1px solid rgba(255,255,255,0.6)",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111" }}>{sib.nombre}</span>
                    <span style={{ fontSize: "0.8rem", color: "#6b7280", marginLeft: "0.75rem" }}>{sib.tagline}</span>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: "#9ca3af", flexShrink: 0 }}>
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </TransitionLink>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
