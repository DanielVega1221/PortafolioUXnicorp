import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concepto Web para Arquitectura | UXnicorp",
  description:
    "Demo de concepto web para estudios de arquitectura: branding, tipografía, paleta de color y estructura UX. Un ejemplo de cómo pensamos antes de diseñar.",
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
      "Demo de concepto web para estudios de arquitectura. Branding, tipografía y estructura UX antes de diseñar.",
    url: "https://www.uxnicorp.com.ar/conceptos/arquitectura",
    type: "website",
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
      "Demo de concepto web para estudios de arquitectura. Branding y estructura UX.",
    images: ["/conceptos/arq/fondoARQ.webp"],
  },
};

export default function ArquitecturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
