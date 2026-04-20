export type CasoTranslation = {
  tipo?: string;
  industria?: string;
  problema: string;
  queHicimos: string[];
  resultado: string;
};

export type Caso = {
  slug: string;
  cliente: string;
  tipo: string;
  industria: string;
  tagColor: string;
  acento: string;
  bg: string;
  imagen?: string;
  contexto: string;
  problema: string;
  queAnalizamos: string;
  queHicimos: string[];
  resultado: string;
  stack: string[];
  featured?: boolean;
  linkSitio?: string;
  en?: CasoTranslation;
};

export const CASOS: Caso[] = [
  {
    slug: "smarthome",
    cliente: "SmartHome Solutions",
    tipo: "Landing Page",
    industria: "Tecnología / Hogar",
    tagColor: "#3a7cc4",
    acento: "#3a7cc4",
    bg: "rgba(202,222,249,0.55)",
    imagen: "/works/SmartHome.png",
    featured: true,
    contexto:
      "SmartHome llegó con un Instagram lleno de trabajos reales pero sin página web. Sus clientes buscaban en Google y no los encontraban. Las consultas llegaban, pero no había nada que respaldara la marca fuera de las redes.",
    problema:
      "El negocio existía, la reputación también. Pero sin web, cada nuevo cliente empezaba de cero: ¿quiénes son? ¿qué hacen exactamente? ¿son confiables? Todo eso lo tenían que responder a mano por WhatsApp.",
    queAnalizamos:
      "Revisamos su posicionamiento en búsquedas locales: había volumen real para 'portones automáticos Santiago del Estero' y 'automatización del hogar' pero cero competencia con web bien hecha. Oportunidad clara.",
    queHicimos: [
      "Sitio completo con secciones para portones, seguridad y automatización del hogar",
      "Packs de productos con descripción clara para que el cliente entienda sin tener que preguntar",
      "Testimonios reales de clientes con nombre y proyecto específico",
      "Formulario que deriva a WhatsApp con el pedido pre-cargado",
      "Optimización SEO local para Santiago del Estero",
    ],
    resultado:
      "Pasaron de ser 'los de Instagram' a tener una presencia que respalda la marca las 24 horas. Las consultas llegan con contexto: el cliente ya vio los packs, leyó los testimonios y sabe qué quiere pedir.",
    stack: ["React", "Next.js", "SEO Local", "WhatsApp API"],
    linkSitio: "https://smarth-home.vercel.app/",
    en: {
      industria: "Technology / Smart Home",
      problema:
        "The business was real, the reputation too — but without a website, every new client started from zero: Who are they? What exactly do they do? Are they reliable? All of that had to be answered manually over WhatsApp, for every single lead.",
      queHicimos: [
        "Full website covering automatic gates, home security, and smart home automation",
        "Product packages with clear descriptions so clients understand without needing to ask",
        "Real client testimonials with names and specific project details",
        "Contact form that pre-fills a WhatsApp message with the inquiry",
        "Local SEO optimization for Santiago del Estero, Argentina",
      ],
      resultado:
        "They went from 'the Instagram guys' to having a professional presence that backs the brand 24/7. Inquiries now arrive with context — the client already browsed the packages, read the testimonials, and knows exactly what they want.",
    },
  },
  {
    slug: "comercial-rio-hondo",
    cliente: "Comercial Río Hondo",
    tipo: "Web Corporativa",
    industria: "Construcción / Áridos",
    tagColor: "#8b6914",
    acento: "#a07820",
    bg: "rgba(254,240,190,0.55)",
    imagen: "/works/ComercialRioHondo.png",
    featured: true,
    contexto:
      "Una empresa con más de 10 años en el mercado de áridos y triturados. Proveedores de obras civiles, caminos y vialidad en Santiago del Estero. Sin web, sin forma de que los ingenieros o constructoras los encontraran online.",
    problema:
      "El rubro construcción tiene ciclos de compra largos: alguien busca proveedores semanas antes de arrancar la obra. Sin presencia online, Comercial Río Hondo dependía del boca a boca en un radio muy limitado.",
    queAnalizamos:
      "El cliente real no es el particular que necesita arena — es el jefe de obra, el ingeniero, la constructora. Esa persona busca en Google, compara, y necesita saber disponibilidad, tipos de material y cómo contactar. Diseñamos para eso.",
    queHicimos: [
      "Sitio institucional con identidad visual sólida y seria",
      "Ficha técnica de cada producto (Piedra 19/38, Base 0/32, Arena 0/6, etc.) con aplicaciones reales",
      "Galería de cantera y procesos para transmitir escala y seriedad",
      "Formulario que pre-carga la consulta en WhatsApp con producto y proyecto",
      "Sección de contacto con múltiples canales y ubicación en mapa",
    ],
    resultado:
      "La empresa ahora tiene una presencia que está a la altura de los proyectos que hace. Los ingenieros y constructoras que buscan proveedores en la zona los encuentran, ven los materiales disponibles y contactan directo.",
    stack: ["Next.js", "SEO Local", "WhatsApp API"],
    linkSitio: "https://www.comercialriohondo.com.ar/",
    en: {
      tipo: "Corporate Website",
      industria: "Construction / Materials",
      problema:
        "Construction has long buying cycles: project managers search for suppliers weeks before breaking ground. Without an online presence, Comercial Río Hondo relied entirely on word-of-mouth within a very limited radius.",
      queHicimos: [
        "Corporate website with a solid, professional visual identity",
        "Technical spec sheet for each product (Crushed Stone, Base Course, Sand, etc.) with real-world applications",
        "Quarry and process gallery to convey scale and operational reliability",
        "Contact form pre-filling a WhatsApp inquiry with product type and project details",
        "Multi-channel contact section with map location",
      ],
      resultado:
        "The company now has a presence that matches the scale of the projects they deliver. Engineers and contractors searching for suppliers in the region find them, review available materials, and make contact directly.",
    },
  },
  {
    slug: "glam-at-nails",
    cliente: "Glam at Nails",
    tipo: "Landing Page",
    industria: "Belleza / Estética",
    tagColor: "#e0608a",
    acento: "#e0608a",
    bg: "rgba(253,232,242,0.65)",
    imagen: "/works/GlamAtNails.png",
    contexto:
      "Ailín tiene un homestudio en Boedo con más de 300 clientas y años de trabajo real detrás. Sus diseños circulaban en Instagram, las recomendaciones llegaban solas — pero todo dependía de un solo canal y de responder consultas una por una.",
    problema:
      "Cada consulta llegaba desde cero por WhatsApp: ¿qué servicios hacés? ¿cuánto sale? ¿en qué zona estás? Preguntas que se respondían a mano, sin estructura. El tiempo más valioso de Ailín —el de hacer uñas— lo perdía respondiendo siempre lo mismo.",
    queAnalizamos:
      "El problema no era falta de clientes, era falta de filtro previo. Quien llegara al sitio tenía que entender el servicio, ver trabajos reales y llegar a WhatsApp con la consulta ya formada. Así el turno empieza antes de que empiece.",
    queHicimos: [
      "Galería de trabajos reales como protagonista: esculpidas, nivelación, semipermanente, nail art personalizado",
      "Sección de servicios con duración estimada y recomendaciones según tipo de uña",
      "Beneficios honestos: turno exclusivo sin sobreturno, homestudio climatizado en Boedo",
      "Testimonios reales de clientas con nombre y detalle de experiencia personal",
      "Botón de WhatsApp con mensaje pre-armado según el servicio que eligió el cliente",
      "SEO local optimizado para búsquedas de manicura en Boedo y CABA",
    ],
    resultado:
      "Las consultas que llegan ahora tienen contexto. El cliente ya vio los trabajos, eligió el servicio, leyó los testimonios. Ailín cierra el turno; la página hace la presentación.",
    stack: ["React", "Bootstrap", "SEO Local", "WhatsApp API"],
    linkSitio: "https://glamatnails.com.ar/",
    en: {
      industria: "Beauty / Nail Studio",
      problema:
        "Every inquiry arrived from scratch on WhatsApp: What services do you offer? How much does it cost? Where are you located? Questions answered by hand, over and over. The most valuable time — actually doing nails — was being spent replying to the same messages.",
      queHicimos: [
        "Real work gallery as the centerpiece: nail extensions, overlay, gel polish, custom nail art",
        "Service menu with estimated duration and recommendations by nail type",
        "Honest selling points: exclusive appointments (no overbooking), climate-controlled home studio in Boedo",
        "Real client testimonials with names and personal experience details",
        "WhatsApp button with a pre-written message matching the service the client selected",
        "Local SEO optimized for nail searches in Boedo and Buenos Aires",
      ],
      resultado:
        "Inquiries now arrive with context. The client already browsed the work, chose a service, and read the testimonials. Ailín closes the appointment — the page does the introduction.",
    },
  },
  {
    slug: "electropower",
    cliente: "ElectroPower",
    tipo: "Web Corporativa",
    industria: "Electricidad / Construcción",
    tagColor: "#c47a3a",
    acento: "#c47a3a",
    bg: "rgba(254,224,214,0.55)",
    imagen: "/works/ElectroPower.webp",
    contexto:
      "ElectroPower tiene más de 6 años trabajando en electricidad, refrigeración y construcción en Buenos Aires — con proyectos junto a Edenor y Edesur y capacidad para baja, media y alta tensión. Un portfolio enorme de obras reales, sin presencia digital que lo respaldara.",
    problema:
      "La empresa competía por licitaciones y proyectos industriales donde la primera impresión digital importa. Sin web, cada cotización empezaba explicando quiénes eran. La trayectoria no se veía; la escala del trabajo, tampoco.",
    queAnalizamos:
      "El cliente de ElectroPower no busca un electricista de guardia — busca un socio técnico para un proyecto. Alguien que evalúa experiencia, certificaciones y capacidad operativa. Había que mostrar eso de forma clara y creíble para hogares, comercios e industrias.",
    queHicimos: [
      "Sitio corporativo con identidad visual que transmite solidez técnica y confianza profesional",
      "Galería de obras: industriales, residenciales, tableros eléctricos, instalaciones en altura",
      "Sección de pilares diferenciales con los 6 valores que distinguen a la empresa",
      "Proceso de trabajo en pasos claros: desde la consulta hasta la entrega con certificación",
      "Formulario de cotización con derivación por WhatsApp o email según preferencia",
      "Sección de atención de urgencias 24hs destacada visualmente",
    ],
    resultado:
      "La empresa tiene ahora una presencia que respalda la trayectoria. El formulario segmenta el tipo de proyecto desde el primer contacto — industria, comercio, residencial. Menos tiempo explicando quiénes son, más tiempo cotizando.",
    stack: ["React", "Node.js", "Maps API", "SEO Local"],
    linkSitio: "https://www.electropowerok.com.ar/",
    en: {
      tipo: "Corporate Website",
      industria: "Electrical / Construction",
      problema:
        "The company competed for tenders and industrial contracts where the digital first impression matters. Without a website, every quote started with explaining who they were. Their track record was invisible — and so was the scale of their work.",
      queHicimos: [
        "Corporate website with a visual identity that conveys technical credibility and professional trust",
        "Project gallery: industrial facilities, residential, electrical panels, high-altitude installations",
        "Six core differentiators highlighting what sets the company apart",
        "Step-by-step work process from initial contact to certified delivery",
        "Quote form with routing to WhatsApp or email based on client preference",
        "Visually highlighted 24/7 emergency response section",
      ],
      resultado:
        "The company now has a presence that backs their track record. The quote form segments project type from first contact — industrial, commercial, residential. Less time explaining who they are, more time quoting.",
    },
  },
  {
    slug: "sistema-prestamos",
    cliente: "ComunidadAhorro",
    tipo: "Sistema Web",
    industria: "Finanzas / Planes de Ahorro",
    tagColor: "#9040b0",
    acento: "#9040b0",
    bg: "rgba(224,166,216,0.45)",
    imagen: "/works/ComunidadAhorro.webp",
    contexto:
      "Una empresa que comercializa planes de ahorro y gestiona préstamos en cuotas. Vendedores en campo, cobradores, administración central — todos coordinando por WhatsApp y planillas de Excel. Crecieron y el sistema improvisado ya no daba.",
    problema:
      "Sin sistema centralizado, cada pago de cuota era una operación manual. Saber qué planes estaban activos, cuánto debía cada cliente, cuáles estaban en mora, o qué vendedor había cerrado qué operación requería revisar decenas de archivos distintos. Escalar así era imposible.",
    queAnalizamos:
      "Antes de diseñar una pantalla, mapeamos todos los flujos reales: cómo se asignaba un plan, cómo se registraba un pago, cómo se detectaba una mora, cómo gerencia veía el estado de la cartera. El sistema tenía que calzar con la forma en que trabajaba el equipo — no al revés.",
    queHicimos: [
      "Dashboard central con estado de cartera en tiempo real: planes activos, cuotas cobradas, alertas de morosidad",
      "Módulo completo de planes de ahorro: alta de plan, cronograma de cuotas, vencimientos y recordatorios automáticos",
      "Registro de pagos con historial completo por cliente y trazabilidad por operación",
      "Panel de equipo de ventas con métricas individuales y seguimiento de comisiones",
      "Control de stock de equipos y asignación por operación comercial",
      "Sistema de roles y permisos diferenciados: administración, vendedores y cobranza operan en vistas distintas",
    ],
    resultado:
      "El equipo abandonó las planillas. La administración dejó de depender de llamadas para saber el estado de la cartera. Cada operación — desde la venta hasta el último pago — queda registrada y trazable en un solo lugar.",
    stack: ["React", "MongoDB", "Express", "AWS"],
    en: {
      tipo: "Web System",
      industria: "Finance / Savings Plans",
      problema:
        "Without a centralized system, every installment payment was a manual operation. Knowing which plans were active, how much each client owed, which accounts were overdue, or which salesperson closed what deal meant going through dozens of different files. Scaling like that was impossible.",
      queHicimos: [
        "Central dashboard with real-time portfolio view: active plans, collected installments, overdue alerts",
        "Full savings plan module: plan creation, payment schedules, due dates, and automatic reminders",
        "Payment log with complete per-client history and full transaction traceability",
        "Sales team panel with individual metrics and commission tracking",
        "Equipment inventory management with assignment per commercial operation",
        "Role and permission system: admin, sales, and collections teams each see their own view",
      ],
      resultado:
        "The team abandoned spreadsheets entirely. Management stopped relying on phone calls to know portfolio status. Every operation — from sale to final payment — is logged and traceable in one place.",
    },
  },
  {
    slug: "fintech-mvp",
    cliente: "Fintech MVP",
    tipo: "Plataforma Web",
    industria: "Fintech / Inversiones",
    tagColor: "#1a6b52",
    acento: "#1a6b52",
    bg: "rgba(180,230,210,0.45)",
    imagen: "/works/fintech-mvp.webp",
    contexto:
      "Una startup de inversiones con idea clara y equipo técnico propio, pero sin producto para mostrar. Necesitaban un MVP funcional para validar con usuarios reales y presentar a inversores.",
    problema:
      "Tenían el modelo de negocio, tenían el pitch deck, pero no tenían nada que demostrar. En fintech, la confianza se construye con producto — no con slides.",
    queAnalizamos:
      "Un MVP de fintech no puede verse como prototipo. Tiene que transmitir seguridad desde el primer click. Trabajamos los flujos de autenticación, visualización de datos y simuladores pensando en el usuario que está poniendo plata real.",
    queHicimos: [
      "Landing persuasiva con propuesta de valor clara",
      "Dashboard con autenticación segura (OAuth 2.0)",
      "Visualización de portafolio con gráficos interactivos",
      "Simulador de rendimientos para que el usuario vea el potencial",
      "Historial de transacciones con filtros y exportación",
    ],
    resultado:
      "El MVP les permitió validar con usuarios reales y tener algo concreto para mostrar en rondas de inversión. No era solo un demo — era un producto funcional desde el día uno.",
    stack: ["TypeScript", "PostgreSQL", "Docker", "Redis"],
    en: {
      tipo: "Web Platform",
      industria: "Fintech / Investments",
      problema:
        "They had the business model, the pitch deck, but nothing to demonstrate. In fintech, trust is built with product — not slides.",
      queHicimos: [
        "Persuasive landing page with a clear value proposition",
        "Dashboard with secure authentication (OAuth 2.0)",
        "Portfolio visualization with interactive charts",
        "Returns simulator so users can see real potential",
        "Transaction history with filters and CSV export",
      ],
      resultado:
        "The MVP let them validate with real users and have something concrete for investment rounds. It wasn't just a demo — it was a functional product from day one.",
    },
  },
];

export function getCaso(slug: string): Caso | undefined {
  return CASOS.find((c) => c.slug === slug);
}

export function getCasoLocalized(
  caso: Caso,
  locale: "es" | "en"
): {
  tipo: string;
  industria: string;
  problema: string;
  queHicimos: string[];
  resultado: string;
} {
  if (locale === "en" && caso.en) {
    return {
      tipo: caso.en.tipo ?? caso.tipo,
      industria: caso.en.industria ?? caso.industria,
      problema: caso.en.problema,
      queHicimos: caso.en.queHicimos,
      resultado: caso.en.resultado,
    };
  }
  return {
    tipo: caso.tipo,
    industria: caso.industria,
    problema: caso.problema,
    queHicimos: caso.queHicimos,
    resultado: caso.resultado,
  };
}
 
