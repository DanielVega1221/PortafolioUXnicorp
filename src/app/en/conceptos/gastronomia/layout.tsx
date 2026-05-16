import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Web Concept for Restaurants & Food Businesses | UXnicorp",
  description:
    "A web concept demo for restaurants and food businesses: branding, digital menu, reservations and UX structure. An example of how we think before we design.",
  keywords: [
    "restaurant website design",
    "web design food business",
    "restaurant landing page",
    "digital menu restaurant",
    "bar website design",
    "ux ui gastronomy",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/en/conceptos/gastronomia",
    languages: {
      es: "https://www.uxnicorp.com.ar/conceptos/gastronomia",
      en: "https://www.uxnicorp.com.ar/en/conceptos/gastronomia",
      "x-default": "https://www.uxnicorp.com.ar/conceptos/gastronomia",
    },
  },
  openGraph: {
    title: "Web Concept for Restaurants & Food Businesses | UXnicorp",
    description:
      "A web concept demo for restaurants. Branding, digital menu and UX structure before design.",
    url: "https://www.uxnicorp.com.ar/en/conceptos/gastronomia",
    type: "website",
    locale: "en_US",
    siteName: "UXnicorp",
    images: [
      {
        url: "/conceptos/gastronomia/fondo.webp",
        width: 1200,
        height: 630,
        alt: "Web concept for restaurant — UXnicorp",
      },
    ],
  },
};

export default function GastronomiaENLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
