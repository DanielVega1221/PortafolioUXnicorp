import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | UXnicorp",
    default: "UXnicorp — Web Dev & UX Agency in Argentina",
  },
  description:
    "We design and build websites around the business behind them. Design, code and strategy with a real focus on what your business needs.",
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
    title: "UXnicorp — Web Dev & UX Agency in Argentina",
    description:
      "Web design and development with purpose. We understand your business before designing. Clear pricing, direct communication, no middlemen.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1343,
        height: 633,
        alt: "UXnicorp — Web Development Agency Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UXnicorp — Web Dev & UX Agency in Argentina",
    description:
      "Web design and development with purpose. We understand your business before designing. Clear pricing, direct communication, no middlemen.",
    images: ["/og-image.jpg"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
