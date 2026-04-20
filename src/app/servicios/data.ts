export type Servicio = {
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

export const SERVICIOS: Servicio[] = [
  {
    slug: "landing-page",
    nombre: "Landing Page",
    tagline: "Tu presencia online que realmente convierte.",
    precioUSD: "$500 – $800 USD",
    precioARS: "$300.000 – $500.000 ARS",
    tiempo: "2 – 3 semanas",
    descripcion:
      "No hacemos templates. Analizamos tu negocio, definimos la estructura, escribimos el copy y construimos desde cero con la tecnología que mejor le queda al proyecto. Una landing que carga rápido, se posiciona y convierte.",
    acento: "#e0608a",
    bg: "rgba(253,232,242,0.65)",
    seo: {
      title: "Landing Page y Web Institucional a medida | UXnicorp",
      description:
        "Landing pages y webs institucionales para negocios en Argentina. Diseño, copy y desarrollo incluidos. Carga rápida, SEO técnico desde el día uno.",
    },
    etapas: [
      {
        num: "01",
        titulo: "Audit",
        texto:
          "Revisamos tu web actual (si tenés una). Identificamos qué falla y qué mantener.",
      },
      {
        num: "02",
        titulo: "Estructura y copy",
        texto:
          "Definimos la arquitectura de la página y el copy principal antes de abrir Figma.",
      },
      {
        num: "03",
        titulo: "Diseño",
        texto: "Wireframes y diseño visual. Iteramos hasta que esté bien.",
      },
      {
        num: "04",
        titulo: "Desarrollo",
        texto:
          "Código limpio, performance 90+ en PageSpeed, sin dependencias innecesarias.",
      },
      {
        num: "05",
        titulo: "Lanzamiento",
        texto: "Google Analytics 4 configurado desde el día 1. Deploy y 30 días de soporte.",
      },
    ],
    incluye: [
      "Audit de tu situación actual",
      "UX y arquitectura de la página",
      "Copy de toda la página",
      "Diseño visual",
      "SEO técnico básico",
      "30 días de soporte post-lanzamiento",
    ],
    noIncluye: [
      "Redacción de blog o contenido adicional",
      "Campañas de publicidad",
      "Dominio y hosting (te asesoramos en la elección)",
    ],
  },
  {
    slug: "ecommerce",
    nombre: "E-commerce",
    tagline: "Tienda propia. Sin comisiones de terceros.",
    precioUSD: "$900 – $1.500 USD",
    precioARS: "$600.000 – $1.000.000 ARS",
    tiempo: "6 – 10 semanas",
    descripcion:
      "Tienda completa con catálogo, pagos y panel de administración propio. Sin Shopify, sin comisiones por venta. El negocio es tuyo.",
    acento: "#3a7cc4",
    bg: "rgba(202,222,249,0.55)",
    seo: {
      title: "Tiendas online a medida sin comisiones | UXnicorp",
      description:
        "Tiendas online para negocios en Argentina. Sin Shopify ni comisiones de terceros. Catálogo, pagos y panel de administración propio incluidos.",
    },
    etapas: [
      {
        num: "01",
        titulo: "Análisis",
        texto:
          "Entendemos tu catálogo, tus clientes y cómo querés operar el negocio.",
      },
      {
        num: "02",
        titulo: "UX y diseño",
        texto:
          "Flujo de compra, fichas de producto, carrito. Diseñamos para que se compre.",
      },
      {
        num: "03",
        titulo: "Desarrollo",
        texto:
          "Catálogo personalizado, carrito, checkout y panel de admin a tu medida.",
      },
      {
        num: "04",
        titulo: "Pagos",
        texto: "MercadoPago, Stripe u otros. Sin comisiones extras de plataforma.",
      },
      {
        num: "05",
        titulo: "Capacitación y lanzamiento",
        texto: "Te enseñamos a administrar la tienda. Deploy y acompañamiento.",
      },
    ],
    incluye: [
      "Catálogo y fichas de producto",
      "Carrito y checkout",
      "Integración de pagos",
      "Panel de administración",
      "SEO técnico",
      "Capacitación para administrar",
      "30 días de soporte post-lanzamiento",
    ],
    noIncluye: [
      "Fotografía de productos",
      "Carga masiva de productos (más de 50 unidades)",
      "Campañas de publicidad",
    ],
  },
  {
    slug: "sistemas-apps",
    nombre: "Sistema / App",
    tagline: "Software a medida para problemas reales.",
    precioUSD: "desde $1.000 USD",
    precioARS: "desde $1.200.000 ARS",
    tiempo: "8 – 16 semanas",
    descripcion:
      "Sistemas a medida, dashboards, plataformas internas, aplicaciones web. Primero entendemos el problema. Después escribimos código.",
    acento: "#9040b0",
    bg: "rgba(224,166,216,0.45)",
    seo: {
      title: "Sistemas ERP, CRM y gestión web a medida | UXnicorp",
      description:
        "Sistemas de gestión web a medida: ERP, CRM, control de stock y facturación. Para empresas en Argentina que necesitan software propio, sin plantillas genéricas.",
    },
    etapas: [
      {
        num: "01",
        titulo: "Análisis y documentación",
        texto:
          "Mapeamos el flujo completo, los actores y los requerimientos reales.",
      },
      {
        num: "02",
        titulo: "Arquitectura",
        texto:
          "Definimos la estructura técnica antes de escribir una línea de código.",
      },
      {
        num: "03",
        titulo: "Desarrollo iterativo",
        texto: "Entregas parciales con revisión. No desaparecemos hasta el final.",
      },
      {
        num: "04",
        titulo: "Testing y QA",
        texto: "Pruebas funcionales y de integración antes del lanzamiento.",
      },
      {
        num: "05",
        titulo: "Documentación y handoff",
        texto: "Documentación técnica completa. El sistema es tuyo.",
      },
    ],
    incluye: [
      "Análisis y documentación de requerimientos",
      "Arquitectura de software",
      "Desarrollo full-stack",
      "Testing y QA",
      "Documentación técnica",
      "Capacitación del equipo",
      "30 días de soporte post-entrega",
    ],
    noIncluye: [
      "Infraestructura y servidores (te asesoramos)",
      "Mantenimiento mensual (se presupuesta aparte)",
    ],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return SERVICIOS.find((s) => s.slug === slug);
}
