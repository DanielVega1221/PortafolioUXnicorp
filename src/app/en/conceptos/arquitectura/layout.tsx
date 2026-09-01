import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Web Concept for Architecture Studios",
  description:
    "A web concept demo for architecture studios: branding, typography, color palette and UX structure. An example of how we think before we design.",
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/en/conceptos/arquitectura",
    languages: {
      es: "https://www.uxnicorp.com.ar/conceptos/arquitectura",
      en: "https://www.uxnicorp.com.ar/en/conceptos/arquitectura",
      "x-default": "https://www.uxnicorp.com.ar/conceptos/arquitectura",
    },
  },
  openGraph: {
    title: "Web Concept for Architecture Studios | UXnicorp",
    description:
      "A web concept demo for architecture studios: branding, typography, color palette, UX structure and design before development.",
    url: "https://www.uxnicorp.com.ar/en/conceptos/arquitectura",
    type: "website",
    locale: "en_US",
    siteName: "UXnicorp",
    images: [
      {
        url: "/conceptos/arq/fondoARQ.webp",
        width: 1200,
        height: 630,
        alt: "Web concept for architecture studio — UXnicorp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Concept for Architecture Studios | UXnicorp",
    description:
      "A web concept demo for architecture studios: branding, typography, color palette, UX structure and design before development.",
    images: ["/conceptos/arq/fondoARQ.webp"],
  },
};

export default function ArquitecturaENLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Script
        id="breadcrumb-arquitectura-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uxnicorp.com.ar/en" },
              { "@type": "ListItem", position: 2, name: "Web Concept for Architecture" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
