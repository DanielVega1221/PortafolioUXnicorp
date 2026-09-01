import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LenisProvider from "@/components/LenisProvider";
import TransitionProvider from "@/components/TransitionProvider";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uxnicorp.com.ar"),
  title: {
    template: "%s | UXnicorp",
    default: "UXnicorp — Agencia de Desarrollo Web y UX en Argentina",
  },
  description:
    "Diseñamos y desarrollamos webs pensadas para el negocio detrás. Diseño, código y estrategia con foco real en lo que necesita tu negocio. Argentina.",
  authors: [{ name: "UXnicorp", url: "https://www.uxnicorp.com.ar" }],
  creator: "UXnicorp",
  publisher: "UXnicorp",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.uxnicorp.com.ar",
    siteName: "UXnicorp",
    title: "UXnicorp — Agencia de Desarrollo Web y UX en Argentina",
    description:
      "Diseño y desarrollo web con criterio. Entendemos tu negocio antes de diseñar. Presupuesto claro, comunicación directa, sin intermediarios.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1343,
        height: 633,
        alt: "UXnicorp — Agencia de Desarrollo Web Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UXnicorp — Agencia de Desarrollo Web y UX en Argentina",
    description:
      "Diseño y desarrollo web con criterio. Entendemos tu negocio antes de diseñar. Presupuesto claro, comunicación directa, sin intermediarios.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.uxnicorp.com.ar",
    languages: {
      "es": "https://www.uxnicorp.com.ar",
      "en": "https://www.uxnicorp.com.ar/en",
      "x-default": "https://www.uxnicorp.com.ar",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={roboto.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang = location.pathname.startsWith('/en') ? 'en' : 'es';`,
          }}
        />
        <meta name="google-site-verification" content="siC-CWVYr84oI1ktEEacAFXJA-8_t2YAxGanTzpisnw" />
        <Script id="consent-mode-bootstrap" strategy="beforeInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied', ad_user_data: 'denied',
  ad_personalization: 'denied', analytics_storage: 'denied',
  functionality_storage: 'denied', personalization_storage: 'denied',
  wait_for_update: 500,
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
          `}
        </Script>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
__html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "ProfessionalService"],
                "@id": "https://www.uxnicorp.com.ar/#organization",
                name: "UXnicorp",
                url: "https://www.uxnicorp.com.ar",
                logo: "https://www.uxnicorp.com.ar/brand/logo.png",
                description:
                  "Estudio de desarrollo web en Argentina. Pensamos el negocio antes de abrir el editor. Diseño, código y estrategia en un solo equipo.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "AR",
                },
                areaServed: [
                  { "@type": "AdministrativeArea", name: "Ciudad Autónoma de Buenos Aires" },
                  { "@type": "AdministrativeArea", name: "Provincia de Buenos Aires" },
                  { "@type": "AdministrativeArea", name: "Córdoba" },
                  { "@type": "AdministrativeArea", name: "Santa Fe" },
                  { "@type": "AdministrativeArea", name: "Mendoza" },
                  { "@type": "AdministrativeArea", name: "Tucumán" },
                  { "@type": "AdministrativeArea", name: "Salta" },
                  { "@type": "AdministrativeArea", name: "Neuquén" },
                  { "@type": "AdministrativeArea", name: "Catamarca" },
                  { "@type": "AdministrativeArea", name: "Entre Ríos" },
                  { "@type": "AdministrativeArea", name: "Chaco" },
                  { "@type": "AdministrativeArea", name: "Misiones" },
                  { "@type": "AdministrativeArea", name: "Río Negro" },
                  { "@type": "AdministrativeArea", name: "La Pampa" },
                  { "@type": "AdministrativeArea", name: "Santa Cruz" },
                  { "@type": "AdministrativeArea", name: "Tierra del Fuego" },
                ],
                priceRange: "$$",
                founder: { "@id": "https://www.uxnicorp.com.ar/#gonzalo" },
                employee: [
                  {
                    "@type": "Person",
                    "@id": "https://www.uxnicorp.com.ar/#ailin",
                    name: "Ailín Torrente",
                    worksFor: { "@id": "https://www.uxnicorp.com.ar/#organization" },
                    sameAs: "https://www.linkedin.com/in/ailin-torrente-299994374/",
                  },
                  {
                    "@type": "Person",
                    "@id": "https://www.uxnicorp.com.ar/#sol",
                    name: "Sol Andriani",
                    worksFor: { "@id": "https://www.uxnicorp.com.ar/#organization" },
                    sameAs: "https://www.linkedin.com/in/solandriani/",
                  },
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: ["Spanish", "English"],
                  email: "uxnicorp@gmail.com",
                  telephone: "+54-9-3834-368748",
                },
                sameAs: [
                  "https://www.instagram.com/uxnicorp/",
                  "https://www.linkedin.com/company/uxnicorp",
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Servicios de Desarrollo Web",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Landing Page",
                        description:
                          "Landing pages y webs institucionales a medida para negocios en Argentina. Diseño UX, copy y desarrollo incluidos.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "E-commerce",
                        description:
                          "Tiendas online a medida sin Shopify ni comisiones de terceros. Catálogo, pagos y panel de administración propio.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Sistema de Gestión Web",
                        description:
                          "Sistemas de gestión a medida, CRM y software de control de stock y facturación web para empresas. Sin plantillas genéricas.",
                      },
                    },
                  ],
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://www.uxnicorp.com.ar/#gonzalo",
                name: "Gonzalo Daniel Vega",
                url: "https://www.uxnicorp.com.ar",
                jobTitle: "Fundador",
                description:
                  "Fundador de UXnicorp. Diseña y desarrolla webs y software a medida pensados para el negocio detrás.",
                worksFor: { "@id": "https://www.uxnicorp.com.ar/#organization" },
                sameAs: ["https://www.linkedin.com/in/gonzalo-daniel-vega/"],
                knowsAbout: ["Desarrollo web", "UX", "Software a medida", "SEO"],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.uxnicorp.com.ar/#website",
                name: "UXnicorp",
                url: "https://www.uxnicorp.com.ar",
                inLanguage: ["es", "en"],
                description:
                  "Desarrollo web en Argentina: landing pages, tiendas online, sistemas de gestión y webs institucionales.",
              },
            ]),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <LenisProvider>
          <TransitionProvider>
            {children}
            <LanguageSwitcher />
            <CookieBanner />
            <GoogleAnalytics />
          </TransitionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}

