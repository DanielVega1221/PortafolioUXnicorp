import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Concepto Web para Arquitectura",
  description:
    "Demo de concepto web para estudios de arquitectura: branding, tipografia, paleta de color y estructura UX. Como pensamos antes de diseñar.",
  keywords: [
    "web para arquitectos argentina",
    "diseño web estudio de arquitectura",
    "landing page arquitectura",
    "sitio web arquitecto",
    "ux ui arquitectura",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/conceptos/arquitectura",
    languages: {
      es: "https://www.uxnicorp.com.ar/conceptos/arquitectura",
      en: "https://www.uxnicorp.com.ar/en/conceptos/arquitectura",
      "x-default": "https://www.uxnicorp.com.ar/conceptos/arquitectura",
    },
  },
  openGraph: {
    title: "Concepto Web para Arquitectura | UXnicorp",
    description:
      "Demo de concepto web para estudios de arquitectura. Branding, tipografía, paleta de color y estructura UX antes de diseñar.",
    url: "https://www.uxnicorp.com.ar/conceptos/arquitectura",
    type: "website",
    locale: "es_AR",
    siteName: "UXnicorp",
    images: [
      {
        url: "/conceptos/arq/fondoARQ.webp",
        width: 1200,
        height: 630,
        alt: "Concepto web para estudio de arquitectura — UXnicorp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concepto Web para Arquitectura | UXnicorp",
    description:
      "Demo de concepto web para estudios de arquitectura: branding, tipografía, paleta de color, estructura UX y diseño antes de desarrollar.",
    images: ["/conceptos/arq/fondoARQ.webp"],
  },
};

export default function ArquitecturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="breadcrumb-arquitectura"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.uxnicorp.com.ar" },
              { "@type": "ListItem", position: 2, name: "Concepto Web para Arquitectura" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
