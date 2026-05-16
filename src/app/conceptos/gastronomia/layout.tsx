import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concepto Web para Gastronomía | UXnicorp",
  description:
    "Demo de concepto web para restaurantes y negocios gastronómicos: branding, menú digital, reservas y estructura UX. Un ejemplo de cómo pensamos antes de diseñar.",
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
      "Demo de concepto web para restaurantes. Branding, menú digital y estructura UX antes de diseñar.",
    url: "https://www.uxnicorp.com.ar/conceptos/gastronomia",
    type: "website",
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
      "Demo de concepto web para restaurantes. Branding y estructura UX.",
    images: ["/conceptos/gastronomia/fondo.webp"],
  },
};

export default function GastronomiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
