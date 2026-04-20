import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | UXnicorp",
    default: "UXnicorp — Web Development & UX Agency from Argentina",
  },
  description:
    "Web development from Argentina: landing pages, online stores, management systems (ERP, CRM) and corporate websites. Scoped, designed, and built from scratch.",
  keywords: [
    // Landing pages
    "landing page development argentina",
    "landing page design agency",
    "landing page for business",
    "affordable landing page development",
    // E-commerce
    "ecommerce development argentina",
    "custom online store development",
    "ecommerce without shopify",
    "online store no commissions",
    // Management systems
    "erp system development argentina",
    "crm development agency",
    "custom inventory system",
    "invoicing system web",
    "stock management software",
    "custom web management system",
    "custom software argentina",
    // Corporate websites
    "corporate website argentina",
    "institutional website design",
    "business website development",
    // Agency
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
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_AR",
    url: "https://www.uxnicorp.com.ar/en",
    siteName: "UXnicorp",
    title: "UXnicorp — Web Development & UX Agency from Argentina",
    description:
      "Landing pages, online stores, ERP/CRM systems, and corporate websites. Real projects, measurable results.",
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
      "Landing pages, online stores, ERP/CRM systems, and corporate websites. Real projects, measurable results.",
    images: ["/og-image.png"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
