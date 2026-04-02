/**
 * DIAGNOSTICO ENGINE — UXnicorp
 *
 * Motor completo del diagnóstico digital interactivo.
 * Contiene: rubros, preguntas adaptativas, reglas de scoring y generador de outputs.
 *
 * FLUJO:
 *   1. El usuario elige rubro → subtipo → objetivo → estado → preguntas específicas
 *   2. Cada respuesta suma puntos a scores (captacion, ventas_online, automatizacion, complejidad)
 *   3. El motor cruza scores + perfil → genera output con solución + problemas + oportunidades + estrategia
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. RUBROS
// ─────────────────────────────────────────────────────────────────────────────

export const RUBROS = [
  {
    id: 'servicios_profesionales',
    label: 'Servicios Profesionales',
    emoji: '💼',
    descripcion: 'Arquitectura, abogados, contadores, consultores, salud',
    subtipos: [
      { id: 'arquitectura',  label: 'Arquitectura / Diseño de interiores' },
      { id: 'legal',         label: 'Abogados / Estudio jurídico' },
      { id: 'contabilidad',  label: 'Contadores / Finanzas' },
      { id: 'consultoria',   label: 'Consultoría / Coaching' },
      { id: 'salud',         label: 'Salud / Psicología / Nutrición' },
      { id: 'otros_servicios', label: 'Otro servicio profesional' },
    ],
  },
  {
    id: 'gastronomia',
    label: 'Gastronomía',
    emoji: '🍽️',
    descripcion: 'Restaurantes, deliveries, cafeterías, bares',
    subtipos: [
      { id: 'restaurante', label: 'Restaurante / Parrilla' },
      { id: 'delivery',    label: 'Delivery / Dark kitchen' },
      { id: 'cafeteria',   label: 'Cafetería / Bar / Cervecería' },
      { id: 'catering',    label: 'Catering / Eventos gastronómicos' },
    ],
  },
  {
    id: 'comercio',
    label: 'Comercio y Retail',
    emoji: '🛒',
    descripcion: 'Tiendas físicas, productos físicos o digitales',
    subtipos: [
      { id: 'tienda_fisica',   label: 'Tienda física (ropa, accesorios, etc.)' },
      { id: 'productos_propios', label: 'Productos propios para vender online' },
      { id: 'distribuidor',    label: 'Distribuidor / Mayorista' },
      { id: 'digital_products', label: 'Productos digitales (ebooks, templates)' },
    ],
  },
  {
    id: 'educacion',
    label: 'Educación y Formación',
    emoji: '🎓',
    descripcion: 'Cursos, academias, coaches, capacitaciones',
    subtipos: [
      { id: 'cursos_online',  label: 'Cursos online / Plataforma educativa' },
      { id: 'academia',       label: 'Academia / Instituto presencial' },
      { id: 'clases_part',    label: 'Clases particulares / Tutorías' },
      { id: 'capacitaciones', label: 'Capacitaciones empresariales (B2B)' },
    ],
  },
  {
    id: 'marca_personal',
    label: 'Marca Personal',
    emoji: '🌟',
    descripcion: 'Influencers, creadores, emprendedores individuales',
    subtipos: [
      { id: 'creador_contenido', label: 'Creador de contenido / Influencer' },
      { id: 'coach',             label: 'Coach / Mentor' },
      { id: 'freelance',         label: 'Freelancer (diseño, foto, dev, etc.)' },
      { id: 'artista',           label: 'Artista / Músico / Fotógrafo' },
    ],
  },
  {
    id: 'empresa_b2b',
    label: 'Empresa / B2B',
    emoji: '🏢',
    descripcion: 'Empresas medianas/grandes, proveedores, industria',
    subtipos: [
      { id: 'pyme',         label: 'PyME / Empresa mediana' },
      { id: 'industria',    label: 'Industria / Manufactura' },
      { id: 'tech',         label: 'Empresa tecnológica / Software' },
      { id: 'inmobiliaria', label: 'Inmobiliaria / Real Estate' },
    ],
  },
  {
    id: 'turismo',
    label: 'Turismo y Hospitalidad',
    emoji: '✈️',
    descripcion: 'Hoteles, agencias, guías de turismo',
    subtipos: [
      { id: 'hotel',         label: 'Hotel / Hostel / Cabaña' },
      { id: 'agencia_viajes', label: 'Agencia de viajes' },
      { id: 'turismo_local',  label: 'Turismo local / Excursiones' },
    ],
  },
  {
    id: 'bienestar',
    label: 'Bienestar y Fitness',
    emoji: '🏋️',
    descripcion: 'Gimnasios, spas, yoga, entrenamiento',
    subtipos: [
      { id: 'gimnasio',    label: 'Gimnasio / CrossFit / Box' },
      { id: 'spa_belleza', label: 'Spa / Peluquería / Centro de belleza' },
      { id: 'entrenador',  label: 'Entrenador personal / Yoga / Pilates' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. PREGUNTAS COMUNES (se hacen a todos los rubros, adaptando el lenguaje)
// ─────────────────────────────────────────────────────────────────────────────

export const PREGUNTAS_COMUNES = [
  {
    id: 'objetivo',
    pregunta: '¿Cuál es tu objetivo principal?',
    subtexto: 'Elegí el que más se acerca a lo que buscás',
    consejo: 'Esto orienta toda la recomendación. No te preocupes si tenés varios objetivos, elegí el más urgente por ahora.',
    tipo: 'single',
    opciones: [
      { id: 'conseguir_clientes', label: 'Conseguir más clientes', score: { captacion: 3 } },
      { id: 'vender_online',      label: 'Vender mis productos/servicios online', score: { ventas_online: 4 } },
      { id: 'automatizar',        label: 'Automatizar y ordenar mis procesos internos', score: { automatizacion: 4 } },
      { id: 'imagen_marca',       label: 'Mejorar mi imagen y presencia de marca', score: { captacion: 2 } },
      { id: 'escalar',            label: 'Escalar el negocio (tengo operación pero quiero crecer)', score: { automatizacion: 2, captacion: 2, complejidad: 2 } },
      { id: 'todo',               label: 'Todo lo anterior (tengo varios objetivos)', score: { captacion: 2, ventas_online: 2, automatizacion: 2, complejidad: 3 } },
    ],
  },
  {
    id: 'estado_negocio',
    pregunta: '¿En qué etapa está tu negocio?',
    subtexto: 'Esto afecta mucho qué tipo de solución te conviene',
    consejo: 'No importa si estás empezando o llevás años. Esto me ayuda a ver qué tan urgente es cada paso y desde dónde arrancamos.',
    tipo: 'single',
    opciones: [
      { id: 'idea',        label: 'Es una idea, aún no lancé', score: { captacion: 1 } },
      { id: 'empezando',   label: 'Empecé hace poco (menos de 1 año)', score: { captacion: 2 } },
      { id: 'funcionando', label: 'Ya funciona y tengo clientes', score: { captacion: 1, automatizacion: 1 } },
      { id: 'creciendo',   label: 'Estoy creciendo y necesito escalar', score: { automatizacion: 2, complejidad: 2 } },
    ],
  },
  {
    id: 'presencia_digital',
    pregunta: '¿Cómo es tu presencia digital hoy?',
    subtexto: 'No juzgamos, esto nos ayuda a entender el punto de partida',
    consejo: 'Saber qué ya tenés evita recomendarte algo que ya existe o que no suma valor real todavía. No hay respuesta incorrecta acá.',
    tipo: 'single',
    opciones: [
      { id: 'nada',         label: 'No tengo nada todavía', score: { captacion: 2 } },
      { id: 'solo_redes',   label: 'Solo redes sociales (Instagram, Facebook, etc.)', score: { captacion: 2 } },
      { id: 'web_basica',   label: 'Tengo una web básica que no convierte', score: { captacion: 1 } },
      { id: 'web_ok',       label: 'Tengo web pero quiero mejorarla', score: {} },
      { id: 'algo_avanzado', label: 'Ya tengo sistema/web avanzada', score: { automatizacion: 1 } },
    ],
  },
  {
    id: 'gestion_actual',
    pregunta: '¿Cómo gestionás tu negocio hoy?',
    subtexto: 'Pensá en ventas, clientes, turnos, pedidos, stock, etc.',
    consejo: 'Cómo gestionás hoy define qué puede automatizarse. Muchos negocios pierden horas por semana en tareas que un buen sistema resuelve en segundos.',
    tipo: 'single',
    opciones: [
      { id: 'manual_todo',    label: 'Todo manual o en papel', score: { automatizacion: 4 } },
      { id: 'excel_wasap',    label: 'Excel + WhatsApp', score: { automatizacion: 3 } },
      { id: 'apps_sueltas',   label: 'Uso apps sueltas (Sheets, Drive, Notion, etc.)', score: { automatizacion: 2 } },
      { id: 'sistema_basico', label: 'Tengo algún sistema pero muy básico', score: { automatizacion: 1 } },
      { id: 'sistema_ok',     label: 'Tengo un sistema que funciona bien', score: {} },
    ],
  },
  {
    id: 'volumen',
    pregunta: '¿Cuántos clientes o transacciones manejás por mes?',
    subtexto: 'Estimado, no hace falta ser exacto',
    consejo: 'El volumen define la escala de la solución. No es lo mismo atender 10 clientes por mes que 300: cambia la complejidad técnica y el presupuesto que hace sentido.',
    tipo: 'single',
    opciones: [
      { id: 'pocos',    label: 'Menos de 20', score: {} },
      { id: 'medio',    label: 'Entre 20 y 100', score: { automatizacion: 1 } },
      { id: 'alto',     label: 'Más de 100', score: { automatizacion: 3, complejidad: 2 } },
      { id: 'muy_alto', label: 'Más de 500 (alto volumen)', score: { automatizacion: 4, complejidad: 3 } },
    ],
  },
  {
    id: 'presupuesto',
    pregunta: '¿Tenés una idea del presupuesto que podés invertir?',
    subtexto: 'Esto nos ayuda a recomendarte la opción más realista para tu caso',
    consejo: 'Hay buenas soluciones para cada presupuesto. Ser realistas acá hace que la recomendación sea concreta y aplicable, no solo aspiracional.',
    tipo: 'single',
    opciones: [
      { id: 'bajo',      label: 'Menos de $200 USD', score: { presupuesto_nivel: 1 } },
      { id: 'medio',     label: 'Entre $200 y $800 USD', score: { presupuesto_nivel: 2 } },
      { id: 'medio_alto', label: 'Entre $800 y $2000 USD', score: { presupuesto_nivel: 3 } },
      { id: 'alto',      label: 'Más de $2000 USD', score: { presupuesto_nivel: 4 } },
      { id: 'no_se',     label: 'No lo tengo claro aún', score: { presupuesto_nivel: 2 } },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. PREGUNTAS ESPECÍFICAS POR RUBRO (capa 2 adaptativa)
// ─────────────────────────────────────────────────────────────────────────────

export const PREGUNTAS_POR_RUBRO = {
  servicios_profesionales: [
    {
      id: 'sp_muestra_portfolio',
      pregunta: '¿Necesitás mostrar tu trabajo o casos de éxito?',
      subtexto: 'Proyectos, causas ganadas, estudios contables, etc.',
      consejo: 'Mostrar trabajo real y resultados concretos genera confianza automáticamente. En servicios profesionales, la prueba social lo es todo.',
      tipo: 'single',
      opciones: [
        { id: 'si',       label: 'Sí, eso es clave para mí', score: { captacion: 2 } },
        { id: 'no',       label: 'No, mi servicio es más intangible', score: {} },
        { id: 'tal_vez',  label: 'Podría sumar pero no es lo principal', score: { captacion: 1 } },
      ],
    },
    {
      id: 'sp_turnos',
      pregunta: '¿Tus clientes necesitan sacar turnos o agendar consultas?',
      subtexto: 'Reuniones, visitas, consultas, asesoramientos',
      consejo: 'Los turnos son el punto de dolor número uno en servicios profesionales. Esta respuesta puede cambiar completamente lo que te recomendamos.',
      tipo: 'single',
      opciones: [
        { id: 'si_clave',    label: 'Sí, y eso me consume mucho tiempo gestionarlo', score: { automatizacion: 3, captacion: 1 } },
        { id: 'si_menor',    label: 'Sí pero no es un problema hoy', score: { automatizacion: 1 } },
        { id: 'no',          label: 'No, trabajo por proyectos o contratos', score: {} },
      ],
    },
  ],

  gastronomia: [
    {
      id: 'gas_pedidos',
      pregunta: '¿Recibís pedidos de clientes (para llevar o delivery)?',
      subtexto: 'Más allá de la atención en el local',
      consejo: 'Los pedidos online pueden multiplicar los ingresos de un negocio gastronómico bien optimizado. Pero hay que evaluar si es el paso correcto ahora.',
      tipo: 'single',
      opciones: [
        { id: 'si_mucho',  label: 'Sí, es una parte importante del negocio', score: { ventas_online: 3, automatizacion: 2 } },
        { id: 'si_poco',   label: 'Sí, pero poco y de forma desordenada', score: { ventas_online: 2, automatizacion: 3 } },
        { id: 'no',        label: 'No, solo atención en el local', score: { captacion: 2 } },
      ],
    },
    {
      id: 'gas_reservas',
      pregunta: '¿Gestionás reservas de mesa?',
      consejo: 'Automatizar las reservas elimina llamadas, WhatsApps y errores humanos. Libera tiempo para concentrarte en atender bien a quien ya está en el local.',
      tipo: 'single',
      opciones: [
        { id: 'si_manual',   label: 'Sí, pero de forma manual o por WhatsApp', score: { automatizacion: 3 } },
        { id: 'si_sistema',  label: 'Sí, ya tengo sistema de reservas', score: {} },
        { id: 'no',          label: 'No manejamos reservas', score: {} },
      ],
    },
  ],

  comercio: [
    {
      id: 'com_stock',
      pregunta: '¿Necesitás gestionar stock de productos?',
      consejo: 'Si lidiás con stock, cambia todo. Necesitás más que una web: necesitás un sistema que lleve el control en tiempo real para no vender lo que no tenés.',
      tipo: 'single',
      opciones: [
        { id: 'si_muchos',  label: 'Sí, tengo muchos productos y es un caos', score: { automatizacion: 4, complejidad: 2 } },
        { id: 'si_pocos',   label: 'Sí, pero son pocos productos', score: { automatizacion: 2 } },
        { id: 'no',         label: 'No tengo stock físico (productos digitales)', score: { ventas_online: 2 } },
      ],
    },
    {
      id: 'com_pagos',
      pregunta: '¿Necesitás aceptar pagos online?',
      consejo: 'Los pagos online reducen la fricción de compra y habilitan ventas mientras dormís. Requieren integraciones que suman al costo, pero el retorno suele justificarlo.',
      tipo: 'single',
      opciones: [
        { id: 'si_urgente', label: 'Sí, es imprescindible', score: { ventas_online: 4 } },
        { id: 'si_futuro',  label: 'En el futuro sí, hoy no', score: { ventas_online: 2 } },
        { id: 'no',         label: 'No, solo quiero mostrar productos', score: {} },
      ],
    },
  ],

  educacion: [
    {
      id: 'edu_cursos_grabados',
      pregunta: '¿Tus cursos son grabados o en tiempo real?',
      consejo: 'Los cursos grabados son ingresos que trabajan solos. Pero necesitan una plataforma diferente a una web institucional. Esta respuesta determina casi todo.',
      tipo: 'single',
      opciones: [
        { id: 'grabados',   label: 'Grabados (asincrónico)', score: { ventas_online: 2, complejidad: 2 } },
        { id: 'live',       label: 'En vivo (clases sincrónicas)', score: { captacion: 2, automatizacion: 2 } },
        { id: 'mixto',      label: 'Mixto', score: { complejidad: 3, ventas_online: 2 } },
        { id: 'presencial', label: 'Presencial', score: { captacion: 3 } },
      ],
    },
    {
      id: 'edu_pagos_recurrentes',
      pregunta: '¿Necesitás cobrar membresías o suscripciones?',
      consejo: 'Los ingresos recurrentes son el sueño de cualquier formador. Pero implican mayor complejidad técnica y una estrategia de retención bien pensada.',
      tipo: 'single',
      opciones: [
        { id: 'si',      label: 'Sí, o me gustaría hacerlo', score: { ventas_online: 3, complejidad: 3 } },
        { id: 'no',      label: 'No, cobro por curso o paquete único', score: { ventas_online: 2 } },
        { id: 'tal_vez', label: 'Tal vez en el futuro', score: { ventas_online: 1, complejidad: 1 } },
      ],
    },
  ],

  marca_personal: [
    {
      id: 'mp_monetizacion',
      pregunta: '¿Cómo monetizás (o querés monetizar)?',
      consejo: 'Cada modelo de monetización necesita una solución digital diferente. Esta respuesta sola puede cambiar completamente lo que te recomendamos.',
      tipo: 'single',
      opciones: [
        { id: 'servicios',      label: 'Servicios o consultorías personales', score: { captacion: 3 } },
        { id: 'productos_dig',  label: 'Productos digitales (cursos, ebooks)', score: { ventas_online: 3 } },
        { id: 'contenido',      label: 'Contenido / patrocinios / afiliados', score: { captacion: 2 } },
        { id: 'todo',           label: 'Combinación de varias', score: { captacion: 2, ventas_online: 2, complejidad: 2 } },
      ],
    },
    {
      id: 'mp_audiencia',
      pregunta: '¿Tenés audiencia en redes sociales?',
      tipo: 'single',
      opciones: [
        { id: 'si_grande',   label: 'Sí, bastante grande (+10k)', score: { captacion: 1, ventas_online: 2 } },
        { id: 'si_pequena',  label: 'Sí pero pequeña (menos de 10k)', score: { captacion: 2 } },
        { id: 'construyendo', label: 'Estoy construyéndola', score: { captacion: 3 } },
        { id: 'no',          label: 'No, arranco desde cero', score: { captacion: 3 } },
      ],
    },
  ],

  empresa_b2b: [
    {
      id: 'b2b_empleados',
      pregunta: '¿Cuántos usuarios internos necesitan acceso al sistema?',
      tipo: 'single',
      opciones: [
        { id: 'solo_yo',   label: 'Solo yo', score: {} },
        { id: 'pocos',     label: 'Un equipo pequeño (2-10)', score: { complejidad: 2 } },
        { id: 'medio',     label: '10-50', score: { complejidad: 3, automatizacion: 2 } },
        { id: 'grande',    label: 'Más de 50', score: { complejidad: 4, automatizacion: 3 } },
      ],
    },
    {
      id: 'b2b_crm',
      pregunta: '¿Necesitás gestionar tu cartera de clientes (CRM)?',
      consejo: 'En negocios B2B el seguimiento comercial suele ser el mayor cuello de botella. Puede costarte muchos clientes sin que te des cuenta de por qué.',
      tipo: 'single',
      opciones: [
        { id: 'si_urgente', label: 'Sí, es un problema hoy', score: { automatizacion: 4, complejidad: 2 } },
        { id: 'si_futuro',  label: 'En el futuro sí', score: { automatizacion: 2 } },
        { id: 'no',         label: 'No necesito CRM', score: {} },
      ],
    },
  ],

  turismo: [
    {
      id: 'tur_reservas',
      pregunta: '¿Necesitás gestionar reservas o paquetes?',
      consejo: 'Las reservas online eliminan llamadas, errores y malentendidos. En turismo, la experiencia de reserva es parte de la primera impresión del cliente.',
      tipo: 'single',
      opciones: [
        { id: 'si_online',  label: 'Sí, quiero que se puedan reservar online', score: { ventas_online: 3, automatizacion: 2 } },
        { id: 'si_manual',  label: 'Sí, pero hoy lo hago manual', score: { automatizacion: 4 } },
        { id: 'no',         label: 'No, solo quiero mostrar mis servicios', score: { captacion: 2 } },
      ],
    },
  ],

  bienestar: [
    {
      id: 'bien_turnos',
      pregunta: '¿Tu negocio depende de turnos o clases?',
      consejo: 'Una agenda bien gestionada puede liberar horas de trabajo por semana y mejorar notablemente la experiencia de tus clientes. Es donde más se nota la diferencia.',
      tipo: 'single',
      opciones: [
        { id: 'si_central', label: 'Sí, es el núcleo de mi operación', score: { automatizacion: 4, captacion: 2 } },
        { id: 'si_parcial', label: 'Parcialmente', score: { automatizacion: 2 } },
        { id: 'no',         label: 'No, funciona diferente', score: { captacion: 2 } },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. SOLUCIONES (los "productos" que recomienda el sistema)
// ─────────────────────────────────────────────────────────────────────────────

export const SOLUCIONES = {
  landing_leads: {
    id: 'landing_leads',
    nombre: 'Landing Page de Captación',
    nivel: 1,
    etiqueta: 'Recomendado para empezar',
    color: '#4bb543',
    descripcion: 'Una página enfocada 100% en convertir visitantes en consultas o clientes potenciales. Rápida de lanzar, de alto impacto inmediato.',
    beneficios: [
      'Generás consultas desde el primer día',
      'Inversión inicial baja, ROI rápido',
      'Escalable: podés crecer desde acá',
      'Integración con WhatsApp y formulario',
    ],
    funcionalidades: [
      'Hero de alto impacto con CTA claro',
      'Propuesta de valor bien comunicada',
      'Formulario de contacto inteligente',
      'Botón de WhatsApp directo',
      'Sección de servicios / portafolio',
      'Testimonios y prueba social',
      'SEO básico configurado',
      'Diseño responsive mobile-first',
    ],
    tiempo_estimado: '3-10 días',
    slug_servicio: 'servicios/landing-pages',
    item_id: 'landing-express-full',
  },
  web_institucional: {
    id: 'web_institucional',
    nombre: 'Web Institucional Completa',
    nivel: 2,
    etiqueta: 'Para posicionarte con autoridad',
    color: '#C8DBF7',
    descripcion: 'Un sitio web profesional de múltiples páginas que refleja quién sos, qué hacés y por qué te elegirte. Ideal para construir credibilidad.',
    beneficios: [
      'Presencia profesional y confiable',
      'Mejor posicionamiento SEO',
      'Blog para generar contenido y autoridad',
      'Múltiples puntos de conversión',
    ],
    funcionalidades: [
      'Hasta 8 páginas completas',
      'Blog integrado',
      'Portfolio / casos de éxito',
      'Equipo y quiénes somos',
      'Múltiples formularios contextuales',
      'SEO avanzado por página',
      'Google Analytics configurado',
      'Mapa y datos de contacto',
    ],
    tiempo_estimado: '15-25 días',
    slug_servicio: 'servicios/webs-profesionales',
    item_id: 'web-institucional',
  },
  web_portfolio: {
    id: 'web_portfolio',
    nombre: 'Web Portfolio Profesional',
    nivel: 2,
    etiqueta: 'Para mostrar tu trabajo',
    color: '#e8a848',
    descripcion: 'Una web diseñada para impactar visualmente y mostrar tu trabajo de manera que genere confianza y consultas espontáneas.',
    beneficios: [
      'Tu trabajo habla por vos',
      'Genera confianza automáticamente',
      'Diseño visual de alta calidad',
      'Clientes llegan con intención',
    ],
    funcionalidades: [
      'Galería de proyectos con filtros',
      'Ficha de proyecto detallada',
      'Sobre el estudio / personal',
      'Formulario de consulta',
      'Integración redes sociales',
      'SEO orientado a búsquedas de servicio',
    ],
    tiempo_estimado: '10-20 días',
    slug_servicio: 'servicios/webs-profesionales',
    item_id: 'web-portfolio',
  },
  web_reservas: {
    id: 'web_reservas',
    nombre: 'Web con Sistema de Turnos/Reservas',
    nivel: 2,
    etiqueta: 'Automatizá tu agenda',
    color: '#48b8e8',
    descripcion: 'Una web que permite a tus clientes reservar, agendar o sacar turnos de forma autónoma las 24hs, sin que vos tengas que estar presente.',
    beneficios: [
      'Eliminás el caos de WhatsApp y llamadas',
      'Clientes reservan solos en cualquier momento',
      'Menos tiempo en administración',
      'Más tiempo para lo que importa',
    ],
    funcionalidades: [
      'Calendario de disponibilidad en tiempo real',
      'Reservas y confirmaciones automáticas',
      'Notificaciones por email/WhatsApp',
      'Panel de gestión de agenda',
      'Integración con Google Calendar',
      'Recordatorios automáticos',
    ],
    tiempo_estimado: '15-30 días',
    slug_servicio: 'servicios/sistemas-gestion',
    item_id: 'web-reservas',
  },
  ecommerce: {
    id: 'ecommerce',
    nombre: 'Tienda E-commerce',
    nivel: 3,
    etiqueta: 'Vendé online 24/7',
    color: '#e84848',
    descripcion: 'Una tienda online completa con catálogo, carrito, pagos y gestión de pedidos. Tu negocio abierto las 24 horas todos los días.',
    beneficios: [
      'Vendés mientras dormís',
      'Alcance que va más allá de tu zona',
      'Pagos integrados y seguros',
      'Gestión centralizada de todo',
    ],
    funcionalidades: [
      'Catálogo de productos ilimitado',
      'Carrito de compras optimizado',
      'Pagos: Mercado Pago, tarjetas, transferencia',
      'Gestión de stock automática',
      'Historial de pedidos',
      'Panel de administración',
      'Cupones y descuentos',
      'Integración con envíos',
    ],
    tiempo_estimado: '20-45 días',
    slug_servicio: 'servicios/ecommerce',
    item_id: 'ecommerce-basico',
  },
  plataforma_educativa: {
    id: 'plataforma_educativa',
    nombre: 'Plataforma Educativa',
    nivel: 3,
    etiqueta: 'Tu academia online',
    color: '#D966B2',
    descripcion: 'Una plataforma completa para lanzar y gestionar cursos online con usuarios, progreso, videos y pagos integrados.',
    beneficios: [
      'Escalá sin límite de alumnos',
      'Ingresos pasivos de tu conocimiento',
      'Experiencia de aprendizaje premium',
      'Control total de tu contenido',
    ],
    funcionalidades: [
      'Sistema de cursos y módulos',
      'Login y perfil de alumnos',
      'Reproductor de video integrado',
      'Progreso y certificados',
      'Pagos y acceso por membresía',
      'Foro o comunidad interna',
      'Panel de administración',
    ],
    tiempo_estimado: '30-60 días',
    slug_servicio: 'servicios/plataforma-educativa',
    item_id: 'plataforma-educativa',
  },
  sistema_gestion: {
    id: 'sistema_gestion',
    nombre: 'Sistema de Gestión a Medida',
    nivel: 4,
    etiqueta: 'Operación bajo control',
    color: '#48e8b8',
    descripcion: 'Un sistema interno diseñado específicamente para tu negocio: gestión de clientes, ventas, stock, reportes y todo lo que necesitás para operar sin caos.',
    beneficios: [
      'Eliminás el caos operativo para siempre',
      'Información en tiempo real',
      'Menos errores humanos',
      'Escalás sin contratar más personal',
    ],
    funcionalidades: [
      'Módulo de clientes/CRM',
      'Gestión de ventas y pedidos',
      'Control de stock/inventario',
      'Facturación y reportes',
      'Multiusuario con roles',
      'Dashboard con métricas clave',
      'Notificaciones automáticas',
      'Exportación a Excel/PDF',
    ],
    tiempo_estimado: '45-90 días',
    slug_servicio: 'servicios/sistemas-gestion',
    item_id: 'sistema-gestion-basico',
  },
  web_pedidos_gastronomia: {
    id: 'web_pedidos_gastronomia',
    nombre: 'Web con Pedidos Online (Gastronomía)',
    nivel: 2,
    etiqueta: 'Para restaurantes y deliveries',
    color: '#e87048',
    descripcion: 'Una web gastronómica con menú digital, pedidos online y sistema de reservas. Tu restaurante en el bolsillo de tus clientes.',
    beneficios: [
      'Pedidos directos sin comisiones de apps',
      'Menú siempre actualizado',
      'Reservas automáticas',
      'Imagen de marca propia',
    ],
    funcionalidades: [
      'Menú digital categorizado',
      'Pedidos para llevar/delivery',
      'Sistema de reservas integrado',
      'Integración WhatsApp para confirmaciones',
      'Galería de platos',
      'Sección de historia / chef',
      'Mapa y horarios',
    ],
    tiempo_estimado: '15-25 días',
    slug_servicio: 'gastronomia',
    item_id: null,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. MOTOR DE SCORING → SOLUCIÓN
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Recibe el perfil final del usuario y retorna el id de la solución recomendada.
 *
 * PRINCIPIO DE DISEÑO:
 * - Cada rubro/subtipo tiene su propia lógica explícita.
 * - web_reservas se recomienda SOLO cuando el usuario lo indicó directamente
 *   o cuando el subtipo lo implica (salud, bienestar).
 * - El score de automatizacion sube por múltiples razones y NO alcanza solo
 *   para recomendar reservas o sistema_gestion si no hay intención real.
 *
 * @param {Object} scores - { captacion, ventas_online, automatizacion, complejidad, presupuesto_nivel }
 * @param {string} rubroId
 * @param {string} subtipoId
 */
export function resolverSolucion(scores, rubroId, subtipoId) {
  const {
    captacion = 0, ventas_online = 0, automatizacion = 0,
    complejidad = 0, presupuesto_nivel = 2,
  } = scores;
  const r = scores._respuestas || {};

  // ── SERVICIOS PROFESIONALES ───────────────────────────────────────────────
  if (rubroId === 'servicios_profesionales') {
    // Arquitectura: portfolio visual siempre — los turnos son un add-on, no el core
    if (subtipoId === 'arquitectura') return 'web_portfolio';

    // Otros servicios visuales/tangibles
    if (subtipoId === 'otros_servicios') {
      return r.sp_muestra_portfolio === 'si' ? 'web_portfolio' : 'landing_leads';
    }

    // Salud (psicólogos, nutricionistas, terapeutas): los turnos son el núcleo
    if (subtipoId === 'salud') {
      return r.sp_turnos === 'no' ? 'landing_leads' : 'web_reservas';
    }

    // Legal y Contabilidad: autoridad e institucionalidad
    if (subtipoId === 'legal' || subtipoId === 'contabilidad') {
      if (r.sp_turnos === 'si_clave') return 'web_reservas';
      if (presupuesto_nivel <= 1) return 'landing_leads';
      return 'web_institucional';
    }

    // Consultoría y Coaching: depende de si tienen sesiones recurrentes
    if (subtipoId === 'consultoria') {
      if (r.sp_turnos === 'si_clave') return 'web_reservas';
      return 'landing_leads';
    }

    // Fallback servicios_profesionales
    if (r.sp_turnos === 'si_clave') return 'web_reservas';
    if (r.sp_muestra_portfolio === 'si') return 'web_portfolio';
    return 'landing_leads';
  }

  // ── GASTRONOMÍA ───────────────────────────────────────────────────────────
  if (rubroId === 'gastronomia') {
    // Delivery: el modelo de negocio entero es pedidos
    if (subtipoId === 'delivery') return 'web_pedidos_gastronomia';

    // Catering: vende eventos, necesita captación de consultas
    if (subtipoId === 'catering') {
      return r.gas_pedidos === 'si_mucho' ? 'web_pedidos_gastronomia' : 'landing_leads';
    }

    // Restaurante y cafetería: si tiene pedidos → plataforma de pedidos
    if (r.gas_pedidos === 'si_mucho' || r.gas_pedidos === 'si_poco') {
      return 'web_pedidos_gastronomia';
    }
    // Solo local, con reservas manuales problemáticas → sistema de reservas
    if (r.gas_reservas === 'si_manual') return 'web_reservas';
    // Solo presencia, sin pedidos ni reservas críticas
    return 'landing_leads';
  }

  // ── COMERCIO ──────────────────────────────────────────────────────────────
  if (rubroId === 'comercio') {
    // Distribuidor/mayorista: vende B2B, no necesita tienda consumer
    if (subtipoId === 'distribuidor') {
      return automatizacion >= 4 ? 'sistema_gestion' : 'web_institucional';
    }

    // Productos digitales: ecommerce si cobran, landing si solo muestran
    if (subtipoId === 'digital_products') {
      return r.com_pagos === 'no' ? 'landing_leads' : 'ecommerce';
    }

    // Tienda física que evalúa vender online
    if (subtipoId === 'tienda_fisica') {
      if (r.com_pagos === 'si_urgente' || ventas_online >= 3) return 'ecommerce';
      return 'landing_leads';
    }

    // Productos propios: el objetivo principal siempre es vender
    if (subtipoId === 'productos_propios') return 'ecommerce';

    // Fallback comercio
    if (r.com_pagos === 'si_urgente' || ventas_online >= 2) return 'ecommerce';
    return 'landing_leads';
  }

  // ── EDUCACIÓN ─────────────────────────────────────────────────────────────
  if (rubroId === 'educacion') {
    // Cursos online: siempre necesitan plataforma, ya sea grabados, en vivo o mixto
    if (subtipoId === 'cursos_online') return 'plataforma_educativa';

    // Academia presencial que quiere digitalizarse
    if (subtipoId === 'academia') {
      if (r.edu_cursos_grabados !== 'presencial') return 'plataforma_educativa';
      return presupuesto_nivel >= 2 ? 'web_institucional' : 'landing_leads';
    }

    // Clases particulares: sesiones individuales online → reservas
    if (subtipoId === 'clases_part') {
      if (r.edu_cursos_grabados === 'live' || r.edu_cursos_grabados === 'mixto') {
        return 'web_reservas';
      }
      return 'landing_leads';
    }

    // Capacitaciones B2B: credibilidad institucional
    if (subtipoId === 'capacitaciones') {
      return presupuesto_nivel >= 3 ? 'web_institucional' : 'landing_leads';
    }

    // Fallback educación
    if (r.edu_pagos_recurrentes === 'si') return 'plataforma_educativa';
    return 'landing_leads';
  }

  // ── MARCA PERSONAL ────────────────────────────────────────────────────────
  if (rubroId === 'marca_personal') {
    // Artistas y fotógrafos: el trabajo visual es la propuesta de valor
    if (subtipoId === 'artista') return 'web_portfolio';

    // Freelancers: muestran trabajo para captar clientes
    if (subtipoId === 'freelance') return 'web_portfolio';

    // Creadores de contenido: hub centralizado de links y bio
    if (subtipoId === 'creador_contenido') return 'landing_leads';

    // Coach/Mentor: depende de si venden conocimiento o tiempo
    if (subtipoId === 'coach') {
      if (r.mp_monetizacion === 'productos_dig' || r.mp_monetizacion === 'todo') {
        return 'plataforma_educativa';
      }
      if (r.mp_monetizacion === 'servicios' || r.mp_monetizacion === 'contenido') {
        return 'landing_leads';
      }
    }

    // Fallback marca_personal
    if (r.mp_monetizacion === 'productos_dig' || ventas_online >= 3) return 'plataforma_educativa';
    return 'landing_leads';
  }

  // ── EMPRESA B2B ───────────────────────────────────────────────────────────
  if (rubroId === 'empresa_b2b') {
    // Inmobiliaria: portfolio de propiedades como core
    if (subtipoId === 'inmobiliaria') return 'web_portfolio';

    // Alta complejidad operativa o CRM urgente → sistema de gestión
    if (automatizacion >= 4 || complejidad >= 4 || r.b2b_crm === 'si_urgente') {
      return 'sistema_gestion';
    }
    // Resto: credibilidad B2B
    return 'web_institucional';
  }

  // ── TURISMO ───────────────────────────────────────────────────────────────
  if (rubroId === 'turismo') {
    if (r.tur_reservas === 'si_online' || r.tur_reservas === 'si_manual') {
      return 'web_reservas';
    }
    // Agencia sin reservas online: necesita autoridad
    if (subtipoId === 'agencia_viajes') return 'web_institucional';
    return 'landing_leads';
  }

  // ── BIENESTAR ─────────────────────────────────────────────────────────────
  if (rubroId === 'bienestar') {
    if (r.bien_turnos === 'si_central' || r.bien_turnos === 'si_parcial') {
      return 'web_reservas';
    }
    // Gimnasio sin turnos: igual necesita más que una landing (clases, membresías)
    if (subtipoId === 'gimnasio') return 'web_institucional';
    return 'landing_leads';
  }

  // ── FALLBACK UNIVERSAL ────────────────────────────────────────────────────
  if (automatizacion >= 5) return 'sistema_gestion';
  if (ventas_online >= 4) return 'ecommerce';
  if (captacion >= 4) return 'web_institucional';
  return 'landing_leads';
}

/**
 * Retorna alternativas (hasta 2) distintas a la solución principal.
 * Siempre sugiere: una alternativa de arranque/económica + una alternativa de escala.
 */
export function resolverAlternativas(solucionPrincipalId, scores, rubroId, subtipoId) {
  const { captacion = 0, ventas_online = 0, automatizacion = 0, presupuesto_nivel = 2 } = scores;
  const r = scores._respuestas || {};
  const alternativas = [];

  // ── Alternativa de arranque: siempre ofrecer landing si la solución es compleja ──
  const solucionesComplejas = ['sistema_gestion', 'plataforma_educativa', 'ecommerce', 'web_institucional', 'web_reservas', 'web_pedidos_gastronomia'];
  if (presupuesto_nivel <= 2 && solucionesComplejas.includes(solucionPrincipalId)) {
    alternativas.push('landing_leads');
  }

  // ── Alternativas específicas según solución recomendada ──
  switch (solucionPrincipalId) {
    case 'landing_leads':
      // Para rubros visuales: escalar a portfolio
      if (['arquitectura', 'artista', 'freelance', 'inmobiliaria'].includes(subtipoId)) {
        alternativas.push('web_portfolio');
      } else if (r.estado_negocio === 'creciendo' || r.objetivo === 'escalar') {
        alternativas.push('web_institucional');
      } else {
        alternativas.push('web_institucional');
      }
      break;

    case 'web_portfolio':
      // Siguiente nivel: web institucional completa
      alternativas.push('web_institucional');
      // Si mencionó turnos también
      if (r.sp_turnos === 'si_clave') alternativas.push('web_reservas');
      break;

    case 'web_institucional':
      if (presupuesto_nivel <= 2) alternativas.push('landing_leads');
      if (ventas_online >= 2) alternativas.push('ecommerce');
      break;

    case 'web_reservas':
      if (presupuesto_nivel <= 2) alternativas.push('landing_leads');
      if (automatizacion >= 3) alternativas.push('sistema_gestion');
      break;

    case 'ecommerce':
      if (presupuesto_nivel <= 2) alternativas.push('landing_leads');
      if (ventas_online >= 3) alternativas.push('sistema_gestion');
      break;

    case 'plataforma_educativa':
      // Siempre recomendar validar con landing antes de ir full platform
      alternativas.push('landing_leads');
      break;

    case 'sistema_gestion':
      alternativas.push('web_institucional');
      if (presupuesto_nivel <= 2) alternativas.push('landing_leads');
      break;

    case 'web_pedidos_gastronomia':
      if (presupuesto_nivel <= 2) alternativas.push('landing_leads');
      if (automatizacion >= 3) alternativas.push('sistema_gestion');
      break;

    default:
      alternativas.push('landing_leads');
  }

  return [...new Set(alternativas)]
    .filter(id => id !== solucionPrincipalId)
    .slice(0, 2)
    .map(id => SOLUCIONES[id])
    .filter(Boolean);
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. GENERADOR DE PROBLEMAS DETECTADOS
// ─────────────────────────────────────────────────────────────────────────────

export function generarProblemas(scores, respuestas) {
  const problemas = [];

  if (respuestas.presencia_digital === 'nada' || respuestas.presencia_digital === 'solo_redes') {
    problemas.push({
      id: 'sin_presencia',
      texto: 'No tenés una presencia digital propia y controlada',
      detalle: 'Dependés de plataformas de terceros (Instagram, Facebook) cuyos algoritmos pueden reducir tu visibilidad de un día para el otro. Si cambian las reglas, perdés todo el trabajo acumulado.',
    });
  }

  if (respuestas.presencia_digital === 'solo_redes') {
    problemas.push({
      id: 'solo_redes',
      texto: 'Las redes sociales no son suficientes como canal de ventas autónomo',
      detalle: 'Sin una web propia, no podés capturar datos de clientes, hacer seguimiento ni posicionarte en Google. Las consultas por DM son costosas de gestionar y difíciles de convertir.',
    });
  }

  if (respuestas.gestion_actual === 'manual_todo' || respuestas.gestion_actual === 'excel_wasap') {
    problemas.push({
      id: 'gestion_manual',
      texto: 'La gestión manual te roba tiempo y genera errores',
      detalle: 'Sin automatización, cada nueva venta, turno o pedido te consume tiempo valioso. Con volumen creciente, esto se convierte en un cuello de botella que frena el negocio.',
    });
  }

  if (respuestas.volumen === 'alto' || respuestas.volumen === 'muy_alto') {
    if (respuestas.gestion_actual !== 'sistema_ok') {
      problemas.push({
        id: 'volumen_sin_sistema',
        texto: 'Alto volumen sin sistema es una bomba de tiempo',
        detalle: 'Con más de 100 transacciones mensuales sin un sistema centralizado, el riesgo de errores, pérdida de clientes y desgaste del equipo aumenta exponencialmente.',
      });
    }
  }

  if (respuestas.presencia_digital === 'web_basica') {
    problemas.push({
      id: 'web_no_convierte',
      texto: 'Tu web actual no está convirtiendo visitas en clientes',
      detalle: 'Tener una web no garantiza clientes. Sin una estrategia clara de conversión, la mayoría de los visitantes se van sin dejar sus datos ni contactar.',
    });
  }

  if (respuestas.sp_turnos === 'si_clave') {
    if (respuestas.gestion_actual === 'excel_wasap' || respuestas.gestion_actual === 'manual_todo') {
      problemas.push({
        id: 'agenda_manual',
        texto: 'Gestionar turnos/agenda por WhatsApp es ineficiente y genera incumplimientos',
        detalle: 'Sin un sistema de reservas, perdés tiempo coordinando, tenés mayor tasa de no-shows y la experiencia del cliente es poco profesional.',
      });
    }
  }

  return problemas.slice(0, 4);
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. GENERADOR DE OPORTUNIDADES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Genera oportunidades relevantes para el caso específico.
 * Usa solucionId para mostrar solo oportunidades coherentes con la solución recomendada.
 */
export function generarOportunidades(scores, respuestas, rubroId, solucionId) {
  const ops = [];

  // ── Generación de leads: para soluciones enfocadas en captación ──
  const solucionesCaptan = ['landing_leads', 'web_portfolio', 'web_institucional', 'web_pedidos_gastronomia'];
  if (solucionesCaptan.includes(solucionId) || respuestas.objetivo === 'conseguir_clientes') {
    ops.push({
      id: 'gen_leads',
      texto: 'Podés generar un flujo constante y predecible de consultas',
      detalle: 'Con la estrategia digital adecuada, el canal online puede convertirse en tu principal fuente de clientes, funcionando las 24hs sin que vos estés presente.',
    });
  }

  // ── Automatización: solo si la solución realmente implica automatizar algo ──
  const solucionesAutomatizan = ['web_reservas', 'sistema_gestion', 'web_pedidos_gastronomia', 'ecommerce'];
  if (
    solucionesAutomatizan.includes(solucionId) &&
    (respuestas.gestion_actual === 'excel_wasap' || respuestas.gestion_actual === 'manual_todo' || scores.automatizacion >= 3)
  ) {
    ops.push({
      id: 'automatizar',
      texto: 'Podés recuperar horas de trabajo semanal automatizando procesos clave',
      detalle: 'Turnos, confirmaciones, recordatorios, gestión de pedidos y stock son procesos que pueden funcionar solos con el sistema correcto.',
    });
  }

  // ── Ventas 24/7: solo si la solución incluye venta directa ──
  const solucionesVenden = ['ecommerce', 'plataforma_educativa', 'web_pedidos_gastronomia'];
  if (solucionesVenden.includes(solucionId)) {
    ops.push({
      id: 'vender_24_7',
      texto: 'Podés vender online las 24hs sin intermediarios ni comisiones de terceros',
      detalle: 'Un canal de ventas propio te independiza de las apps de delivery, marketplaces y redes sociales, aumentando tu margen por venta.',
    });
  }

  // ── Escalar: si el negocio ya está creciendo o tiene ese objetivo ──
  if (respuestas.estado_negocio === 'creciendo' || respuestas.objetivo === 'escalar') {
    ops.push({
      id: 'escalar',
      texto: 'Con la base digital correcta, podés escalar sin necesidad de contratar más personal',
      detalle: 'La automatización y los sistemas correctos te permiten manejar más clientes y operaciones con el mismo equipo que tenés hoy.',
    });
  }

  // ── Autoridad digital: solo para rubros donde confianza/credibilidad es clave ──
  const rubrosAutoridad = ['servicios_profesionales', 'marca_personal', 'empresa_b2b', 'educacion'];
  const solucionesAutoridad = ['web_portfolio', 'web_institucional', 'plataforma_educativa', 'landing_leads'];
  if (rubrosAutoridad.includes(rubroId) && solucionesAutoridad.includes(solucionId)) {
    ops.push({
      id: 'autoridad',
      texto: 'Podés posicionarte como referente en tu rubro a través del contenido digital',
      detalle: 'Un blog, portfolio de casos y testimonios bien presentados construyen autoridad y confianza antes de que el cliente tenga el primer contacto con vos.',
    });
  }

  return ops.slice(0, 4);
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. GENERADOR DE ESTRATEGIA
// ─────────────────────────────────────────────────────────────────────────────

export function generarEstrategia(solucionId, scores, respuestas, rubroId) {
  const estrategias = {
    landing_leads: [
      'Lanzar la landing con foco en un único CTA (contacto o consulta)',
      'Conectar con WhatsApp Business para respuesta rápida',
      'Usar Instagram/Facebook para llevar tráfico a la landing',
      'Una vez validado el modelo, escalar con Google Ads',
    ],
    web_portfolio: [
      'Publicar los mejores 5-8 proyectos o casos documentados',
      'Posicionar en Google con SEO local y de servicio',
      'Usar LinkedIn para amplificar el portfolio profesional',
      'Agregar formulario de consulta contextual por tipo de proyecto',
    ],
    web_institucional: [
      'Arrancar con las páginas clave: inicio, servicios, contacto',
      'Comenzar blog con contenido orientado a preguntas frecuentes del rubro',
      'SEO local para posicionarte en tu ciudad o zona',
      'Medir y optimizar las páginas con mayor tráfico',
    ],
    web_reservas: [
      'Migrar agenda actual al sistema digital gradualmente',
      'Comunicar a clientes existentes el nuevo sistema de turnos',
      'Activar recordatorios automáticos para reducir no-shows',
      'Usar la web como punto central de todos los canales de comunicación',
    ],
    ecommerce: [
      'Comenzar con los 20 productos más vendidos o rentables',
      'Configurar Mercado Pago y medios de pago alternativos',
      'Usar redes sociales con link directo al carrito de compras',
      'Implementar email marketing desde el primer pedido',
    ],
    plataforma_educativa: [
      'Lanzar con un primer curso o mini-curso para validar',
      'Usar landing page de venta independiente para cada curso',
      'Construir lista de emails desde antes del lanzamiento',
      'Iterar el contenido según el feedback de los primeros alumnos',
    ],
    sistema_gestion: [
      'Mapear todos los procesos actuales antes de digitalizar',
      'Priorizar los módulos más críticos para el primer lanzamiento',
      'Capacitar al equipo progresivamente en el nuevo sistema',
      'Medir tiempo ahorrado mensualmente para calcular ROI',
    ],
    web_pedidos_gastronomia: [
      'Migrar pedidos de WhatsApp al sistema gradualmente',
      'Usar el menú digital como tarjeta de presentación en redes',
      'Activar Google My Business con link a la web y menú',
      'Promover pedidos directos vs. apps para aumentar margen',
    ],
  };

  return estrategias[solucionId] || estrategias['landing_leads'];
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. FUNCIÓN PRINCIPAL: generateDiagnostico
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Función central que recibe todas las respuestas y genera el diagnóstico completo.
 * @param {Object} respuestas - Mapa id_pregunta → id_opcion elegida
 * @param {string} rubroId
 * @param {string} subtipoId
 * @returns {Object} diagnostico completo
 */
export function generateDiagnostico(respuestas, rubroId, subtipoId) {
  // 1. Calcular scores acumulados
  const scores = { captacion: 0, ventas_online: 0, automatizacion: 0, complejidad: 0, presupuesto_nivel: 2 };

  const todasLasPreguntas = [
    ...PREGUNTAS_COMUNES,
    ...(PREGUNTAS_POR_RUBRO[rubroId] || []),
  ];

  todasLasPreguntas.forEach(pregunta => {
    const respuestaId = respuestas[pregunta.id];
    if (!respuestaId) return;
    const opcion = pregunta.opciones.find(o => o.id === respuestaId);
    if (!opcion?.score) return;
    Object.entries(opcion.score).forEach(([key, val]) => {
      scores[key] = (scores[key] || 0) + val;
    });
  });

  // Guardamos respuestas crudas para lógica contextual
  scores._respuestas = respuestas;

  // 2. Resolver solución principal
  const solucionId = resolverSolucion(scores, rubroId, subtipoId);
  const solucion = SOLUCIONES[solucionId];

  // 3. Resolver alternativas
  const alternativas = resolverAlternativas(solucionId, scores, rubroId, subtipoId);

  // 4. Generar problemas, oportunidades y estrategia
  const problemas      = generarProblemas(scores, respuestas);
  const oportunidades  = generarOportunidades(scores, respuestas, rubroId, solucionId);
  const estrategia     = generarEstrategia(solucionId, scores, respuestas, rubroId);

  // 5. Generar texto de diagnóstico narrativo
  const rubro    = RUBROS.find(r => r.id === rubroId);
  const subtipo  = rubro?.subtipos.find(s => s.id === subtipoId);
  const estadoLabels = {
    idea: 'en etapa de idea',
    empezando: 'en sus primeros pasos',
    funcionando: 'en pleno funcionamiento',
    creciendo: 'en crecimiento activo',
  };
  const objetivoLabels = {
    conseguir_clientes: 'conseguir más clientes',
    vender_online: 'vender online',
    automatizar: 'automatizar tus procesos',
    imagen_marca: 'mejorar tu imagen de marca',
    escalar: 'escalar el negocio',
    todo: 'crecer en múltiples frentes',
  };

  const problemasList = problemas.map(p => `• ${p.texto}`).join('\n');
  const oportunidadesList = oportunidades.map(o => `• ${o.texto}`).join('\n');

  const diagnosticoNarrativo = `Analizamos tu situación como ${subtipo?.label || rubro?.label || 'negocio'} que se encuentra ${estadoLabels[respuestas.estado_negocio] || 'operando'}, con el objetivo de ${objetivoLabels[respuestas.objetivo] || 'crecer digitalmente'}. Identificamos ${problemas.length} áreas de mejora y ${oportunidades.length} oportunidades clave que podés aprovechar con la solución correcta.\n\nÁreas de mejora:\n${problemasList}\n\nOportunidades clave:\n${oportunidadesList}`;

  return {
    rubroId,
    subtipoId,
    scores,
    solucion,
    alternativas,
    problemas,
    oportunidades,
    estrategia,
    diagnosticoNarrativo,
    fechaGenerado: new Date().toISOString(),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. HELPER: obtener preguntas para un rubro dado (flujo completo)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Retorna el array de preguntas que debe responder el usuario para un rubro dado.
 * Combina preguntas comunes + específicas del rubro.
 */
export function getPreguntasParaRubro(rubroId) {
  return [
    ...PREGUNTAS_COMUNES,
    ...(PREGUNTAS_POR_RUBRO[rubroId] || []),
  ];
}
