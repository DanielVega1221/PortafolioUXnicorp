import type { FaqItem } from "@/components/FaqBlock";

export type Servicio = {
  slug: string;
  nombre: string;
  tagline: string;
  precioUSD: string;
  precioARS: string;
  tiempo: string;
  cuotas: string;
  descripcion: string;
  acento: string;
  bg: string;
  seo: {
    title: string;
    description: string;
  };
  faq: FaqItem[];
  etapas: { num: string; titulo: string; texto: string }[];
  incluye: string[];
  noIncluye: string[];
};

export const SERVICIOS: Servicio[] = [
  {
    slug: "landing-page",
    nombre: "Landing Page",
    tagline: "Tu presencia online que realmente convierte.",
    precioUSD: "USD 500 – 800",
    precioARS: "$300.000 – $500.000 ARS",
    tiempo: "2 – 3 semanas",
    cuotas: "2 o 3 cuotas",
    descripcion:
      "No hacemos templates. Analizamos tu negocio, definimos la estructura, escribimos el copy y construimos desde cero con la tecnología que mejor le queda al proyecto. Una landing que carga rápido, se posiciona y convierte.",
    acento: "#aa5574",
    bg: "rgba(253,232,242,0.65)",
    seo: {
      title: "Landing Page y Web Institucional a medida",
      description:
        "Landing pages de conversión y webs institucionales para negocios en Argentina. Diseño, copy y desarrollo incluidos. Carga rápida, SEO técnico desde el día uno.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta una landing page en Argentina?",
        a: "Desde USD 500 (aprox. $300.000 ARS), en 2 a 3 semanas de trabajo. El precio depende de la cantidad de secciones, integraciones y si el diseño visual es completamente a medida. Siempre presupuestamos antes de arrancar y se paga en 2 o 3 cuotas.",
      },
      {
        q: "¿Incluye diseño y copy?",
        a: "Sí. La landing incluye UX y arquitectura, el copy de toda la página y el diseño visual. No es un template: se construye desde cero para tu negocio.",
      },
      {
        q: "¿Puedo actualizarla yo después?",
        a: "Sí. Te enseñamos a editar el contenido y no generamos dependencia. Si preferís no ocuparte, ofrecemos el plan de mantenimiento (Plan Cuidado) para actualizaciones, backups y soporte mes a mes.",
      },
      {
        q: "¿Incluye hosting y dominio?",
        a: "No incluye dominio ni hosting: te asesoramos para elegir el que mejor calce según el proyecto y lo dejamos operativo en el lanzamiento.",
      },
      {
        q: "¿Sirve si ya tengo una web que no funciona?",
        a: "Sí. Arrancamos con una auditoría: vemos qué falla y qué conviene mantener, y rediseñamos sobre eso en vez de tirar todo a la basura.",
      },
    ],
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
    precioUSD: "USD 900 – 1.500",
    precioARS: "$800.000 – $1.400.000 ARS",
    tiempo: "6 – 10 semanas",
    cuotas: "2 o 3 cuotas",
    descripcion:
      "Tienda completa con catálogo, pagos y panel de administración propio. Sin Shopify, sin comisiones por venta. El negocio es tuyo.",
    acento: "#3a7cc4",
    bg: "rgba(202,222,249,0.55)",
    seo: {
      title: "Tiendas online a medida sin comisiones",
      description:
        "Tiendas online para negocios en Argentina. Sin Shopify ni comisiones de terceros. Catálogo, pagos y panel de administración propio incluidos.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta una tienda online a medida?",
        a: "Entre USD 900 y 1.500 (aprox. $800.000 – $1.400.000 ARS), en 6 a 10 semanas. Incluye catálogo, carrito, checkout, pagos y panel de administración propio, sin comisiones por venta.",
      },
      {
        q: "¿Por qué sin Shopify ni comisiones?",
        a: "Porque el negocio es tuyo: no pagás porcentaje por venta ni licencias mensuales de plataforma. Integramos MercadoPago, Stripe u otros procesadores y no hay comisiones extras por operar.",
      },
      {
        q: "¿Puedo cargar mis propios productos?",
        a: "Sí. El panel de administración está pensado para que cargues productos, precios, stock y ofertas sin saber programar. Te capacitamos para usarlo a tu ritmo.",
      },
      {
        q: "¿Se integra con pagos y envíos?",
        a: "Sí. Cobros con MercadoPago, Stripe u otros, y envíos según el correo o transportadora que uses. Si tu operación tiene algo particular, lo adaptamos al desarrollo a medida.",
      },
      {
        q: "¿Qué pasa con el SEO de la tienda?",
        a: "Incluye SEO técnico desde el día uno: fichas indexables, velocidad de carga y una estructura pensada tanto para Google como para los motores de IA que hoy recomiendan productos.",
      },
    ],
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
    nombre: "Sistema de Gestión",
    tagline: "Software a medida para problemas reales.",
    precioUSD: "desde USD 1.000",
    precioARS: "desde $1.500.000 ARS",
    tiempo: "8 – 16 semanas",
    cuotas: "hasta 6 cuotas",
    descripcion:
      "Sistemas de gestión a medida, dashboards, plataformas internas, aplicaciones web. Primero entendemos el problema. Después escribimos código.",
    acento: "#9040b0",
    bg: "rgba(224,166,216,0.45)",
    seo: {
      title: "Sistema de Gestión a medida",
      description:
        "Sistemas de gestión a medida: CRM, control de stock, facturación y más. Software a medida para empresas en Argentina, sin plantillas genéricas.",
    },
    faq: [
      {
        q: "¿Cuánto cuesta un sistema de gestión a medida?",
        a: "Desde USD 1.000 (desde $1.500.000 ARS). El precio depende de los módulos, roles e integraciones que necesite tu operación. Siempre mapeamos el flujo real de trabajo antes de cotizar y se puede pagar en hasta 6 cuotas.",
      },
      {
        q: "¿El sistema es mío o pago una mensualidad?",
        a: "El sistema es tuyo. No hay licencias mensuales ni costo por usuario, a diferencia de un SaaS genérico. La lógica queda a tu medida y en tu infraestructura.",
      },
      {
        q: "¿Qué pasa si después quiero agregar funciones?",
        a: "Sumamos módulos sobre lo ya construido, sin reiniciar el proyecto. El sistema escala junto con tu negocio.",
      },
      {
        q: "¿Cuánto tarda en desarrollarse?",
        a: "Entre 8 y 16 semanas según la complejidad. Trabajamos por etapas con entregas parciales y no desaparecemos hasta la documentación técnica y el handoff.",
      },
      {
        q: "¿Incluye capacitación y soporte?",
        a: "Incluye capacitación del equipo, documentación técnica completa y 30 días de soporte post-entrega. Después podés sumar el plan de mantenimiento si querés acompañamiento continuo.",
      },
    ],
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
