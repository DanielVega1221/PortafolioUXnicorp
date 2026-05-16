import React from "react";
import Script from "next/script";
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
      es: "https://www.uxnicorp.com.ar",
      en: "https://www.uxnicorp.com.ar/en",
      "x-default": "https://www.uxnicorp.com.ar",
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
  return (
    <>
      <Script
        id="organization-jsonld-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "UXnicorp",
              url: "https://www.uxnicorp.com.ar",
              logo: "https://www.uxnicorp.com.ar/brand/logo.png",
              description:
                "Web development studio from Argentina. We understand the business before opening the editor. Design, code and strategy in one team.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
                addressRegion: "Buenos Aires",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["Spanish", "English"],
              },
              sameAs: [],
              serviceArea: {
                "@type": "Place",
                name: "Argentina, Latin America, Spain",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Landing Page",
                      description:
                        "Custom landing pages and corporate websites for businesses. UX design, copywriting and development included.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-commerce",
                      description:
                        "Custom online stores without Shopify or third-party commissions. Catalog, payments and your own admin panel.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Management System",
                      description:
                        "ERP, CRM, inventory control and web invoicing systems for businesses. Custom software, no generic templates.",
                    },
                  },
                ],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "UXnicorp",
              url: "https://www.uxnicorp.com.ar",
              inLanguage: ["es", "en"],
              description:
                "Web development in Argentina: landing pages, online stores, management systems and corporate websites.",
            },
          ]),
        }}
      />
      {children}
    </>
  );
}
