export type ServicioEN = {
  slug: string;
  nombre: string;
  tagline: string;
  precioUSD: string;
  precioARS: string;
  tiempo: string;
  descripcion: string;
  acento: string;
  bg: string;
  seo: {
    title: string;
    description: string;
  };
  etapas: { num: string; titulo: string; texto: string }[];
  incluye: string[];
  noIncluye: string[];
};

export const SERVICIOS_EN: ServicioEN[] = [
  {
    slug: "landing-page",
    nombre: "Landing Page",
    tagline: "Your online presence that actually converts.",
    precioUSD: "$500 – $800 USD",
    precioARS: "$300,000 – $500,000 ARS",
    tiempo: "2 – 3 weeks",
    descripcion:
      "We don't do templates. We analyze your business, define the structure, write the copy and build from scratch with the right technology for the project. Fast loading, good SEO and built to convert.",
    acento: "#e0608a",
    bg: "rgba(253,232,242,0.65)",
    seo: {
      title: "Landing Page & Institutional Website Design | UXnicorp",
      description:
        "Custom landing pages and institutional websites. UX design, copy and development included. Fast loading, technical SEO from day one.",
    },
    etapas: [
      {
        num: "01",
        titulo: "Audit",
        texto: "We review your current site (if you have one). We identify what's broken and what to keep.",
      },
      {
        num: "02",
        titulo: "Structure & copy",
        texto: "We define the page architecture and main copy before opening any design tool.",
      },
      {
        num: "03",
        titulo: "Design",
        texto: "Wireframes and visual design. We iterate until it's right.",
      },
      {
        num: "04",
        titulo: "Development",
        texto: "Clean code, PageSpeed 90+, no unnecessary dependencies.",
      },
      {
        num: "05",
        titulo: "Launch",
        texto: "Google Analytics 4 configured from day one. Deploy and 30 days of support.",
      },
    ],
    incluye: [
      "Audit of your current situation",
      "UX and page architecture",
      "Full page copy",
      "Visual design",
      "Basic technical SEO",
      "30 days post-launch support",
    ],
    noIncluye: [
      "Blog writing or additional content",
      "Advertising campaigns",
      "Domain and hosting (we advise on the choice)",
    ],
  },
  {
    slug: "ecommerce",
    nombre: "E-commerce",
    tagline: "Your own store. No third-party commissions.",
    precioUSD: "$900 – $1,500 USD",
    precioARS: "$600,000 – $1,000,000 ARS",
    tiempo: "6 – 10 weeks",
    descripcion:
      "Complete store with catalog, payments and your own admin panel. No Shopify, no per-sale commissions. The business is yours.",
    acento: "#3a7cc4",
    bg: "rgba(202,222,249,0.55)",
    seo: {
      title: "Custom Online Store Development | UXnicorp",
      description:
        "Custom e-commerce for businesses. No Shopify or third-party commissions. Catalog, payments and admin panel included.",
    },
    etapas: [
      {
        num: "01",
        titulo: "Analysis",
        texto: "We understand your catalog, your customers and how you want to run the business.",
      },
      {
        num: "02",
        titulo: "UX & design",
        texto: "Purchase flow, product pages, cart. We design for conversion.",
      },
      {
        num: "03",
        titulo: "Development",
        texto: "Custom catalog, cart, checkout and admin panel built to your needs.",
      },
      {
        num: "04",
        titulo: "Payments",
        texto: "MercadoPago, Stripe or others. No extra platform commissions.",
      },
      {
        num: "05",
        titulo: "Training & launch",
        texto: "We teach you how to manage the store. Deploy and support included.",
      },
    ],
    incluye: [
      "Catalog and product pages",
      "Cart and checkout",
      "Payment integration",
      "Admin panel",
      "Technical SEO",
      "Training to manage the store",
      "30 days post-launch support",
    ],
    noIncluye: [
      "Product photography",
      "Bulk product upload (over 50 items)",
      "Advertising campaigns",
    ],
  },
  {
    slug: "sistemas-apps",
    nombre: "System / App",
    tagline: "Custom software for real problems.",
    precioUSD: "from $1,000 USD",
    precioARS: "from $1,200,000 ARS",
    tiempo: "8 – 16 weeks",
    descripcion:
      "ERP, CRM, inventory, invoicing, dashboards, internal platforms. We understand the problem first. Then we write code.",
    acento: "#9040b0",
    bg: "rgba(224,166,216,0.45)",
    seo: {
      title: "ERP, CRM & Custom Web Systems | UXnicorp",
      description:
        "Custom management systems for businesses: ERP, CRM, inventory and invoicing web apps. No generic templates — built from scratch.",
    },
    etapas: [
      {
        num: "01",
        titulo: "Analysis & documentation",
        texto: "We map the full flow, actors and real requirements.",
      },
      {
        num: "02",
        titulo: "Architecture",
        texto: "We define the technical structure before writing a single line of code.",
      },
      {
        num: "03",
        titulo: "Iterative development",
        texto: "Partial deliveries with review. We don't disappear until the end.",
      },
      {
        num: "04",
        titulo: "Testing & QA",
        texto: "Functional and integration testing before launch.",
      },
      {
        num: "05",
        titulo: "Documentation & handoff",
        texto: "Full technical documentation. The system is yours.",
      },
    ],
    incluye: [
      "Requirements analysis and documentation",
      "Software architecture",
      "Full-stack development",
      "Testing & QA",
      "Technical documentation",
      "Team training",
      "30 days post-delivery support",
    ],
    noIncluye: [
      "Infrastructure and servers (we advise)",
      "Monthly maintenance (quoted separately)",
    ],
  },
];

export function getServicioEN(slug: string): ServicioEN | undefined {
  return SERVICIOS_EN.find((s) => s.slug === slug);
}
