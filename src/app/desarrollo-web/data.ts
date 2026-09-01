import type { FaqItem } from "@/components/FaqBlock";

export type Provincia = {
  slug: string;
  nombre: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  localInsight: string;
  mainSectors: string;
  industrias: string[];
  faq: FaqItem[];
};

export const SERVICIO_LINKS = [
  {
    slug: "landing-page",
    nombre: "Landing Page y Web Institucional",
    precio: "USD 500 – 800",
    texto:
      "Presencia online de conversión para tu negocio: diseño, copy y desarrollo en 2 o 3 semanas.",
  },
  {
    slug: "ecommerce",
    nombre: "E-commerce",
    precio: "USD 900 – 1.500",
    texto:
      "Tienda propia con catálogo, pagos y panel de administración. Sin Shopify ni comisiones por venta.",
  },
  {
    slug: "sistemas-apps",
    nombre: "Sistema de Gestión a medida",
    precio: "desde USD 1.000",
    texto:
      "Software a medida para ordenar la operación: ERP, CRM, stock, turnos y facturación según tu negocio.",
  },
];

export const INDUSTRIA_LINKS: { slug: string; nombre: string }[] = [
  { slug: "restaurantes", nombre: "Restaurantes" },
  { slug: "construccion", nombre: "Constructoras" },
  { slug: "clinicas", nombre: "Clínicas" },
  { slug: "inmobiliarias", nombre: "Inmobiliarias" },
  { slug: "gimnasios", nombre: "Gimnasios" },
  { slug: "veterinarias", nombre: "Veterinarias" },
  { slug: "talleres", nombre: "Talleres" },
  { slug: "dentistas", nombre: "Dentistas" },
  { slug: "hoteles", nombre: "Hoteles" },
  { slug: "nutricionistas", nombre: "Nutricionistas" },
  { slug: "estudios-juridicos", nombre: "Estudios Jurídicos" },
  { slug: "ferreterias", nombre: "Ferreterías" },
  { slug: "concesionarias", nombre: "Concesionarias" },
];

export const PROVINCIAS: Provincia[] = [
  {
    slug: "caba",
    nombre: "Ciudad de Buenos Aires",
    seoTitle: "Desarrollo web en CABA",
    seoDescription:
      "Agencia de desarrollo web en Ciudad de Buenos Aires: landing pages, tiendas online y sistemas de gestión a medida para industrias y negocios porteños.",
    intro:
      "Diseñamos y desarrollamos webs y software a medida para negocios de la Ciudad de Buenos Aires: landing pages desde USD 500, e-commerce desde USD 900 y sistemas de gestión a medida desde USD 1.000. El proceso es 100% remoto, con una primera charla de diagnóstico gratuita.",
    mainSectors:
      "estudios jurídicos, inmobiliarias, clínicas, restaurantes y hoteles",
    localInsight:
      "En la Ciudad de Buenos Aires la competencia digital es la más alta del país: tu web compite contra marcas que llevan años invirtiendo en posicionamiento. Una página clara, rápida y con un mensaje directo es lo que te diferencia cuando el cliente compara tres presupuestos el mismo día.",
    industrias: ["estudios-juridicos", "inmobiliarias", "clinicas", "restaurantes", "hoteles"],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en CABA?",
        a: "Una landing page arranca en USD 500, una tienda online en USD 900 y un sistema de gestión a medida desde USD 1.000. El precio final depende del alcance y lo definimos en una charla de diagnóstico gratuita antes de cotizar.",
      },
      {
        q: "¿Trabajan de forma remota o necesitan vernos en Buenos Aires?",
        a: "Trabajamos 100% remoto con reuniones por videollamada, WhatsApp y avances continuos. El resultado es el mismo que en un proceso presencial: coordinamos por semana a lo largo de todo el proyecto.",
      },
      {
        q: "¿Desarrollan para mi industria en CABA?",
        a: "Sí. Desarrollamos landing pages, sitios institucionales y sistemas de gestión para estudios jurídicos, inmobiliarias, clínicas, restaurantes, hoteles y otros rubros de servicio. Cada proyecto se arma sobre cómo funciona tu negocio, no sobre plantillas.",
      },
      {
        q: "¿Hacen SEO para aparecer en Google y en los buscadores de IA?",
        a: "Sí. Cargamos SEO técnico desde el primer día: velocidad, estructura de datos (schema) y respuestas directas para que tu web aparezca tanto en Google como en ChatGPT, Perplexity y otros motores de IA que hoy recomiendan negocios.",
      },
      {
        q: "¿El sitio o el sistema queda en manos del negocio?",
        a: "Sí. Te enseñamos a editar el contenido, el sistema es tuyo sin licencias mensuales y no generamos dependencia. En el lanzamiento incluimos 30 días de soporte.",
      },
    ],
  },
  {
    slug: "buenos-aires",
    nombre: "Provincia de Buenos Aires",
    seoTitle: "Desarrollo web en Provincia de Buenos Aires",
    seoDescription:
      "Desarrollo web en Buenos Aires para industrias y negocios: landing pages, e-commerce y sistemas de gestión a medida. Precios claros y proceso remoto.",
    intro:
      "Ayudamos a empresas y emprendimientos de la Provincia de Buenos Aires a construir su presencia digital y ordenar su operación: landing pages desde USD 500, tiendas online desde USD 900 y sistemas de gestión a medida desde USD 1.000. Todo el proceso es remoto y coordinado por semana.",
    mainSectors:
      "restaurantes, clínicas, gimnasios, ferreterías y concesionarias",
    localInsight:
      "La provincia concentra la mayor parte de las pymes industriales y comerciales del país, y muchas todavía no tienen web propia o dependen solo de una ficha en redes. El modelo remoto que usamos nace pensando en eso: coordinamos con la misma cercanía estés donde estés, sin que la distancia afecte el presupuesto.",
    industrias: ["restaurantes", "clinicas", "gimnasios", "ferreterias", "concesionarias"],
    faq: [
      {
        q: "¿Cuánto cuesta una web para un negocio en la Provincia de Buenos Aires?",
        a: "Una landing page arranca en USD 500, un e-commerce en USD 900 (aprox. $800.000 ARS) y un sistema de gestión a medida desde USD 1.000. Antes de cotizar hacemos una charla gratis para entender qué necesita tu negocio.",
      },
      {
        q: "¿Tienen que viajar o es todo online?",
        a: "No viajamos: trabajamos 100% remoto con videollamadas, WhatsApp y avances semanales. Es más rápido y no encarece el proyecto.",
      },
      {
        q: "¿Para qué tipos de negocio desarrollan en la provincia de Buenos Aires?",
        a: "Desarrollamos para restaurantes, clínicas y consultorios, gimnasios, ferreterías, concesionarias, inmobiliarias y más. Si tu negocio atiende clientes o vende online, podemos ayudarte.",
      },
      {
        q: "¿Cargar los productos o el contenido después es complicado?",
        a: "No. El panel de administración está pensado para que cargues productos, precios, turnos o noticias sin saber programar, y te capacitamos para usarlo a tu ritmo.",
      },
      {
        q: "¿Qué incluye el desarrollo?",
        a: "Diseño UX, copy, desarrollo, SEO técnico básico, Analytics y 30 días de soporte post-lanzamiento. Sin costos ocultos y sin depender de plantillas genéricas.",
      },
    ],
  },
  {
    slug: "cordoba",
    nombre: "Córdoba",
    seoTitle: "Desarrollo web en Córdoba",
    seoDescription:
      "Desarrollo web y software a medida en Córdoba para industrias y negocios: landing pages, tiendas online y sistemas de gestión. Precios claros y proceso remoto.",
    intro:
      "Desarrollamos webs y software a medida para los negocios de Córdoba que quieren dejar de depender solo de Instagram o de planillas: landing pages desde USD 500, tiendas online desde USD 900 y sistemas de gestión desde USD 1.000. Acompañamos al cliente en cada paso, sin fricción.",
    mainSectors:
      "restaurantes, inmobiliarias, clínicas, talleres y constructoras",
    localInsight:
      "Córdoba es uno de los polos tecnológicos más fuertes del país, así que el listón visual está alto incluso para negocios de rubros tradicionales. Una web hecha a medida te permite estar a esa altura sin pagar los precios de las agencias grandes de capital.",
    industrias: ["restaurantes", "inmobiliarias", "clinicas", "talleres", "construccion"],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en Córdoba?",
        a: "Una landing page arranca en USD 500, un e-commerce en USD 900 y un sistema de gestión a medida desde USD 1.000. El presupuesto es cerrado y siempre surge de una charla previa gratuita.",
      },
      {
        q: "¿Trabajan con clientes de Córdoba de forma remota?",
        a: "Sí. Hacemos todo el proceso por videollamada y WhatsApp: diagnóstico, diseño, avances semanales y lanzamiento. Sin traslados y sin costo extra por distancia.",
      },
      {
        q: "¿Desarrollan para mi rubro en Córdoba?",
        a: "Sí. Tenemos experiencia con restaurantes, inmobiliarias, clínicas, talleres, constructoras, gimnasios y más. Antes de hablar de tecnología, entendemos cómo trabaja tu negocio.",
      },
      {
        q: "¿Qué diferencia hay entre una web a medida y una plantilla?",
        a: "Una plantilla se ve igual para todos y se adapta mal a tu operación. Una web a medida se construye sobre cómo funciona tu negocio y eso se nota en velocidad, posicionamiento y conversión.",
      },
      {
        q: "¿Me van a poder encontrar los clientes en Google?",
        a: "Ese es el objetivo. Incluimos SEO técnico para que tu web sea indexable y aparezca en Google, y estructura de respuestas para que también te recomienden los buscadores de IA.",
      },
    ],
  },
  {
    slug: "mendoza",
    nombre: "Mendoza",
    seoTitle: "Desarrollo web en Mendoza",
    seoDescription:
      "Desarrollo web en Mendoza para industrias y negocios: landing pages, tiendas online y sistemas de gestión a medida. Remoto, con precios claros y SEO incluido.",
    intro:
      "Construimos presencia digital y software a medida para los negocios de Mendoza: landing pages desde USD 500, e-commerce desde USD 900 y sistemas de gestión a medida desde USD 1.000. Trabajamos de forma remota con todo Mendoza, con avances semanales y comunicación directa.",
    mainSectors:
      "hoteles, restaurantes, constructoras, inmobiliarias y viñedos",
    localInsight:
      "El turismo y el retail mendocino se deciden cada vez más en Google o Instagram antes de que el cliente te llame. Una landing enfocada a tu rubro —vino, turismo, comercio— te deja un canal que convierte en consultas reales por WhatsApp las 24 horas.",
    industrias: ["hoteles", "restaurantes", "construccion", "inmobiliarias", "talleres"],
    faq: [
      {
        q: "¿Cuánto cuesta una web en Mendoza?",
        a: "Una landing page desde USD 500, una tienda online desde USD 900 y un sistema de gestión a medida desde USD 1.000. Siempre presupuestamos antes de arrancar y explicamos por qué es ese número.",
      },
      {
        q: "¿Trabajan remoto con negocios de Mendoza?",
        a: "Sí, todo el proceso es remoto por videollamada y WhatsApp, incluida la primera charla de diagnóstico gratuita. No hay diferencias de precio ni de calidad por la ubicación.",
      },
      {
        q: "¿Desarrollan para hoteles, bodegas o turismo en Mendoza?",
        a: "Sí. Trabajamos con hoteles, restaurantes, bodegas, inmobiliarias y negocios ligados al turismo: reservas, catálogos de productos y sistemas de gestión hechos a medida.",
      },
      {
        q: "¿Puedo tomar reservas o pedidos desde la web?",
        a: "Sí. Según el rubro integramos reservas de turnos, pedidos, pagos con MercadoPago o Stripe y panel de administración para que gestiones todo sin depender de terceros.",
      },
      {
        q: "¿Qué pasa si ya tengo una web que no anda?",
        a: "Arrancamos con una auditoría: vemos qué falla, qué conviene mantener y rediseñamos sobre eso. No tiramos el trabajo a la basura.",
      },
    ],
  },
  {
    slug: "neuquen",
    nombre: "Neuquén",
    seoTitle: "Desarrollo web en Neuquén",
    seoDescription:
      "Desarrollo web y software a medida en Neuquén para industrias y negocios: landing pages, e-commerce y sistemas de gestión. Proceso remoto y precios claros.",
    intro:
      "Trabajamos con los negocios de Neuquén en su presencia digital y en ordenar su operación: landing pages desde USD 500, tiendas online desde USD 900 y sistemas de gestión a medida desde USD 1.000. Empresas de servicio, constructoras y comercios de la provincia, con un proceso 100% remoto.",
    mainSectors:
      "constructoras, clínicas, concesionarias, hoteles y talleres",
    localInsight:
      "La provincia creció al ritmo de la energía y la construcción, y los proveedores de ese ecosistema comparan como compradores técnicos: necesitan ver escala, disponibilidad y cómo contactarte sin vueltas. Esa lógica es la que aplicamos en cada web de empresa, no un catálogo genérico.",
    industrias: ["construccion", "clinicas", "concesionarias", "hoteles", "talleres"],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en Neuquén?",
        a: "Una landing page desde USD 500, un e-commerce desde USD 900 y un sistema de gestión a medida desde USD 1.000. El precio se fija después de entender el alcance real de tu proyecto.",
      },
      {
        q: "¿Trabajan remoto con empresas de Neuquén?",
        a: "Sí. Todo el proyecto se coordina por videollamada y WhatsApp, con avances semanales. La distancia no afecta el presupuesto ni los plazos.",
      },
      {
        q: "¿Desarrollan para constructoras, clínicas o concesionarias en Neuquén?",
        a: "Sí. Tenemos módulos y experiencia con constructoras, clínicas, concesionarias, hoteles y talleres: sistemas de gestión para controlar obras, turnos, stock y facturación sin planillas.",
      },
      {
        q: "¿El sistema de gestión es mío o pago licencia?",
        a: "El software a medida es tuyo: no pagás licencia mensual ni costo por usuario. Es una inversión única que queda bajo tu control.",
      },
      {
        q: "¿Incluye SEO y Analytics?",
        a: "Sí, desde el día uno: SEO técnico, estructura de datos y Google Analytics 4 configurado para que sepas cuántos clientes te llegan desde Google o desde los buscadores de IA.",
      },
    ],
  },
  {
    slug: "santa-fe",
    nombre: "Santa Fe",
    seoTitle: "Desarrollo web en Santa Fe",
    seoDescription:
      "Desarrollo web en Santa Fe para industrias y negocios: landing pages, tiendas online y sistemas de gestión a medida. Remoto, con precios claros y SEO desde el día uno.",
    intro:
      "Desarrollamos webs y software a medida para negocios e industrias de Santa Fe: landing pages desde USD 500, e-commerce desde USD 900 y sistemas de gestión desde USD 1.000. Proceso remoto y coordinado por semana, desde la charla de diagnóstico hasta el lanzamiento.",
    mainSectors:
      "constructoras, inmobiliarias, restaurantes, gimnasios y ferreterías",
    localInsight:
      "Entre Rosario, Santa Fe capital y el interior, la agroindustria y el comercio regional manejan volúmenes que el papel y el Excel ya no aguantan. Un e-commerce o un sistema de gestión a medida te devuelve horas reales de operación cada semana.",
    industrias: ["construccion", "inmobiliarias", "restaurantes", "gimnasios", "ferreterias"],
    faq: [
      {
        q: "¿Cuánto cuesta una web en Santa Fe?",
        a: "Una landing page desde USD 500, una tienda online desde USD 900 y un sistema de gestión a medida desde USD 1.000. El presupuesto final depende del alcance y llega después de una charla gratuita.",
      },
      {
        q: "¿Trabajan con clientes de Santa Fe de forma remota?",
        a: "Sí. Coordinamos todo por videollamada y WhatsApp, con avances continuos. Es igual de importante la comodidad que el resultado.",
      },
      {
        q: "¿Para qué industrias desarrollan en Santa Fe?",
        a: "Trabajamos con constructoras, inmobiliarias, restaurantes, gimnasios, ferreterías y otros rubros de servicio. Primero entendemos tu operación y después proponemos la solución.",
      },
      {
        q: "¿Puedo editar la web yo mismo?",
        a: "Sí. Te enseñamos a modificar textos, precios y productos desde un panel simple, sin programar, y no generamos dependencia si querés manejarte solo.",
      },
      {
        q: "¿Qué hace falta para arrancar?",
        a: "Solo una charla de diagnóstico gratuita de unos minutos. Ahí definimos qué necesitás, el alcance y el presupuesto cerrado antes de escribir una línea de código.",
      },
    ],
  },
  {
    slug: "salta",
    nombre: "Salta",
    seoTitle: "Desarrollo web en Salta",
    seoDescription:
      "Desarrollo web en Salta para industrias y negocios: landing pages, tiendas online y sistemas de gestión a medida. Proceso remoto, precios claros y SEO técnico.",
    intro:
      "Ayudamos a los negocios de Salta a construirse una presencia digital seria y a ordenar su operación: landing pages desde USD 500, e-commerce desde USD 900 y sistemas de gestión a medida desde USD 1.000. Entendemos la forma de trabajar del norte y proponemos tecnología simple que se usa de verdad.",
    mainSectors:
      "hoteles, restaurantes, clínicas, inmobiliarias y gimnasios",
    localInsight:
      "En el norte la demanda de servicios digitales crece más rápido que la oferta de agencias locales con experiencia real. Trabajamos a distancia con precios nacionales, pero con sitios pensados para cómo se compra y se vende acá, no para un template genérico.",
    industrias: ["hoteles", "restaurantes", "clinicas", "inmobiliarias", "gimnasios"],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en Salta?",
        a: "Una landing page desde USD 500, una tienda online desde USD 900 y un sistema de gestión a medida desde USD 1.000. Cotizamos siempre después de una charla de diagnóstico gratuita.",
      },
      {
        q: "¿Trabajan remoto con negocios de Salta?",
        a: "Sí. Hacemos el proceso completo por videollamada y WhatsApp, con avances semanales y comunicación directa con el equipo que desarrolla.",
      },
      {
        q: "¿Desarrollan para turismo, hoteles y restauración en Salta?",
        a: "Sí. Trabajamos con hoteles, restaurantes, agencias de turismo, clínicas, inmobiliarias y gimnasios: webs que convierten y sistemas que ordenan la operación diaria.",
      },
      {
        q: "¿Por qué conviene una web en vez de vender solo por Instagram?",
        a: "Porque una web es un canal propio: aparece en Google, genera confianza, puede tomar reservas o pedidos las 24 horas y no depende de los cambios de algoritmo de las redes.",
      },
      {
        q: "¿Incluyen soporte después del lanzamiento?",
        a: "Sí, 30 días de soporte incluidos, con disponibilidad por WhatsApp. Después podés seguir con el plan de mantenimiento o manejarte solo con la capacitación que te dejamos.",
      },
    ],
  },
  {
    slug: "tucuman",
    nombre: "Tucumán",
    seoTitle: "Desarrollo web en Tucumán",
    seoDescription:
      "Desarrollo web y software a medida en Tucumán para industrias y negocios: landing pages, tiendas online y sistemas de gestión. Remoto, con precios claros.",
    intro:
      "Desarrollamos webs y software a medida para los negocios de Tucumán: landing pages desde USD 500, tiendas online desde USD 900 y sistemas de gestión a medida desde USD 1.000. Desde el diagnóstico hasta el lanzamiento, todo el proceso es remoto y coordinado por semana.",
    mainSectors:
      "restaurantes, clínicas, inmobiliarias, gimnasios y constructoras",
    localInsight:
      "Tucumán tiene una economía diversa —agro, salud, comercio, industria— y gran parte de las decisiones se toman por recomendación o por lo que se ve en Google. Una web bien hecha, rápida y localizada te vuelve la opción seria cuando te están buscando.",
    industrias: ["restaurantes", "clinicas", "inmobiliarias", "gimnasios", "construccion"],
    faq: [
      {
        q: "¿Cuánto cuesta una web en Tucumán?",
        a: "Una landing page desde USD 500, una tienda online desde USD 900 y un sistema de gestión a medida desde USD 1.000. Antes de cotizar te escuchamos para entender qué necesita tu negocio.",
      },
      {
        q: "¿Trabajan remoto con negocios de Tucumán?",
        a: "Sí. Coordinamos todo por videollamada y WhatsApp, con avances semanales. No hace falta que viajes ni que recibas a nadie: el proceso es cómodo y ordenado.",
      },
      {
        q: "¿Desarrollan para mi rubro en Tucumán?",
        a: "Sí. Tenemos experiencia con restaurantes, clínicas, inmobiliarias, gimnasios, constructoras y otros rubros. La tecnología se propone después de entender cómo trabajás hoy.",
      },
      {
        q: "¿Qué es un sistema de gestión a medida y para qué me sirve?",
        a: "Software construido para tu operación: turnos, stock, facturación, usuarios. Sirve para dejar las planillas y el desorden, y no se paga licencia mensual: es tuyo.",
      },
      {
        q: "¿Cuánto tarda un proyecto?",
        a: "Una landing page tarda 2 a 3 semanas; una tienda online, 6 a 10 semanas; un sistema de gestión, según el alcance. Siempre te damos plazos claros antes de arrancar.",
      },
    ],
  },
  {
    slug: "catamarca",
    nombre: "Catamarca",
    seoTitle: "Desarrollo web en Catamarca",
    seoDescription:
      "Desarrollo web y software a medida en Catamarca para industrias y negocios del NOA: landing pages, tiendas online y sistemas de gestión. Remoto, con precios claros y SEO incluido.",
    intro:
      "Construimos webs y software a medida para los negocios de Catamarca: landing pages desde USD 500, tiendas online desde USD 900 y sistemas de gestión a medida desde USD 1.000. Somos un equipo con raíces en el noroeste argentino y coordinamos todo 100% remoto, con precios claros y sin costos por distancia.",
    mainSectors:
      "hoteles, restaurantes, clínicas, inmobiliarias y comercios",
    localInsight:
      "En Catamarca y en el interior del NOA la oferta de servicios digitales es escasa y muchas pymes todavía venden solo por redes o de boca en boca. Una web propia, rápida y bien posicionada le gana visibilidad a cualquier ficha de Instagram, sobre todo en turismo, gastronomía y comercio de cercanía, donde la competencia va a seguir creciendo.",
    industrias: ["hoteles", "restaurantes", "clinicas", "gimnasios", "inmobiliarias"],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en Catamarca?",
        a: "Una landing page arranca en USD 500, una tienda online en USD 900 y un sistema de gestión a medida desde USD 1.000. El presupuesto, cerrado y por escrito, llega después de una charla de diagnóstico gratuita.",
      },
      {
        q: "¿Trabajan remoto con negocios de Catamarca?",
        a: "Sí. Todo el proceso es remoto por videollamada y WhatsApp, con avances semanales y comunicación directa con el equipo que desarrolla. No hace falta que viajes y el costo no cambia por la distancia.",
      },
      {
        q: "¿Desarrollan para mi rubro en Catamarca?",
        a: "Sí. Trabajamos con hoteles, restaurantes, clínicas, gimnasios, inmobiliarias y comercios del interior. Antes de hablar de tecnología entendemos cómo se maneja tu negocio hoy.",
      },
      {
        q: "¿Puedo arrancar con una landing y crecer después?",
        a: "Sí. Muchos clientes empiezan con una landing o web institucional y suman después el e-commerce o el sistema de gestión cuando el negocio lo pide. Todo queda bajo tu dominio, sin depender de plantillas.",
      },
      {
        q: "¿Qué incluye el desarrollo y el soporte?",
        a: "Diseño UX, copy, desarrollo, SEO técnico, Analytics y 30 días de soporte post-lanzamiento por WhatsApp. También te capacitamos para editar el contenido vos mismo.",
      },
    ],
  },
  {
    slug: "entre-rios",
    nombre: "Entre Ríos",
    seoTitle: "Desarrollo web en Entre Ríos",
    seoDescription:
      "Desarrollo web en Entre Ríos para negocios e industrias: landing pages, tiendas online y sistemas de gestión a medida. Turismo termal, agro y comercio, con proceso 100% remoto.",
    intro:
      "Desarrollamos webs y software a medida para los negocios de Entre Ríos: landing pages desde USD 500, tiendas online desde USD 900 y sistemas de gestión a medida desde USD 1.000. Trabajamos remoto con todo el litoral —Paraná, Gualeguaychú, Concordia, Colón— con avances semanales y presupuesto cerrado.",
    mainSectors:
      "hoteles, restaurantes, inmobiliarias, clínicas y ferreterías",
    localInsight:
      "Entre el turismo termal y de fin de semana largo y una economía agroindustrial fuerte, los negocios entrerrianos venden cada vez más por Google: el cliente busca alojamiento, reservas y productos antes de llamar. Una landing enfocada a tu rubro convierte esa búsqueda en consultas concretas por WhatsApp las 24 horas.",
    industrias: ["hoteles", "restaurantes", "inmobiliarias", "clinicas", "ferreterias"],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en Entre Ríos?",
        a: "Una landing page arranca en USD 500 (aprox. $300.000 ARS), un e-commerce en USD 900 y un sistema a medida desde USD 1.000. El presupuesto es cerrado y surge de una charla gratuita previa.",
      },
      {
        q: "¿Trabajan con clientes de Entre Ríos de forma remota?",
        a: "Sí. El proceso es 100% remoto por videollamada y WhatsApp, con coordinación semanal. No hay costo extra por distancia y trabajamos con negocios de todas las ciudades de la provincia.",
      },
      {
        q: "¿Desarrollan para mi rubro en Entre Ríos?",
        a: "Sí. Trabajamos con hoteles y cabañas, restaurantes, inmobiliarias, clínicas y ferreterías. Cada proyecto se arma sobre cómo funciona tu negocio, no sobre plantillas genéricas.",
      },
      {
        q: "¿Puedo tomar reservas o turnos desde la web?",
        a: "Sí. Según el rubro integramos reservas de alojamiento, turnos, pedidos y pagos con MercadoPago o Stripe, todo administrable desde un panel simple sin saber programar.",
      },
      {
        q: "¿Cuánto tarda un proyecto?",
        a: "Una landing page tarda 2 a 3 semanas y una tienda online entre 6 y 10 semanas. Siempre te damos plazos claros antes de arrancar e incluimos 30 días de soporte post-lanzamiento.",
      },
    ],
  },
  {
    slug: "chaco",
    nombre: "Chaco",
    seoTitle: "Desarrollo web en Chaco",
    seoDescription:
      "Desarrollo web y software a medida en Chaco para industrias y negocios: landing pages, tiendas online y sistemas de gestión. Remoto, con precios claros y SEO técnico.",
    intro:
      "Ayudamos a los negocios del Chaco a construirse una presencia digital seria y a ordenar su operación: landing pages desde USD 500, tiendas online desde USD 900 y sistemas de gestión a medida desde USD 1.000. Desde Resistencia y todo el interior del Chaco, con un proceso 100% remoto y comunicación directa.",
    mainSectors:
      "gimnasios, clínicas, concesionarias, ferreterías y restaurantes",
    localInsight:
      "El Chaco tiene una economía agroganadera, forestal y comercial en la que muchas pymes del interior todavía resuelven todo en papel o planillas. Un sistema de gestión a medida o una tienda online te devuelve horas reales de operación cada semana, y una web bien posicionada te vuelve la opción seria cuando te están buscando.",
    industrias: ["gimnasios", "clinicas", "concesionarias", "ferreterias", "restaurantes"],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en Chaco?",
        a: "Una landing page desde USD 500, un e-commerce desde USD 900 y un sistema de gestión a medida desde USD 1.000. Siempre presupuestamos después de entender el alcance real de tu proyecto.",
      },
      {
        q: "¿Trabajan remoto con negocios del Chaco?",
        a: "Sí, todo el proyecto se coordina por videollamada y WhatsApp con avances semanales. La distancia no afecta el presupuesto ni los plazos.",
      },
      {
        q: "¿Para qué rubros desarrollan en el Chaco?",
        a: "Trabajamos con gimnasios, clínicas, concesionarias, ferreterías, restaurantes y otros rubros de servicio. Primero entendemos tu operación y después proponemos la solución.",
      },
      {
        q: "¿El sistema de gestión queda en manos del negocio?",
        a: "Sí. El software a medida es tuyo, sin licencias mensuales ni costo por usuario. Te capacitamos para usarlo y no generamos dependencia si después querés manejarte solo.",
      },
      {
        q: "¿Puedo editar la web yo mismo?",
        a: "Sí. Te enseñamos a modificar textos, precios y productos desde un panel simple, sin programar, e incluimos 30 días de soporte post-lanzamiento por WhatsApp.",
      },
    ],
  },
  {
    slug: "misiones",
    nombre: "Misiones",
    seoTitle: "Desarrollo web en Misiones",
    seoDescription:
      "Desarrollo web en Misiones para negocios del turismo y la región: landing pages, tiendas online y sistemas de gestión a medida. Posadas e Iguazú, con proceso 100% remoto.",
    intro:
      "Desarrollamos webs y software a medida para los negocios de Misiones: landing pages desde USD 500, tiendas online desde USD 900 y sistemas de gestión a medida desde USD 1.000. Trabajamos con Posadas, Puerto Iguazú, Oberá y todo el interior, 100% remoto y coordinado por semana.",
    mainSectors:
      "hoteles, restaurantes, clínicas, inmobiliarias y gimnasios",
    localInsight:
      "Misiones vive del turismo —las cataratas del Iguazú mueven visitantes todo el año— y de la producción de yerba, té y madera. Los negocios que reciben turistas o venden a distancia necesitan una web seria: reservas online, menú digital y presencia en Google son lo que separa a un lugar que llena las mesas de uno que solo aparece en Instagram.",
    industrias: ["hoteles", "restaurantes", "clinicas", "inmobiliarias", "gimnasios"],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en Misiones?",
        a: "Una landing page desde USD 500, una tienda online desde USD 900 y un sistema a medida desde USD 1.000. El presupuesto es cerrado y surge de una charla de diagnóstico gratuita antes de cotizar.",
      },
      {
        q: "¿Trabajan remoto con negocios de Misiones?",
        a: "Sí. Coordinamos todo por videollamada y WhatsApp, con avances semanales. No hace falta que recibas a nadie y no hay costo extra por distancia.",
      },
      {
        q: "¿Desarrollan para mi rubro en Misiones?",
        a: "Sí. Tenemos experiencia con hoteles y cabañas, restaurantes, agencias de turismo, clínicas, inmobiliarias, gimnasios y comercios de la región.",
      },
      {
        q: "¿Puedo tomar reservas desde la web?",
        a: "Sí. Para alojamiento y gastronomía integramos reservas, menú digital y pagos con MercadoPago o Stripe, todo administrable desde un panel simple.",
      },
      {
        q: "¿Incluye SEO para que me encuentren en Google?",
        a: "Sí, desde el día uno: SEO técnico, estructura de datos y Google Analytics 4 configurado para que sepas cuántos clientes te llegan desde Google o desde los buscadores de IA. Además 30 días de soporte post-lanzamiento.",
      },
    ],
  },
];