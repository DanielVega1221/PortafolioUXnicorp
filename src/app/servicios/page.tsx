
import Script from "next/script";
import type { Metadata } from "next";
import { SERVICIOS } from "./data";
import { ServicioCard } from "./ServicioCard";
import ServicesFooterCta from "@/components/services/ServicesFooterCta";
import ServicesPageHeader from "@/components/services/ServicesPageHeader";
import ServiciosExtrasSection from "@/components/services/ServiciosExtrasSection";
import IndustriaLinks from "@/components/services/IndustriaLinks";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Landing Pages, E-commerce y Sistemas de Gestión",
  description:
    "Landing pages de conversión, tiendas online y sistemas de gestión a medida. Diseño, desarrollo y estrategia en un solo equipo.",
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/servicios",
    languages: {
      es: "https://www.uxnicorp.com.ar/servicios",
      en: "https://www.uxnicorp.com.ar/en/servicios",
      "x-default": "https://www.uxnicorp.com.ar/servicios",
    },
  },
  openGraph: {
    title: "Landing Pages, E-commerce y Sistemas de Gestión | UXnicorp",
    description:
      "Landing pages de conversión, tiendas online y sistemas de gestión a medida. Diseño, desarrollo y estrategia en un solo equipo. Conocé precios, tiempos y qué incluye cada servicio.",
    url: "https://www.uxnicorp.com.ar/servicios",
    type: "website",
    locale: "es_AR",
    siteName: "UXnicorp",
    images: [
      {
        url: "/og-image.jpg",
        width: 1343,
        height: 633,
        alt: "Servicios UXnicorp — Desarrollo Web Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Pages, E-commerce y Sistemas de Gestión | UXnicorp",
    description:
      "Landing pages de conversión, tiendas online y sistemas de gestión a medida. Diseño, desarrollo y estrategia en un solo equipo. Sin intermediarios ni costos ocultos.",
    images: ["/og-image.jpg"],
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

        <IndustriaLinks locale="es" />

        <ServiciosExtrasSection locale="es" />

        <ServicesFooterCta locale="es" />

      </div>

      <Footer locale="es" />

    </main>
  );
}
 
