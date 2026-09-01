
import Script from "next/script";
import TransitionLink from "@/components/TransitionLink";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FaqBlock from "@/components/FaqBlock";
import { PROVINCIAS, SERVICIO_LINKS, INDUSTRIA_LINKS } from "../data";

export function generateStaticParams() {
  return PROVINCIAS.map((p) => ({ provincia: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provincia: string }>;
}): Promise<Metadata> {
  const { provincia } = await params;
  const p = PROVINCIAS.find((x) => x.slug === provincia);
  if (!p) return { robots: { index: false, follow: false } };
  const canonicalUrl = `https://www.uxnicorp.com.ar/desarrollo-web/${p.slug}`;
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "es": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: p.seoTitle + " | UXnicorp",
      description: p.seoDescription,
      url: canonicalUrl,
      type: "website",
      locale: "es_AR",
      siteName: "UXnicorp",
      images: [
        {
          url: "/og-image.jpg",
          width: 1343,
          height: 633,
          alt: p.seoTitle + " — UXnicorp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: p.seoTitle + " | UXnicorp",
      description: p.seoDescription,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ProvinciaPage({
  params,
}: {
  params: Promise<{ provincia: string }>;
}) {
  const { provincia } = await params;
  const p = PROVINCIAS.find((x) => x.slug === provincia);
  if (!p) notFound();

  const url = `https://www.uxnicorp.com.ar/desarrollo-web/${p.slug}`;
  const industrias = INDUSTRIA_LINKS.filter((i) => p.industrias.includes(i.slug));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Desarrollo web en ${p.nombre}`,
      description: p.seoDescription,
      url,
      provider: { "@id": "https://www.uxnicorp.com.ar/#organization" },
      areaServed: { "@type": "State", name: p.nombre, addressCountry: "AR" },
      serviceType: `Desarrollo web en ${p.nombre}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Desarrollo Web",
        itemListElement: SERVICIO_LINKS.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.nombre, description: s.texto },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.uxnicorp.com.ar" },
        { "@type": "ListItem", position: 2, name: "Desarrollo web", item: "https://www.uxnicorp.com.ar/desarrollo-web" },
        { "@type": "ListItem", position: 3, name: p.nombre, item: url },
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
          id={`provincia-${p.slug}-jsonld`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">

          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
            <TransitionLink href="/" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#974c67", textDecoration: "none" }}>Inicio</TransitionLink>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <TransitionLink href="/desarrollo-web" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#974c67", textDecoration: "none" }}>Desarrollo web</TransitionLink>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>{p.nombre}</span>
          </nav>

          <div style={{ borderRadius: "1.5rem", padding: "2.5rem 2.75rem", background: "rgba(224,166,216,0.45)", border: "1px solid rgba(255,255,255,0.6)", boxShadow: "0 2px 20px rgba(0,0,0,0.05)", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "0.75rem" }}>Desarrollo Web</p>
            <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#111", margin: "0 0 1rem 0", lineHeight: 1.1 }}>
              Desarrollo web en {p.nombre}
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151", maxWidth: "680px", margin: 0 }}>
              {p.intro}
            </p>
          </div>

          <div style={{ borderRadius: "1.5rem", padding: "1.6rem 1.9rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "0.6rem" }}>Por qué en {p.nombre}</p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#374151", margin: 0 }}>{p.localInsight}</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {SERVICIO_LINKS.map((s) => (
              <TransitionLink
                key={s.slug}
                href={`/servicios/${s.slug}`}
                style={{ display: "block", textDecoration: "none" }}
              >
                <div style={{ borderRadius: "1.5rem", padding: "1.6rem 1.9rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", transition: "transform 0.15s ease", }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <p style={{ fontWeight: 700, fontSize: "1rem", color: "#111", margin: 0 }}>{s.nombre}</p>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#9040b0" }}>{s.precio}</span>
                  </div>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#4a5568", margin: 0 }}>{s.texto}</p>
                </div>
              </TransitionLink>
            ))}
          </div>

          <div style={{ borderRadius: "1.5rem", padding: "2rem 2.25rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "1.25rem" }}>Industrias que acompañamos</p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#374151", margin: "0 0 1.25rem 0" }}>
              En {p.nombre} trabajamos sobre todo con {p.mainSectors}. Cada proyecto arranca entendiendo cómo funciona tu negocio hoy, antes de proponer cualquier tecnología.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {industrias.map((ind) => (
                <TransitionLink key={ind.slug} href={`/servicios/sistemas-gestion/${ind.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 1.1rem", borderRadius: "0.75rem", background: "rgba(224,166,216,0.45)", border: "1px solid rgba(255,255,255,0.65)", fontSize: "0.84rem", fontWeight: 600, color: "#111", textDecoration: "none" }}>
                  {ind.nombre}
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="#9040b0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </TransitionLink>
              ))}
            </div>
          </div>

          <div style={{ borderRadius: "1.5rem", padding: "2rem 2.25rem", background: "linear-gradient(135deg, #9040b0 0%, #E0A6D8 100%)", boxShadow: "0 8px 40px rgba(144,64,176,0.22)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.3rem 0", letterSpacing: "-0.03em" }}>
                ¿Tenés un negocio en {p.nombre} y querés una web que trabaje?
              </h2>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>Contanos qué necesitás y te armamos una propuesta a medida.</p>
            </div>
            <TransitionLink href="/#contacto" style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.7rem 1.5rem", borderRadius: "0.875rem", background: "#fff", color: "#9040b0", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}>
              Pedir presupuesto
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </TransitionLink>
          </div>

          <FaqBlock items={p.faq} accent="#9040b0" title={`Preguntas sobre desarrollo web en ${p.nombre}`} description="Respondemos sin vueltas lo que más nos preguntan sobre este servicio." />

          <p className="mt-8 text-[0.75rem] text-gray-500">
            * Cada negocio es distinto. Siempre hacemos una primera charla gratuita para entender qué necesita tu empresa en {p.nombre} antes de presupuestar.
          </p>

        </div>
      </main>
      <Footer locale="es" />
    </>
  );
}