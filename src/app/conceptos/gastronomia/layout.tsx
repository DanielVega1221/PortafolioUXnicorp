import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Concepto Web para Gastronomía",
  description:
    "Demo de concepto web para restaurantes y negocios gastronómicos: branding, menú digital, reservas y estructura UX. Como pensamos antes de diseñar.",
  keywords: [
    "web para restaurantes argentina",
    "diseño web gastronomía",
    "landing page restaurante",
    "menú digital restaurante",
    "sitio web bar argentina",
    "ux ui gastronomía",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/conceptos/gastronomia",
    languages: {
      es: "https://www.uxnicorp.com.ar/conceptos/gastronomia",
      en: "https://www.uxnicorp.com.ar/en/conceptos/gastronomia",
      "x-default": "https://www.uxnicorp.com.ar/conceptos/gastronomia",
    },
  },
  openGraph: {
    title: "Concepto Web para Gastronomía | UXnicorp",
    description:
      "Demo de concepto web para restaurantes y negocios gastronómicos. Branding, menú digital, reservas y estructura UX antes de diseñar.",
    url: "https://www.uxnicorp.com.ar/conceptos/gastronomia",
    type: "website",
    locale: "es_AR",
    siteName: "UXnicorp",
    images: [
      {
        url: "/conceptos/gastronomia/fondo.webp",
        width: 1200,
        height: 630,
        alt: "Concepto web para restaurante — UXnicorp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concepto Web para Gastronomía | UXnicorp",
    description:
      "Demo de concepto web para restaurantes y negocios gastronómicos: branding, menú digital, reservas, estructura UX y diseño antes de desarrollar.",
    images: ["/conceptos/gastronomia/fondo.webp"],
  },
};

export default function GastronomiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="breadcrumb-gastronomia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.uxnicorp.com.ar" },
              { "@type": "ListItem", position: 2, name: "Concepto Web para Gastronomía" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
