
import Script from "next/script";
import TransitionLink from "@/components/TransitionLink";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { PROVINCIAS } from "./data";

export const metadata: Metadata = {
  title: "Desarrollo web por provincia en Argentina",
  description:
    "Desarrollo web y software a medida en las principales provincias de Argentina: landing pages, e-commerce y sistemas de gestión para industrias y negocios.",
  keywords: [
    "desarrollo web argentina",
    "desarrollo web por provincia",
    "agencia web argentina",
    "desarrollo web buenos aires",
    "desarrollo web cordoba",
    "desarrollo web mendoza",
    "desarrollo web neuquen",
    "UXnicorp",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/desarrollo-web",
    languages: {
      es: "https://www.uxnicorp.com.ar/desarrollo-web",
      "x-default": "https://www.uxnicorp.com.ar/desarrollo-web",
    },
  },
  openGraph: {
    title: "Desarrollo web por provincia en Argentina | UXnicorp",
    description:
      "Desarrollo web y software a medida en las principales provincias de Argentina: landing pages, e-commerce y sistemas de gestión para industrias y negocios.",
    url: "https://www.uxnicorp.com.ar/desarrollo-web",
    type: "website",
    locale: "es_AR",
    siteName: "UXnicorp",
    images: [{ url: "/og-image.jpg", width: 1343, height: 633, alt: "Desarrollo web por provincia — UXnicorp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo web por provincia en Argentina | UXnicorp",
    description:
      "Desarrollo web y software a medida en las principales provincias de Argentina: landing pages, e-commerce y sistemas de gestión para industrias y negocios.",
    images: ["/og-image.jpg"],
  },
};

export default function DesarrolloWebPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Desarrollo web por provincia — UXnicorp",
    url: "https://www.uxnicorp.com.ar/desarrollo-web",
    numberOfItems: PROVINCIAS.length,
    itemListElement: PROVINCIAS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: `Desarrollo web en ${p.nombre}`,
        url: `https://www.uxnicorp.com.ar/desarrollo-web/${p.slug}`,
        provider: { "@id": "https://www.uxnicorp.com.ar/#organization" },
        areaServed: { "@type": "State", name: p.nombre, addressCountry: "AR" },
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
        <Script id="desarrollo-web-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div style={{ borderRadius: "1.5rem", padding: "2.5rem 2.75rem", background: "rgba(224,166,216,0.45)", border: "1px solid rgba(255,255,255,0.6)", boxShadow: "0 2px 20px rgba(0,0,0,0.05)", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "0.75rem" }}>Desarrollo Web</p>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#111", margin: "0 0 1rem 0", lineHeight: 1.1 }}>
            Desarrollo web en Argentina
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151", maxWidth: "680px", margin: 0 }}>
            Desarrollamos landing pages, tiendas online y sistemas de gestión a medida para negocios e industrias de todo el país. Estrategia, diseño y código en un solo equipo, con proceso 100% remoto.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {PROVINCIAS.map((p) => (
            <TransitionLink key={p.slug} href={`/desarrollo-web/${p.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ borderRadius: "1.25rem", padding: "1.5rem 1.6rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", height: "100%" }}>
                <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#9040b0", letterSpacing: "0.04em" }}>Desarrollo web</span>
                <p style={{ fontWeight: 800, fontSize: "1rem", color: "#111", margin: "0.5rem 0 0.4rem 0", letterSpacing: "-0.02em" }}>{p.nombre}</p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#4a5568", margin: 0 }}>Landing pages, e-commerce y software a medida para industrias y negocios.</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "0.9rem", fontSize: "0.84rem", fontWeight: 600, color: "#974c67" }}>
                  Ver detalle
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </div>
            </TransitionLink>
          ))}
        </div>

        <p className="mt-8 text-[0.75rem] text-gray-500">
          Trabajamos también en Río Negro, La Pampa, Santa Cruz, Tierra del Fuego y otras provincias de Argentina. Si tu provincia no está en la lista, escribinos por WhatsApp y coordinamos igual.
        </p>
      </div>
      <Footer locale="es" />
    </main>
  );
}