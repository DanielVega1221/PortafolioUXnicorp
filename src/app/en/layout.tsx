import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | UXnicorp",
    default: "UXnicorp — Web Development & UX Agency from Argentina",
  },
  description:
    "We design and build websites around the business behind them. Design, code and strategy with a real focus on what your business needs.",
  keywords: [
    "landing page development argentina",
    "landing page design agency",
    "landing page for business",
    "affordable landing page development",
    "ecommerce development argentina",
    "custom online store development",
    "ecommerce without shopify",
    "online store no commissions",
    "erp system development argentina",
    "crm development agency",
    "custom inventory system",
    "invoicing system web",
    "stock management software",
    "custom web management system",
    "custom software argentina",
    "corporate website argentina",
    "institutional website design",
    "business website development",
    "web development agency argentina",
    "ux ui design agency argentina",
    "web development services argentina",
    "full stack development argentina",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/en",
    languages: {
      es: "https://www.uxnicorp.com.ar/",
      en: "https://www.uxnicorp.com.ar/en",
      "x-default": "https://www.uxnicorp.com.ar/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_AR"],
    url: "https://www.uxnicorp.com.ar/en",
    siteName: "UXnicorp",
    title: "UXnicorp — Web Development & UX Agency from Argentina",
    description:
      "Web design and development with purpose. We understand your business before designing. Clear pricing, direct communication, no middlemen.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UXnicorp — Web Development Agency Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UXnicorp — Web Development & UX Agency from Argentina",
    description:
      "Web design and development with purpose. We understand your business before designing. Clear pricing, direct communication, no middlemen.",
    images: ["/og-image.png"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
