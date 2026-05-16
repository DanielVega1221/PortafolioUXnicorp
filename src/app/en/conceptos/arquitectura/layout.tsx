import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Web Concept for Architecture Studios | UXnicorp",
  description:
    "A web concept demo for architecture studios: branding, typography, color palette and UX structure. An example of how we think before we design.",
  keywords: [
    "website for architects",
    "web design architecture studio",
    "architecture landing page",
    "architect website",
    "ux ui architecture",
  ],
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
      "A web concept demo for architecture studios. Branding, typography and UX structure before design.",
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
};

export default function ArquitecturaENLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
