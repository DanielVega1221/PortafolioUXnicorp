import type { Metadata } from "next";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LenisProvider from "@/components/LenisProvider";
import TransitionProvider from "@/components/TransitionProvider";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uxnicorp.com.ar"),
  title: {
    template: "%s | UXnicorp",
    default: "UXnicorp — Agencia de Desarrollo Web y UX en Argentina",
  },
  description:
    "Desarrollo web en Argentina: landing pages, tiendas online, sistemas de gestión (ERP, CRM) y webs institucionales. Análisis, diseño y código limpio.",
  keywords: [
    // Landing pages
    "landing page argentina",
    "landing page a medida argentina",
    "desarrollo de landing page en argentina",
    "precio landing page argentina",
    "cuanto sale una landing page argentina",
    "landing page para negocio",
    // E-commerce
    "tienda online argentina",
    "desarrollo ecommerce argentina",
    "tienda online a medida",
    "crear tienda online argentina",
    "ecommerce personalizado argentina",
    // Sistemas de gestión
    "sistema de gestión argentina",
    "sistema erp argentina",
    "sistema erp web",
    "sistema crm argentina",
    "software de gestión de clientes",
    "sistema de facturación web argentina",
    "control de stock web",
    "sistema de inventario argentina",
    "software a medida argentina",
    "sistema de gestión pyme",
    "aplicación web a medida",
    // Web institucional
    "pagina institucional argentina",
    "sitio web corporativo argentina",
    "diseño web institucional",
    "web para empresa argentina",
    // Agencia
    "agencia de programación web",
    "agencia ux ui argentina",
    "servicios de desarrollo web en argentina",
    "diseño web argentina",
    "desarrollo web argentina",
    "agencia web argentina",
  ],
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
    alternateLocale: ["en_US", "es_ES", "es_MX"],
    url: "https://www.uxnicorp.com.ar",
    siteName: "UXnicorp",
    title: "UXnicorp — Agencia de Desarrollo Web y UX en Argentina",
    description:
      "Landing pages, tiendas online, sistemas de gestión y webs institucionales. Proyectos reales, resultados medibles.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UXnicorp — Agencia de Desarrollo Web Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UXnicorp — Agencia de Desarrollo Web y UX en Argentina",
    description:
      "Landing pages, tiendas online, sistemas de gestión y webs institucionales. Proyectos reales, resultados medibles.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.uxnicorp.com.ar",
    languages: {
      "es-AR": "https://www.uxnicorp.com.ar",
      "es": "https://www.uxnicorp.com.ar",
      "en": "https://www.uxnicorp.com.ar/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="siC-CWVYr84oI1ktEEacAFXJA-8_t2YAxGanTzpisnw" />
        {/* Consent Mode v2 — must run BEFORE gtag.js loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied', ad_user_data: 'denied',
  ad_personalization: 'denied', analytics_storage: 'denied',
  functionality_storage: 'denied', personalization_storage: 'denied',
  wait_for_update: 500,
  region: ['AT','BE','BG','CY','CZ','DE','DK','EE','ES','FI','FR','GR',
           'HR','HU','IE','IS','IT','LI','LT','LU','LV','MT','NL','NO',
           'PL','PT','RO','SE','SI','SK','GB']
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "UXnicorp",
                url: "https://www.uxnicorp.com.ar",
                logo: "https://www.uxnicorp.com.ar/logo.png",
                description:
                  "Estudio de desarrollo web en Argentina. Construimos landing pages, tiendas online, sistemas de gestión y webs institucionales.",
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
                  name: "Argentina, América Latina, España",
                },
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
                          "Sistemas ERP, CRM, control de stock y facturación web para empresas. Software a medida, sin plantillas genéricas.",
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

