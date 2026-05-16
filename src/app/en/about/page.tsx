import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import NosotrosPageHeader from "@/components/nosotros/NosotrosPageHeader";
import FilosofiaSection from "@/components/nosotros/FilosofiaSection";
import LaParteHumanaSection from "@/components/nosotros/LaParteHumanaSection";
import NosotrosCta from "@/components/nosotros/NosotrosCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Story | UXnicorp — Web Development Argentina",
  description:
    "Learn how UXnicorp was born, the philosophy behind our work and why we chose to work with honesty and closeness alongside every client.",
  keywords: [
    "uxnicorp our story",
    "web development agency argentina philosophy",
    "about uxnicorp",
    "honest web development argentina",
    "web development team argentina",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/en/about",
    languages: {
      en: "https://www.uxnicorp.com.ar/en/about",
      es: "https://www.uxnicorp.com.ar/nosotros",
      "x-default": "https://www.uxnicorp.com.ar/nosotros",
    },
  },
  openGraph: {
    title: "Our Story | UXnicorp — Web Development Argentina",
    description:
      "How UXnicorp was born, the philosophy behind our work and why we chose honesty and closeness.",
    url: "https://www.uxnicorp.com.ar/en/about",
    type: "website",
    locale: "en_US",
    siteName: "UXnicorp",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UXnicorp — Our Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | UXnicorp",
    description:
      "How UXnicorp was born and the philosophy behind every project.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Our Story — UXnicorp",
    description:
      "How UXnicorp was born, the philosophy behind our work and why we chose to work with honesty and closeness.",
    url: "https://www.uxnicorp.com.ar/en/about",
    inLanguage: "en-US",
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
        id="about-jsonld-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">
        <NosotrosPageHeader locale="en" />
      </div>

      <FilosofiaSection locale="en" />
      <LaParteHumanaSection locale="en" />
      <NosotrosCta locale="en" />
      <Footer locale="en" />
    </main>
  );
}
