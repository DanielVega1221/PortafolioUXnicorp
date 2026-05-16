import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import NosotrosPageHeader from "@/components/nosotros/NosotrosPageHeader";
import FilosofiaSection from "@/components/nosotros/FilosofiaSection";
import LaParteHumanaSection from "@/components/nosotros/LaParteHumanaSection";
import NosotrosCta from "@/components/nosotros/NosotrosCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nuestra Historia | UXnicorp — Desarrollo Web Argentina",
  description:
    "Conocé cómo nació UXnicorp, la filosofía que nos mueve y por qué elegimos trabajar con honestidad y cercanía junto a cada cliente.",
  keywords: [
    "uxnicorp historia",
    "agencia desarrollo web argentina filosofia",
    "quienes somos uxnicorp",
    "desarrollo web honesto argentina",
    "filosofia trabajo freelance argentina",
    "equipo desarrollo web argentina",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/nosotros",
    languages: {
      es: "https://www.uxnicorp.com.ar/nosotros",
      en: "https://www.uxnicorp.com.ar/en/about",
      "x-default": "https://www.uxnicorp.com.ar/nosotros",
    },
  },
  openGraph: {
    title: "Nuestra Historia | UXnicorp — Desarrollo Web Argentina",
    description:
      "Cómo nació UXnicorp, la filosofía que nos mueve y por qué elegimos trabajar con honestidad y cercanía.",
    url: "https://www.uxnicorp.com.ar/nosotros",
    type: "website",
    locale: "es_AR",
    siteName: "UXnicorp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UXnicorp — Nuestra Historia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestra Historia | UXnicorp",
    description:
      "Cómo nació UXnicorp y la filosofía detrás de cada proyecto.",
    images: ["/og-image.png"],
  },
};

export default function NosotrosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Nuestra Historia — UXnicorp",
    description:
      "Cómo nació UXnicorp, la filosofía que nos mueve y por qué elegimos trabajar con honestidad y cercanía.",
    url: "https://www.uxnicorp.com.ar/nosotros",
    inLanguage: "es-AR",
    publisher: {
      "@type": "Organization",
      name: "UXnicorp",
      url: "https://www.uxnicorp.com.ar",
      logo: {
        "@type": "ImageObject",
        url: "https://www.uxnicorp.com.ar/brand/logo.png",
      },
    },
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
        id="nosotros-jsonld-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">
        <NosotrosPageHeader locale="es" />
      </div>

      <FilosofiaSection locale="es" />
      <LaParteHumanaSection locale="es" />
      <NosotrosCta locale="es" />
      <Footer locale="es" />
    </main>
  );
}
