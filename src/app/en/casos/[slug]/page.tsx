import Script from "next/script";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASOS, getCaso, getCasoLocalized } from "@/app/casos/data";
import { truncate } from "@/lib/truncate";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return CASOS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) return { robots: { index: false, follow: false } };
  const en = caso.en;
  const tipo = en?.tipo ?? caso.tipo;
  const canonicalUrl = `https://www.uxnicorp.com.ar/en/casos/${slug}`;
  return {
    title: `${caso.cliente}: ${tipo}`,
    description: truncate(en?.problema ?? caso.problema, 157),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "es": `https://www.uxnicorp.com.ar/casos/${slug}`,
        "en": canonicalUrl,
        "x-default": `https://www.uxnicorp.com.ar/casos/${slug}`,
      },
    },
    openGraph: {
      title: `${caso.cliente}: ${tipo} | UXnicorp`,
      description: truncate(en?.problema ?? caso.problema, 157),
      url: canonicalUrl,
      type: "article",
      locale: "en_US",
      siteName: "UXnicorp",
      images: [
        {
          url: caso.imagen || "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${caso.cliente}: UXnicorp case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caso.cliente}: ${tipo} | UXnicorp`,
      description: truncate(en?.problema ?? caso.problema, 157),
      images: [caso.imagen || "/og-image.png"],
    },
  };
}

export default async function CasoEnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caso = getCaso(slug);
  if (!caso) notFound();

  const loc = getCasoLocalized(caso, "en");

  const otherCases = CASOS.filter((c) => c.slug !== caso.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${caso.cliente}: ${loc.tipo}`,
      description: loc.problema,
      url: `https://www.uxnicorp.com.ar/en/casos/${caso.slug}`,
      author: { "@type": "Organization", name: "UXnicorp" },
      publisher: { "@type": "Organization", name: "UXnicorp" },
      about: { "@type": "Thing", name: loc.industria },
      keywords: caso.stack.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uxnicorp.com.ar/en" },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.uxnicorp.com.ar/en/casos" },
        { "@type": "ListItem", position: 3, name: caso.cliente, item: `https://www.uxnicorp.com.ar/en/casos/${caso.slug}` },
      ],
    },
  ];

  return (
    <>
      <main
        style={{
          background:
            "radial-gradient(ellipse 90% 48% at 72% 20%, rgba(224,166,216,0.70) 0%, rgba(202,222,249,0.72) 38%, rgba(254,224,214,0.66) 72%, rgba(255,255,255,0) 100%), #ffffff",
          minHeight: "100vh",
        }}
      >
        <Script
          id={`caso-en-jsonld-${caso.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mx-auto max-w-[860px] px-6 py-20 md:px-8 md:py-28">

          <nav aria-label="Breadcrumb" style={{ marginBottom: "2.5rem" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: "0.5rem", listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TransitionLink href="/en" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#F37AA6", textDecoration: "none" }}>
                  Home
                </TransitionLink>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TransitionLink href="/en/casos" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#F37AA6", textDecoration: "none" }}>
                  Case Studies
                </TransitionLink>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
              <li>
                <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>{caso.cliente}</span>
              </li>
            </ol>
          </nav>

          <div
            style={{
              borderRadius: "1.5rem",
              padding: "2.5rem 2.75rem",
              background: caso.bg,
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
              marginBottom: "2rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              <span style={{
                fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                color: caso.acento, background: "rgba(255,255,255,0.6)", padding: "0.3rem 0.7rem",
                borderRadius: "0.5rem",
              }}>
                {loc.tipo}
              </span>
              <span style={{
                fontSize: "0.69rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
                color: caso.acento, background: "rgba(255,255,255,0.4)", padding: "0.3rem 0.7rem",
                borderRadius: "0.5rem",
              }}>
                {loc.industria}
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#111",
                margin: "0 0 0.75rem 0",
                lineHeight: 1.1,
              }}
            >
              {caso.cliente}
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151", maxWidth: "640px", margin: 0 }}>
              {loc.contexto}
            </p>
          </div>

          {caso.imagen && (
            <div style={{ borderRadius: "1.25rem", overflow: "hidden", marginBottom: "1.25rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <Image
                src={caso.imagen}
                alt={`${caso.cliente} project`}
                width={860}
                height={490}
                priority
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}

          <section
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              backdropFilter: "blur(8px)",
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: caso.acento, marginBottom: "0.75rem" }}>
              The Problem
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#374151", margin: 0 }}>
              {loc.problema}
            </p>
          </section>

          <section
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              backdropFilter: "blur(8px)",
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: caso.acento, marginBottom: "0.75rem" }}>
              Analysis
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#374151", margin: 0 }}>
              {loc.queAnalizamos}
            </p>
          </section>

          <section
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              backdropFilter: "blur(8px)",
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: caso.acento, marginBottom: "1rem" }}>
              What We Did
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {loc.queHicimos.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.88rem", color: "#1a1a1a", lineHeight: 1.5 }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "0.1rem" }}>
                    <circle cx="7.5" cy="7.5" r="6.5" fill={caso.acento} fillOpacity="0.15" />
                    <path d="M4.75 7.5l2 2L10.25 5.5" stroke={caso.acento} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            style={{
              borderRadius: "1.25rem",
              padding: "2rem 2.25rem",
              background: caso.bg,
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              backdropFilter: "blur(8px)",
              marginBottom: "1.75rem",
            }}
          >
            <p style={{ fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: caso.acento, marginBottom: "0.75rem" }}>
              Result
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#374151", margin: "0 0 1.25rem 0" }}>
              {loc.resultado}
            </p>
            {caso.linkSitio && (
              <a
                href={caso.linkSitio}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.55rem 1.1rem",
                  borderRadius: "0.75rem",
                  background: "rgba(255,255,255,0.7)",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  color: caso.acento,
                  textDecoration: "none",
                }}
              >
                View live site
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                  <path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </section>

          <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.69rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.75rem" }}>
              Stack
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {caso.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "0.35rem 0.8rem",
                    borderRadius: "0.5rem",
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    color: "#374151",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

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
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.3rem 0", letterSpacing: "-0.03em" }}>
                Want results like this for your project?
              </h2>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>
                Tell us what you need and we will put together a custom plan.
              </p>
            </div>
            <TransitionLink
              href="/en#contact"
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
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </TransitionLink>
          </div>

          {otherCases.length > 0 && (
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.875rem" }}>
                Other Case Studies
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {otherCases.map((oc) => (
                  <TransitionLink
                    key={oc.slug}
                    href={`/en/casos/${oc.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.55rem 1.1rem",
                      borderRadius: "0.75rem",
                      background: oc.bg,
                      border: "1px solid rgba(255,255,255,0.65)",
                      fontSize: "0.84rem",
                      fontWeight: 600,
                      color: "#111",
                      textDecoration: "none",
                    }}
                  >
                    {oc.cliente}
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                      <path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke={oc.acento} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </TransitionLink>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}
