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
export function getPreguntasParaRubro(rubroId, lang = 'es') {
  if (lang === 'en') {
    return [
      ...PREGUNTAS_COMUNES_EN,
      ...(PREGUNTAS_POR_RUBRO_EN[rubroId] || []),
    ];
  }
  return [
    ...PREGUNTAS_COMUNES,
    ...(PREGUNTAS_POR_RUBRO[rubroId] || []),
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. LANG-AWARE GETTERS
// ─────────────────────────────────────────────────────────────────────────────

export function getRUBROS(lang = 'es') {
  return lang === 'en' ? RUBROS_EN : RUBROS;
}

export function getSOLUCIONES(lang = 'es') {
  return lang === 'en' ? SOLUCIONES_EN : SOLUCIONES;
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. DATOS EN INGLÉS — RUBROS
// ─────────────────────────────────────────────────────────────────────────────

export const RUBROS_EN = [
  {
    id: 'servicios_profesionales',
    label: 'Professional Services',
    emoji: '💼',
    descripcion: 'Architecture, lawyers, accountants, consultants, healthcare',
    subtipos: [
      { id: 'arquitectura',    label: 'Architecture / Interior Design' },
      { id: 'legal',           label: 'Lawyers / Law firm' },
      { id: 'contabilidad',    label: 'Accountants / Finance' },
      { id: 'consultoria',     label: 'Consulting / Coaching' },
      { id: 'salud',           label: 'Healthcare / Psychology / Nutrition' },
      { id: 'otros_servicios', label: 'Other professional service' },
    ],
  },
  {
    id: 'gastronomia',
    label: 'Food & Beverage',
    emoji: '🍽️',
    descripcion: 'Restaurants, deliveries, cafés, bars',
    subtipos: [
      { id: 'restaurante', label: 'Restaurant / Grill' },
      { id: 'delivery',    label: 'Delivery / Dark kitchen' },
      { id: 'cafeteria',   label: 'Café / Bar / Brewery' },
      { id: 'catering',    label: 'Catering / Events' },
    ],
  },
  {
    id: 'comercio',
    label: 'Commerce & Retail',
    emoji: '🛒',
    descripcion: 'Physical stores, physical or digital products',
    subtipos: [
      { id: 'tienda_fisica',     label: 'Physical store (clothing, accessories, etc.)' },
      { id: 'productos_propios', label: 'Own products to sell online' },
      { id: 'distribuidor',      label: 'Distributor / Wholesaler' },
      { id: 'digital_products',  label: 'Digital products (ebooks, templates)' },
    ],
  },
  {
    id: 'educacion',
    label: 'Education & Training',
    emoji: '🎓',
    descripcion: 'Courses, academies, coaches, training',
    subtipos: [
      { id: 'cursos_online',  label: 'Online courses / Educational platform' },
      { id: 'academia',       label: 'Academy / In-person institute' },
      { id: 'clases_part',    label: 'Private lessons / Tutoring' },
      { id: 'capacitaciones', label: 'Corporate training (B2B)' },
    ],
  },
  {
    id: 'marca_personal',
    label: 'Personal Brand',
    emoji: '🌟',
    descripcion: 'Influencers, creators, individual entrepreneurs',
    subtipos: [
      { id: 'creador_contenido', label: 'Content creator / Influencer' },
      { id: 'coach',             label: 'Coach / Mentor' },
      { id: 'freelance',         label: 'Freelancer (design, photo, dev, etc.)' },
      { id: 'artista',           label: 'Artist / Musician / Photographer' },
    ],
  },
  {
    id: 'empresa_b2b',
    label: 'Business / B2B',
    emoji: '🏢',
    descripcion: 'Mid/large companies, suppliers, industry',
    subtipos: [
      { id: 'pyme',         label: 'SME / Medium company' },
      { id: 'industria',    label: 'Industry / Manufacturing' },
      { id: 'tech',         label: 'Tech company / Software' },
      { id: 'inmobiliaria', label: 'Real Estate' },
    ],
  },
  {
    id: 'turismo',
    label: 'Tourism & Hospitality',
    emoji: '✈️',
    descripcion: 'Hotels, agencies, tour guides',
    subtipos: [
      { id: 'hotel',          label: 'Hotel / Hostel / Cabin' },
      { id: 'agencia_viajes', label: 'Travel agency' },
      { id: 'turismo_local',  label: 'Local tourism / Excursions' },
    ],
  },
  {
    id: 'bienestar',
    label: 'Wellness & Fitness',
    emoji: '🏋️',
    descripcion: 'Gyms, spas, yoga, training',
    subtipos: [
      { id: 'gimnasio',    label: 'Gym / CrossFit / Box' },
      { id: 'spa_belleza', label: 'Spa / Salon / Beauty center' },
      { id: 'entrenador',  label: 'Personal trainer / Yoga / Pilates' },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 13. DATOS EN INGLÉS — PREGUNTAS COMUNES
// ─────────────────────────────────────────────────────────────────────────────

export const PREGUNTAS_COMUNES_EN = [
  {
    id: 'objetivo',
    pregunta: 'What is your main goal?',
    subtexto: 'Choose the one that best describes what you\'re looking for',
    consejo: 'This shapes the entire recommendation. Don\'t worry if you have multiple goals — pick the most urgent one for now.',
    tipo: 'single',
    opciones: [
      { id: 'conseguir_clientes', label: 'Get more clients',                                    score: { captacion: 3 } },
      { id: 'vender_online',      label: 'Sell my products/services online',                    score: { ventas_online: 4 } },
      { id: 'automatizar',        label: 'Automate and organize my internal processes',          score: { automatizacion: 4 } },
      { id: 'imagen_marca',       label: 'Improve my brand image and presence',                 score: { captacion: 2 } },
      { id: 'escalar',            label: 'Scale the business (I have operations but want to grow)', score: { automatizacion: 2, captacion: 2, complejidad: 2 } },
      { id: 'todo',               label: 'All of the above (I have multiple goals)',             score: { captacion: 2, ventas_online: 2, automatizacion: 2, complejidad: 3 } },
    ],
  },
  {
    id: 'estado_negocio',
    pregunta: 'What stage is your business at?',
    subtexto: 'This greatly affects what kind of solution makes sense',
    consejo: 'It doesn\'t matter if you\'re starting out or have been running for years. This helps me see how urgent each step is and where we start from.',
    tipo: 'single',
    opciones: [
      { id: 'idea',        label: 'It\'s an idea, I haven\'t launched yet',    score: { captacion: 1 } },
      { id: 'empezando',   label: 'I just started (less than 1 year)',          score: { captacion: 2 } },
      { id: 'funcionando', label: 'It\'s running and I have clients',           score: { captacion: 1, automatizacion: 1 } },
      { id: 'creciendo',   label: 'I\'m growing and need to scale',             score: { automatizacion: 2, complejidad: 2 } },
    ],
  },
  {
    id: 'presencia_digital',
    pregunta: 'What does your digital presence look like today?',
    subtexto: 'No judgment here — it helps us understand the starting point',
    consejo: 'Knowing what you already have avoids recommending something that already exists or doesn\'t add real value yet. There\'s no wrong answer here.',
    tipo: 'single',
    opciones: [
      { id: 'nada',          label: 'I have nothing yet',                                  score: { captacion: 2 } },
      { id: 'solo_redes',    label: 'Only social media (Instagram, Facebook, etc.)',        score: { captacion: 2 } },
      { id: 'web_basica',    label: 'I have a basic website that doesn\'t convert',         score: { captacion: 1 } },
      { id: 'web_ok',        label: 'I have a website but want to improve it',               score: {} },
      { id: 'algo_avanzado', label: 'I already have an advanced system/website',            score: { automatizacion: 1 } },
    ],
  },
  {
    id: 'gestion_actual',
    pregunta: 'How do you run your business today?',
    subtexto: 'Think about sales, clients, appointments, orders, inventory, etc.',
    consejo: 'How you manage today defines what can be automated. Many businesses lose hours per week on tasks that a good system can handle in seconds.',
    tipo: 'single',
    opciones: [
      { id: 'manual_todo',    label: 'Everything is manual or on paper',                      score: { automatizacion: 4 } },
      { id: 'excel_wasap',    label: 'Excel + WhatsApp',                                     score: { automatizacion: 3 } },
      { id: 'apps_sueltas',   label: 'I use separate apps (Sheets, Drive, Notion, etc.)',     score: { automatizacion: 2 } },
      { id: 'sistema_basico', label: 'I have some basic system',                             score: { automatizacion: 1 } },
      { id: 'sistema_ok',     label: 'I have a system that works well',                       score: {} },
    ],
  },
  {
    id: 'volumen',
    pregunta: 'How many clients or transactions do you handle per month?',
    subtexto: 'Approximate, no need to be exact',
    consejo: 'Volume determines the scale of the solution. Serving 10 clients a month is very different from 300 — it affects technical complexity and the budget that makes sense.',
    tipo: 'single',
    opciones: [
      { id: 'pocos',    label: 'Less than 20',          score: {} },
      { id: 'medio',    label: 'Between 20 and 100',    score: { automatizacion: 1 } },
      { id: 'alto',     label: 'More than 100',          score: { automatizacion: 3, complejidad: 2 } },
      { id: 'muy_alto', label: 'More than 500 (high volume)', score: { automatizacion: 4, complejidad: 3 } },
    ],
  },
  {
    id: 'presupuesto',
    pregunta: 'Do you have a budget in mind for investment?',
    subtexto: 'This helps us recommend the most realistic option for your case',
    consejo: 'There are good solutions at every budget. Being realistic here makes the recommendation concrete and actionable, not just aspirational.',
    tipo: 'single',
    opciones: [
      { id: 'bajo',       label: 'Less than $200 USD',          score: { presupuesto_nivel: 1 } },
      { id: 'medio',      label: 'Between $200 and $800 USD',   score: { presupuesto_nivel: 2 } },
      { id: 'medio_alto', label: 'Between $800 and $2000 USD',  score: { presupuesto_nivel: 3 } },
      { id: 'alto',       label: 'More than $2000 USD',         score: { presupuesto_nivel: 4 } },
      { id: 'no_se',      label: 'I\'m not sure yet',           score: { presupuesto_nivel: 2 } },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 14. DATOS EN INGLÉS — PREGUNTAS POR RUBRO
// ─────────────────────────────────────────────────────────────────────────────

export const PREGUNTAS_POR_RUBRO_EN = {
  servicios_profesionales: [
    {
      id: 'sp_muestra_portfolio',
      pregunta: 'Do you need to showcase your work or success stories?',
      subtexto: 'Projects, won cases, accounting studies, etc.',
      consejo: 'Showing real work and concrete results builds trust automatically. In professional services, social proof is everything.',
      tipo: 'single',
      opciones: [
        { id: 'si',      label: 'Yes, that\'s key for me',                    score: { captacion: 2 } },
        { id: 'no',      label: 'No, my service is more intangible',          score: {} },
        { id: 'tal_vez', label: 'It could help but it\'s not the main thing', score: { captacion: 1 } },
      ],
    },
    {
      id: 'sp_turnos',
      pregunta: 'Do your clients need to book appointments or schedule consultations?',
      subtexto: 'Meetings, visits, consultations, advisory sessions',
      consejo: 'Appointments are the #1 pain point in professional services. This answer could completely change what we recommend.',
      tipo: 'single',
      opciones: [
        { id: 'si_clave',  label: 'Yes, and managing it takes up a lot of my time', score: { automatizacion: 3, captacion: 1 } },
        { id: 'si_menor',  label: 'Yes, but it\'s not a problem today',             score: { automatizacion: 1 } },
        { id: 'no',        label: 'No, I work on projects or contracts',             score: {} },
      ],
    },
  ],

  gastronomia: [
    {
      id: 'gas_pedidos',
      pregunta: 'Do you receive orders from clients (takeaway or delivery)?',
      subtexto: 'Beyond in-store service',
      consejo: 'Online orders can multiply income for a well-optimized food business. But we need to evaluate if it\'s the right step now.',
      tipo: 'single',
      opciones: [
        { id: 'si_mucho', label: 'Yes, it\'s an important part of the business',   score: { ventas_online: 3, automatizacion: 2 } },
        { id: 'si_poco',  label: 'Yes, but little and in a disorganized way',       score: { ventas_online: 2, automatizacion: 3 } },
        { id: 'no',       label: 'No, in-store service only',                       score: { captacion: 2 } },
      ],
    },
    {
      id: 'gas_reservas',
      pregunta: 'Do you manage table reservations?',
      consejo: 'Automating reservations eliminates calls, WhatsApp messages, and human errors. It frees up time to focus on serving guests already in the venue.',
      tipo: 'single',
      opciones: [
        { id: 'si_manual',  label: 'Yes, but manually or via WhatsApp',        score: { automatizacion: 3 } },
        { id: 'si_sistema', label: 'Yes, I already have a reservation system',  score: {} },
        { id: 'no',         label: 'We don\'t take reservations',               score: {} },
      ],
    },
  ],

  comercio: [
    {
      id: 'com_stock',
      pregunta: 'Do you need to manage product inventory?',
      consejo: 'If you deal with inventory, everything changes. You need more than a website — you need a system that tracks it in real time so you don\'t sell what you don\'t have.',
      tipo: 'single',
      opciones: [
        { id: 'si_muchos', label: 'Yes, I have many products and it\'s a mess', score: { automatizacion: 4, complejidad: 2 } },
        { id: 'si_pocos',  label: 'Yes, but it\'s a small number of products',  score: { automatizacion: 2 } },
        { id: 'no',        label: 'No physical inventory (digital products)',    score: { ventas_online: 2 } },
      ],
    },
    {
      id: 'com_pagos',
      pregunta: 'Do you need to accept online payments?',
      consejo: 'Online payments reduce purchase friction and enable sales while you sleep. They require integrations that add to the cost, but the return usually justifies it.',
      tipo: 'single',
      opciones: [
        { id: 'si_urgente', label: 'Yes, it\'s essential',                     score: { ventas_online: 4 } },
        { id: 'si_futuro',  label: 'In the future yes, not now',               score: { ventas_online: 2 } },
        { id: 'no',         label: 'No, I just want to showcase products',      score: {} },
      ],
    },
  ],

  educacion: [
    {
      id: 'edu_cursos_grabados',
      pregunta: 'Are your courses recorded or live?',
      consejo: 'Recorded courses are income that works on its own. But they need a different platform than an institutional website. This answer determines almost everything.',
      tipo: 'single',
      opciones: [
        { id: 'grabados',   label: 'Recorded (asynchronous)',      score: { ventas_online: 2, complejidad: 2 } },
        { id: 'live',       label: 'Live (synchronous classes)',    score: { captacion: 2, automatizacion: 2 } },
        { id: 'mixto',      label: 'Mixed',                        score: { complejidad: 3, ventas_online: 2 } },
        { id: 'presencial', label: 'In-person',                    score: { captacion: 3 } },
      ],
    },
    {
      id: 'edu_pagos_recurrentes',
      pregunta: 'Do you need to charge memberships or subscriptions?',
      consejo: 'Recurring income is every educator\'s dream. But it involves greater technical complexity and a well-thought-out retention strategy.',
      tipo: 'single',
      opciones: [
        { id: 'si',      label: 'Yes, or I\'d like to',          score: { ventas_online: 3, complejidad: 3 } },
        { id: 'no',      label: 'No, I charge per course or one-time package', score: { ventas_online: 2 } },
        { id: 'tal_vez', label: 'Maybe in the future',            score: { ventas_online: 1, complejidad: 1 } },
      ],
    },
  ],

  marca_personal: [
    {
      id: 'mp_monetizacion',
      pregunta: 'How do you monetize (or want to)?',
      consejo: 'Each monetization model needs a different digital solution. This answer alone can completely change what we recommend.',
      tipo: 'single',
      opciones: [
        { id: 'servicios',     label: 'Personal services or consulting',        score: { captacion: 3 } },
        { id: 'productos_dig', label: 'Digital products (courses, ebooks)',     score: { ventas_online: 3 } },
        { id: 'contenido',     label: 'Content / sponsorships / affiliates',    score: { captacion: 2 } },
        { id: 'todo',          label: 'A mix of several',                       score: { captacion: 2, ventas_online: 2, complejidad: 2 } },
      ],
    },
    {
      id: 'mp_audiencia',
      pregunta: 'Do you have an audience on social media?',
      tipo: 'single',
      opciones: [
        { id: 'si_grande',    label: 'Yes, quite large (+10k)',     score: { captacion: 1, ventas_online: 2 } },
        { id: 'si_pequena',   label: 'Yes but small (less than 10k)', score: { captacion: 2 } },
        { id: 'construyendo', label: 'I\'m building it',             score: { captacion: 3 } },
        { id: 'no',           label: 'No, starting from scratch',   score: { captacion: 3 } },
      ],
    },
  ],

  empresa_b2b: [
    {
      id: 'b2b_empleados',
      pregunta: 'How many internal users need access to the system?',
      tipo: 'single',
      opciones: [
        { id: 'solo_yo', label: 'Just me',                score: {} },
        { id: 'pocos',   label: 'A small team (2-10)',    score: { complejidad: 2 } },
        { id: 'medio',   label: '10-50',                  score: { complejidad: 3, automatizacion: 2 } },
        { id: 'grande',  label: 'More than 50',           score: { complejidad: 4, automatizacion: 3 } },
      ],
    },
    {
      id: 'b2b_crm',
      pregunta: 'Do you need to manage your client portfolio (CRM)?',
      consejo: 'In B2B, sales pipeline management is often the biggest bottleneck. It can cost you many clients without realizing why.',
      tipo: 'single',
      opciones: [
        { id: 'si_urgente', label: 'Yes, it\'s a problem today', score: { automatizacion: 4, complejidad: 2 } },
        { id: 'si_futuro',  label: 'In the future yes',          score: { automatizacion: 2 } },
        { id: 'no',         label: 'I don\'t need a CRM',        score: {} },
      ],
    },
  ],

  turismo: [
    {
      id: 'tur_reservas',
      pregunta: 'Do you need to manage reservations or packages?',
      consejo: 'Online reservations eliminate calls, errors and misunderstandings. In tourism, the booking experience is part of the first impression.',
      tipo: 'single',
      opciones: [
        { id: 'si_online', label: 'Yes, I want them to be bookable online', score: { ventas_online: 3, automatizacion: 2 } },
        { id: 'si_manual', label: 'Yes, but I\'m doing it manually',         score: { automatizacion: 4 } },
        { id: 'no',        label: 'No, I just want to showcase my services', score: { captacion: 2 } },
      ],
    },
  ],

  bienestar: [
    {
      id: 'bien_turnos',
      pregunta: 'Does your business depend on appointments or classes?',
      consejo: 'A well-managed schedule can free up hours of work per week and significantly improve your clients\' experience. It\'s where the difference shows the most.',
      tipo: 'single',
      opciones: [
        { id: 'si_central', label: 'Yes, it\'s the core of my operation', score: { automatizacion: 4, captacion: 2 } },
        { id: 'si_parcial', label: 'Partially',                           score: { automatizacion: 2 } },
        { id: 'no',         label: 'No, it works differently',            score: { captacion: 2 } },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 15. DATOS EN INGLÉS — SOLUCIONES
// ─────────────────────────────────────────────────────────────────────────────

export const SOLUCIONES_EN = {
  landing_leads: {
    id: 'landing_leads',
    nombre: 'Lead Capture Landing Page',
    nivel: 1,
    etiqueta: 'Recommended for starting out',
    color: '#4bb543',
    descripcion: 'A page 100% focused on converting visitors into inquiries or potential clients. Quick to launch, high immediate impact.',
    beneficios: [
      'Generate inquiries from day one',
      'Low initial investment, fast ROI',
      'Scalable: you can grow from here',
      'WhatsApp and form integration',
    ],
    funcionalidades: [
      'High-impact hero with clear CTA',
      'Well-communicated value proposition',
      'Smart contact form',
      'Direct WhatsApp button',
      'Services / portfolio section',
      'Testimonials and social proof',
      'Basic SEO configured',
      'Responsive mobile-first design',
    ],
    tiempo_estimado: '3-10 days',
    slug_servicio: 'servicios/landing-pages',
    item_id: 'landing-express-full',
  },
  web_institucional: {
    id: 'web_institucional',
    nombre: 'Complete Institutional Website',
    nivel: 2,
    etiqueta: 'To position yourself with authority',
    color: '#C8DBF7',
    descripcion: 'A professional multi-page website that reflects who you are, what you do and why to choose you. Ideal for building credibility.',
    beneficios: [
      'Professional and trustworthy presence',
      'Better SEO positioning',
      'Blog to generate content and authority',
      'Multiple conversion points',
    ],
    funcionalidades: [
      'Up to 8 complete pages',
      'Integrated blog',
      'Portfolio / success stories',
      'Team and about us',
      'Multiple contextual forms',
      'Advanced SEO per page',
      'Google Analytics configured',
      'Map and contact details',
    ],
    tiempo_estimado: '15-25 days',
    slug_servicio: 'servicios/webs-profesionales',
    item_id: 'web-institucional',
  },
  web_portfolio: {
    id: 'web_portfolio',
    nombre: 'Professional Portfolio Website',
    nivel: 2,
    etiqueta: 'To showcase your work',
    color: '#e8a848',
    descripcion: 'A website designed to visually impress and showcase your work in a way that builds trust and generates spontaneous inquiries.',
    beneficios: [
      'Your work speaks for itself',
      'Builds trust automatically',
      'High-quality visual design',
      'Clients arrive with intent',
    ],
    funcionalidades: [
      'Project gallery with filters',
      'Detailed project page',
      'About the studio / personal',
      'Inquiry form',
      'Social media integration',
      'SEO focused on service searches',
    ],
    tiempo_estimado: '10-20 days',
    slug_servicio: 'servicios/webs-profesionales',
    item_id: 'web-portfolio',
  },
  web_reservas: {
    id: 'web_reservas',
    nombre: 'Website with Booking System',
    nivel: 2,
    etiqueta: 'Automate your schedule',
    color: '#48b8e8',
    descripcion: 'A website that lets your clients book, schedule or make appointments autonomously 24/7, without you needing to be present.',
    beneficios: [
      'Eliminate the WhatsApp/calls chaos',
      'Clients book themselves anytime',
      'Less time on administration',
      'More time for what matters',
    ],
    funcionalidades: [
      'Real-time availability calendar',
      'Automatic bookings and confirmations',
      'Email/WhatsApp notifications',
      'Schedule management panel',
      'Google Calendar integration',
      'Automatic reminders',
    ],
    tiempo_estimado: '15-30 days',
    slug_servicio: 'servicios/sistemas-gestion',
    item_id: 'web-reservas',
  },
  ecommerce: {
    id: 'ecommerce',
    nombre: 'E-commerce Store',
    nivel: 3,
    etiqueta: 'Sell online 24/7',
    color: '#e84848',
    descripcion: 'A complete online store with catalog, cart, payments and order management. Your business open 24 hours every day.',
    beneficios: [
      'Sell while you sleep',
      'Reach beyond your local area',
      'Integrated and secure payments',
      'Centralized management of everything',
    ],
    funcionalidades: [
      'Unlimited product catalog',
      'Optimized shopping cart',
      'Payments: local gateways, cards, bank transfer',
      'Automatic stock management',
      'Order history',
      'Admin panel',
      'Coupons and discounts',
      'Shipping integration',
    ],
    tiempo_estimado: '20-45 days',
    slug_servicio: 'servicios/ecommerce',
    item_id: 'ecommerce-basico',
  },
  plataforma_educativa: {
    id: 'plataforma_educativa',
    nombre: 'Educational Platform',
    nivel: 3,
    etiqueta: 'Your online academy',
    color: '#D966B2',
    descripcion: 'A complete platform to launch and manage online courses with users, progress, videos and integrated payments.',
    beneficios: [
      'Scale with unlimited students',
      'Passive income from your knowledge',
      'Premium learning experience',
      'Full control of your content',
    ],
    funcionalidades: [
      'Course and module system',
      'Student login and profile',
      'Integrated video player',
      'Progress and certificates',
      'Payments and membership access',
      'Forum or internal community',
      'Admin panel',
    ],
    tiempo_estimado: '30-60 days',
    slug_servicio: 'servicios/plataforma-educativa',
    item_id: 'plataforma-educativa',
  },
  sistema_gestion: {
    id: 'sistema_gestion',
    nombre: 'Custom Management System',
    nivel: 4,
    etiqueta: 'Operations under control',
    color: '#48e8b8',
    descripcion: 'An internal system designed specifically for your business: client management, sales, inventory, reports and everything you need to operate without chaos.',
    beneficios: [
      'Eliminate operational chaos forever',
      'Real-time information',
      'Fewer human errors',
      'Scale without hiring more staff',
    ],
    funcionalidades: [
      'Client/CRM module',
      'Sales and order management',
      'Stock/inventory control',
      'Billing and reports',
      'Multi-user with roles',
      'Dashboard with key metrics',
      'Automatic notifications',
      'Export to Excel/PDF',
    ],
    tiempo_estimado: '45-90 days',
    slug_servicio: 'servicios/sistemas-gestion',
    item_id: 'sistema-gestion-basico',
  },
  web_pedidos_gastronomia: {
    id: 'web_pedidos_gastronomia',
    nombre: 'Website with Online Orders (Food & Beverage)',
    nivel: 2,
    etiqueta: 'For restaurants and deliveries',
    color: '#e87048',
    descripcion: 'A food & beverage website with digital menu, online orders and reservation system. Your restaurant in your clients\' pocket.',
    beneficios: [
      'Direct orders without app commissions',
      'Always up-to-date menu',
      'Automatic reservations',
      'Own brand image',
    ],
    funcionalidades: [
      'Categorized digital menu',
      'Takeaway/delivery orders',
      'Integrated reservation system',
      'WhatsApp integration for confirmations',
      'Dish gallery',
      'History / chef section',
      'Map and hours',
    ],
    tiempo_estimado: '15-25 days',
    slug_servicio: 'gastronomia',
    item_id: null,
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 16. GENERADORES EN INGLÉS — PROBLEMAS, OPORTUNIDADES, ESTRATEGIA, NARRATIVO
// ─────────────────────────────────────────────────────────────────────────────

export function generarProblemas_EN(scores, respuestas) {
  const problemas = [];

  if (respuestas.presencia_digital === 'nada' || respuestas.presencia_digital === 'solo_redes') {
    problemas.push({
      id: 'sin_presencia',
      texto: 'You don\'t have your own controlled digital presence',
      detalle: 'You depend on third-party platforms (Instagram, Facebook) whose algorithms can reduce your visibility overnight. If the rules change, you lose all accumulated work.',
    });
  }

  if (respuestas.presencia_digital === 'solo_redes') {
    problemas.push({
      id: 'solo_redes',
      texto: 'Social media alone isn\'t enough as an autonomous sales channel',
      detalle: 'Without your own website, you can\'t capture client data, follow up, or rank on Google. DM inquiries are costly to manage and hard to convert.',
    });
  }

  if (respuestas.gestion_actual === 'manual_todo' || respuestas.gestion_actual === 'excel_wasap') {
    problemas.push({
      id: 'gestion_manual',
      texto: 'Manual management is stealing your time and causing errors',
      detalle: 'Without automation, every new sale, appointment or order consumes valuable time. As volume grows, this becomes a bottleneck that stalls the business.',
    });
  }

  if (respuestas.volumen === 'alto' || respuestas.volumen === 'muy_alto') {
    if (respuestas.gestion_actual !== 'sistema_ok') {
      problemas.push({
        id: 'volumen_sin_sistema',
        texto: 'High volume without a system is a ticking time bomb',
        detalle: 'With more than 100 monthly transactions and no centralized system, the risk of errors, lost clients and team burnout grows exponentially.',
      });
    }
  }

  if (respuestas.presencia_digital === 'web_basica') {
    problemas.push({
      id: 'web_no_convierte',
      texto: 'Your current website isn\'t converting visits into clients',
      detalle: 'Having a website doesn\'t guarantee clients. Without a clear conversion strategy, most visitors leave without leaving their information or making contact.',
    });
  }

  if (respuestas.sp_turnos === 'si_clave') {
    if (respuestas.gestion_actual === 'excel_wasap' || respuestas.gestion_actual === 'manual_todo') {
      problemas.push({
        id: 'agenda_manual',
        texto: 'Managing appointments/schedule via WhatsApp is inefficient and causes no-shows',
        detalle: 'Without a booking system, you waste time coordinating, have higher no-show rates and the client experience feels unprofessional.',
      });
    }
  }

  return problemas.slice(0, 4);
}

export function generarOportunidades_EN(scores, respuestas, rubroId, solucionId) {
  const ops = [];

  const solucionesCaptan = ['landing_leads', 'web_portfolio', 'web_institucional', 'web_pedidos_gastronomia'];
  if (solucionesCaptan.includes(solucionId) || respuestas.objetivo === 'conseguir_clientes') {
    ops.push({
      id: 'gen_leads',
      texto: 'You can generate a constant and predictable flow of inquiries',
      detalle: 'With the right digital strategy, the online channel can become your main source of clients, working 24/7 without you needing to be present.',
    });
  }

  const solucionesAutomatizan = ['web_reservas', 'sistema_gestion', 'web_pedidos_gastronomia', 'ecommerce'];
  if (
    solucionesAutomatizan.includes(solucionId) &&
    (respuestas.gestion_actual === 'excel_wasap' || respuestas.gestion_actual === 'manual_todo' || scores.automatizacion >= 3)
  ) {
    ops.push({
      id: 'automatizar',
      texto: 'You can reclaim hours of weekly work by automating key processes',
      detalle: 'Appointments, confirmations, reminders, order management and inventory are processes that can run on their own with the right system.',
    });
  }

  const solucionesVenden = ['ecommerce', 'plataforma_educativa', 'web_pedidos_gastronomia'];
  if (solucionesVenden.includes(solucionId)) {
    ops.push({
      id: 'vender_24_7',
      texto: 'You can sell online 24/7 without intermediaries or third-party commissions',
      detalle: 'Your own sales channel frees you from delivery apps, marketplaces and social media, increasing your margin per sale.',
    });
  }

  if (respuestas.estado_negocio === 'creciendo' || respuestas.objetivo === 'escalar') {
    ops.push({
      id: 'escalar',
      texto: 'With the right digital foundation, you can scale without hiring more staff',
      detalle: 'Automation and the right systems allow you to handle more clients and operations with the same team you have today.',
    });
  }

  const rubrosAutoridad = ['servicios_profesionales', 'marca_personal', 'empresa_b2b', 'educacion'];
  const solucionesAutoridad = ['web_portfolio', 'web_institucional', 'plataforma_educativa', 'landing_leads'];
  if (rubrosAutoridad.includes(rubroId) && solucionesAutoridad.includes(solucionId)) {
    ops.push({
      id: 'autoridad',
      texto: 'You can position yourself as a reference in your industry through digital content',
      detalle: 'A blog, project portfolio and well-presented testimonials build authority and trust before the client has the first contact with you.',
    });
  }

  return ops.slice(0, 4);
}

export function generarEstrategia_EN(solucionId) {
  const estrategias = {
    landing_leads: [
      'Launch the landing focused on a single CTA (contact or inquiry)',
      'Connect with WhatsApp Business for quick response',
      'Use Instagram/Facebook to drive traffic to the landing',
      'Once the model is validated, scale with Google Ads',
    ],
    web_portfolio: [
      'Publish the best 5-8 documented projects or cases',
      'Rank on Google with local and service-based SEO',
      'Use LinkedIn to amplify the professional portfolio',
      'Add contextual inquiry form by project type',
    ],
    web_institucional: [
      'Start with the key pages: home, services, contact',
      'Start a blog with content aimed at common industry questions',
      'Local SEO to rank in your city or area',
      'Measure and optimize the pages with the most traffic',
    ],
    web_reservas: [
      'Migrate current schedule to the digital system gradually',
      'Communicate the new booking system to existing clients',
      'Activate automatic reminders to reduce no-shows',
      'Use the website as the central hub for all communication channels',
    ],
    ecommerce: [
      'Start with the 20 best-selling or most profitable products',
      'Set up local payment gateways and alternative payment methods',
      'Use social media with direct links to the shopping cart',
      'Implement email marketing from the first order',
    ],
    plataforma_educativa: [
      'Launch with a first course or mini-course to validate',
      'Use a standalone sales landing page for each course',
      'Build an email list before launching',
      'Iterate content based on feedback from first students',
    ],
    sistema_gestion: [
      'Map all current processes before digitalizing',
      'Prioritize the most critical modules for the first launch',
      'Train the team progressively on the new system',
      'Track monthly time saved to calculate ROI',
    ],
    web_pedidos_gastronomia: [
      'Migrate WhatsApp orders to the system gradually',
      'Use the digital menu as a social media business card',
      'Activate Google My Business with link to the website and menu',
      'Promote direct orders vs. apps to increase margin',
    ],
  };

  return estrategias[solucionId] || estrategias['landing_leads'];
}

// Modify generateDiagnostico to support lang
const _generateDiagnosticoES = generateDiagnostico;

/**
 * Lang-aware version of generateDiagnostico.
 * Pass lang='en' to get English output.
 */
export function generateDiagnosticoLang(respuestas, rubroId, subtipoId, lang = 'es') {
  if (lang !== 'en') return generateDiagnostico(respuestas, rubroId, subtipoId);

  // ── English path ──
  const scores = { captacion: 0, ventas_online: 0, automatizacion: 0, complejidad: 0, presupuesto_nivel: 2 };

  const todasLasPreguntas = [
    ...PREGUNTAS_COMUNES_EN,
    ...(PREGUNTAS_POR_RUBRO_EN[rubroId] || []),
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

  scores._respuestas = respuestas;

  const solucionId  = resolverSolucion(scores, rubroId, subtipoId);
  const solucion    = SOLUCIONES_EN[solucionId];
  // Re-map alternativas to EN data
  const alternativasEN = resolverAlternativas(solucionId, scores, rubroId, subtipoId)
    .map(alt => SOLUCIONES_EN[alt.id])
    .filter(Boolean);

  const problemas     = generarProblemas_EN(scores, respuestas);
  const oportunidades = generarOportunidades_EN(scores, respuestas, rubroId, solucionId);
  const estrategia    = generarEstrategia_EN(solucionId);

  const rubros    = RUBROS_EN;
  const rubro     = rubros.find(r => r.id === rubroId);
  const subtipo   = rubro?.subtipos.find(s => s.id === subtipoId);

  const estadoLabels = {
    idea: 'at the idea stage', empezando: 'just starting out',
    funcionando: 'fully operational', creciendo: 'actively growing',
  };
  const objetivoLabels = {
    conseguir_clientes: 'get more clients', vender_online: 'sell online',
    automatizar: 'automate your processes', imagen_marca: 'improve your brand image',
    escalar: 'scale the business', todo: 'grow on multiple fronts',
  };

  const problemasList    = problemas.map(p => `• ${p.texto}`).join('\n');
  const oportunidadesList = oportunidades.map(o => `• ${o.texto}`).join('\n');

  const diagnosticoNarrativo = `We analyzed your situation as ${subtipo?.label || rubro?.label || 'business'} which is ${estadoLabels[respuestas.estado_negocio] || 'operating'}, with the goal of ${objetivoLabels[respuestas.objetivo] || 'growing digitally'}. We identified ${problemas.length} areas for improvement and ${oportunidades.length} key opportunities you can capitalize on with the right solution.\n\nAreas for improvement:\n${problemasList}\n\nKey opportunities:\n${oportunidadesList}`;

  return {
    rubroId,
    subtipoId,
    scores,
    solucion,
    alternativas: alternativasEN,
    problemas,
    oportunidades,
    estrategia,
    diagnosticoNarrativo,
    fechaGenerado: new Date().toISOString(),
  };
}
