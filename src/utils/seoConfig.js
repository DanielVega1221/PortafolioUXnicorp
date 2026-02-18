/**
 * Configuración SEO centralizada para todas las páginas
 * Facilita mantener consistencia y agregar schemas
 */

export const seoConfig = {
  home: {
    title: 'UXnicorp | Desarrollo Web Argentina | Landing Pages, E-commerce y Sistemas',
    description: 'Desarrollo web profesional en Argentina. Landing pages express, Sistemas ERP/CRM personalizados, Auditorías UX/UI, E-commerce con Mercado Pago.',
    keywords: 'desarrollo web argentina, agencia web argentina, landing page argentina, ecommerce argentina, sistemas personalizados argentina, auditoría ux argentina, diseño web buenos aires, programación web argentina',
    canonical: 'https://www.uxnicorp.com.ar/',
    ogTitle: 'UXnicorp - Desarrollo Web Profesional Argentina',
    ogDescription: 'Transformamos ideas en productos web. Landing pages express, e-commerce completo, sistemas a medida.',
    h1: 'Desarrollo Web que Impulsa tu Negocio',
    breadcrumb: [
      { name: 'Inicio', url: '/' }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'UXnicorp',
      'url': 'https://www.uxnicorp.com.ar',
      'logo': 'https://www.uxnicorp.com.ar/logo.png',
      'description': 'Agencia de desarrollo web especializada en landing pages, e-commerce y sistemas de gestión personalizados en Argentina.',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'AR'
      },
      'sameAs': [
        'https://www.linkedin.com/company/uxnicorp',
        'https://github.com/uxnicorp'
      ]
    }
  },
  auditorias: {
    title: 'Auditoría UX/UI Argentina | Detecta Errores que Pierden Ventas | UXnicorp',
    description: 'Auditoría UX/UI en 5-15 días. Detectamos errores que pierden ventas. Reporte completo + plan de acción concreto. Mejora conversión en Argentina.',
    keywords: 'auditoría ux argentina, auditoría ui argentina, cro argentina, optimización conversión argentina, auditoría web argentina, auditoría ux buenos aires, auditoría caba, auditoría córdoba, auditoría santa fe, auditoría mendoza, auditoría tucumán, auditoría entre ríos, auditoría salta, auditoría misiones, auditoría chaco, auditoría corrientes, auditoría santiago del estero, auditoría san juan, auditoría jujuy, auditoría formosa, auditoría neuquén, auditoría chubut, auditoría río negro, auditoría santa cruz, auditoría tierra del fuego, auditoría la pampa, auditoría la rioja, auditoría catamarca, auditoría san luis, auditoría rosario, auditoría la plata, revisión técnica web argentina, usabilidad web argentina, auditoría web latam, auditoría de usabilidad',
    canonical: 'https://www.uxnicorp.com.ar/servicios/auditorias',
    ogTitle: 'Auditoría UX/UI - Descubre Por Qué Pierdes Ventas',
    ogDescription: 'Análisis completo de usabilidad y conversión. Reporte detallado con acciones concretas para vender más.',
    h1: 'Auditorías Profesionales: Mejora tu Web desde la Raíz',
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Servicios', url: '/servicios' },
      { name: 'Auditorías', url: '/servicios/auditorias' }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Auditoría UX/UI y CRO',
      'description': 'Auditorías profesionales de usabilidad, experiencia de usuario y optimización de conversión para sitios web y aplicaciones.',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'UXnicorp',
        'url': 'https://www.uxnicorp.com.ar'
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Buenos Aires' },
        { '@type': 'City', 'name': 'Córdoba' },
        { '@type': 'City', 'name': 'Mendoza' },
        { '@type': 'City', 'name': 'Rosario' },
        { '@type': 'City', 'name': 'La Plata' },
        { '@type': 'Country', 'name': 'Argentina' }
      ],
      'serviceType': 'UX/UI Audit, CRO Optimization',
      'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': 'https://www.uxnicorp.com.ar/servicios/auditorias'
      }
    }
  },

  landingPages: {
    title: 'Landing Pages Argentina ⚡ De Idea a Online en 72 Horas | UXnicorp',
    description: 'Landing pages que convierten en 72h. Diseño profesional mobile-first, integración con Analytics y formularios. Optimizadas para SEO y conversión.',
    keywords: 'landing page argentina, landing page buenos aires, landing page caba, landing page córdoba, landing page santa fe, landing page mendoza, landing page tucumán, landing page entre ríos, landing page salta, landing page misiones, landing page chaco, landing page corrientes, landing page santiago del estero, landing page san juan, landing page jujuy, landing page formosa, landing page neuquén, landing page chubut, landing page río negro, landing page santa cruz, landing page tierra del fuego, landing page la pampa, landing page la rioja, landing page catamarca, landing page san luis, desarrollo landing pages, crear landing page argentina, landing page responsiva, landing page ecommerce, landing page seo argentina, landing pages profesionales argentina, landing page rosario, landing page la plata, landing page mar del plata',
    canonical: 'https://www.uxnicorp.com.ar/servicios/landing-pages',
    ogTitle: 'Landing Pages en 72 Horas - Diseño Profesional Argentina',
    ogDescription: 'De idea a web en tiempo récord. Diseño premium, SEO optimizado, Analytics incluido.',
    h1: 'Landing Pages Express: Desde Idea a Web en Días',
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Servicios', url: '/servicios' },
      { name: 'Landing Pages', url: '/servicios/landing-pages' }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Landing Pages Profesionales',
      'description': 'Diseño y desarrollo de landing pages profesionales con entregas rápidas, optimizadas para conversión y SEO.',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'UXnicorp',
        'url': 'https://www.uxnicorp.com.ar'
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Buenos Aires' },
        { '@type': 'City', 'name': 'Córdoba' },
        { '@type': 'City', 'name': 'Mendoza' },
        { '@type': 'City', 'name': 'Rosario' },
        { '@type': 'Country', 'name': 'Argentina' }
      ],
      'serviceType': 'Web Design, Landing Page Development',
      'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': 'https://www.uxnicorp.com.ar/servicios/landing-pages'
      }
    }
  },

  ecommerce: {
    title: 'E-commerce Argentina | Tienda Online Profesional con Mercado Pago | UXnicorp',
    description: 'E-commerce completo en Argentina: Mercado Pago integrado, gestión de envíos y stock automático. Diseño mobile-optimizado.',
    keywords: 'ecommerce argentina, tienda online argentina, ecommerce buenos aires, ecommerce caba, ecommerce córdoba, ecommerce santa fe, ecommerce mendoza, ecommerce tucumán, ecommerce entre ríos, ecommerce salta, ecommerce misiones, ecommerce chaco, ecommerce corrientes, ecommerce santiago del estero, ecommerce san juan, ecommerce jujuy, ecommerce formosa, ecommerce neuquén, ecommerce chubut, ecommerce río negro, ecommerce santa cruz, ecommerce tierra del fuego, ecommerce la pampa, ecommerce la rioja, ecommerce catamarca, ecommerce san luis, crear tienda online argentina, desarrollo ecommerce argentina, tienda virtual argentina, ecommerce mercadopago, ecommerce profesional, tienda online responsiva, carrito compras argentina, ecommerce rosario, ecommerce la plata, ecommerce mar del plata',
    canonical: 'https://www.uxnicorp.com.ar/servicios/ecommerce',
    ogTitle: 'E-commerce Profesional Argentina - Mercado Pago + Envíos',
    ogDescription: 'Tienda online completa: carrito inteligente, Mercado Pago, gestión de stock y envíos. Todo en un solo lugar.',
    h1: 'E-Commerce Profesional: Vende Online sin Complicaciones',
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Servicios', url: '/servicios' },
      { name: 'E-commerce', url: '/servicios/ecommerce' }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Desarrollo E-commerce',
      'description': 'Desarrollo de tiendas online completas con carrito de compras, pasarela de pagos, gestión de productos y envíos.',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'UXnicorp',
        'url': 'https://www.uxnicorp.com.ar'
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Buenos Aires' },
        { '@type': 'City', 'name': 'Córdoba' },
        { '@type': 'City', 'name': 'Mendoza' },
        { '@type': 'City', 'name': 'Rosario' },
        { '@type': 'Country', 'name': 'Argentina' }
      ],
      'serviceType': 'E-commerce Development, Web Store Creation',
      'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': 'https://www.uxnicorp.com.ar/servicios/ecommerce'
      }
    }
  },

  sistemasGestion: {
    title: 'Sistemas Personalizados Argentina | ERP, CRM y Software a Medida | UXnicorp',
    description: 'Sistemas personalizados para tu empresa en Argentina. ERP, CRM y automatización a medida. Escalable, soporte continuo. Optimiza tu gestión hoy.',
    keywords: 'sistemas personalizados argentina, sistema erp argentina, crm argentina, sistema gestión argentina, software a medida argentina, erp buenos aires, erp caba, erp córdoba, erp santa fe, erp mendoza, erp tucumán, erp entre ríos, erp salta, erp misiones, erp chaco, erp corrientes, erp santiago del estero, erp san juan, erp jujuy, erp formosa, erp neuquén, erp chubut, erp río negro, erp santa cruz, erp tierra del fuego, erp la pampa, erp la rioja, erp catamarca, erp san luis, crm buenos aires, crm córdoba, crm santa fe, crm mendoza, sistema de facturación argentina, software gestión empresarial, desarrollo sistemas argentina, automatización procesos argentina, erp rosario, erp la plata, sistema gestión rosario',
    canonical: 'https://www.uxnicorp.com.ar/servicios/sistemas-gestion',
    ogTitle: 'Sistemas Personalizados - ERP y CRM a Medida Argentina',
    ogDescription: 'Software adaptado 100% a tu negocio. Automatiza procesos, gestiona clientes e inventario con tecnología escalable.',
    h1: 'Sistemas de Gestión: Automatiza tu Empresa',
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Servicios', url: '/servicios' },
      { name: 'Sistemas de Gestión', url: '/servicios/sistemas-gestion' }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Sistemas ERP/CRM Personalizados',
      'description': 'Desarrollo de sistemas de gestión empresarial personalizados: ERP, CRM, facturación, inventario y automatización de procesos.',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'UXnicorp',
        'url': 'https://www.uxnicorp.com.ar'
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Buenos Aires' },
        { '@type': 'City', 'name': 'Córdoba' },
        { '@type': 'City', 'name': 'Mendoza' },
        { '@type': 'City', 'name': 'Rosario' },
        { '@type': 'City', 'name': 'La Plata' },
        { '@type': 'Country', 'name': 'Argentina' }
      ],
      'serviceType': 'Custom Software Development, ERP/CRM Implementation',
      'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': 'https://www.uxnicorp.com.ar/servicios/sistemas-gestion'
      }
    }
  },

  paquetes: {
    title: 'Paquetes Web Argentina | Soluciones Completas | UXnicorp',
    description: 'Paquetes integrales de desarrollo web en Argentina. Auditoría + Diseño + Desarrollo + Soporte. Soluciones a medida para emprendedores y empresas.',
    keywords: 'paquetes desarrollo web argentina, soluciones web argentina, paquetes servicios web, planes desarrollo web argentina, servicios web integrales argentina',
    canonical: 'https://www.uxnicorp.com.ar/servicios/paquetes',
    ogTitle: 'Paquetes de Servicios Web - UXnicorp',
    ogDescription: 'Soluciones integrales: auditoría, diseño, desarrollo y soporte en un solo paquete.',
    h1: 'Paquetes Integrales: Todo lo que Necesitas',
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Servicios', url: '/servicios' },
      { name: 'Paquetes', url: '/servicios/paquetes' }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Paquetes de Servicios Web',
      'description': 'Paquetes integrales que combinan auditoría, diseño, desarrollo web y soporte continuo para negocios.',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'UXnicorp',
        'url': 'https://www.uxnicorp.com.ar'
      },
      'areaServed': [
        { '@type': 'Country', 'name': 'Argentina' }
      ],
      'serviceType': 'Web Development Services Bundle',
      'availableChannel': {
        '@type': 'ServiceChannel',
        'serviceUrl': 'https://www.uxnicorp.com.ar/servicios/paquetes'
      }
    }
  },

  servicios: {
    title: 'Servicios Desarrollo Web Argentina ⚡ Landing Pages en 72h, E-commerce y ERP | UXnicorp',
    description: 'Desarrollo web completo: Landing pages express, Sistemas ERP/CRM a medida, Auditorías UX/UI, E-commerce profesional. Soluciones integrales en Argentina.',
    keywords: 'servicios desarrollo web argentina, landing page argentina, ecommerce argentina, sistema gestión argentina, auditoría ux argentina, erp argentina, agencia programacion argentina, desarrollo web buenos aires',
    canonical: 'https://www.uxnicorp.com.ar/servicios',
    ogTitle: 'Servicios Desarrollo Web Argentina - UXnicorp',
    ogDescription: 'Landing pages express, Sistemas ERP/CRM a medida, Auditorías UX/UI, E-commerce profesional. Desarrollo completo.',
    h1: 'Servicios de Desarrollo Web',
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Servicios', url: '/servicios' }
    ]
  },

  sobreNosotros: {
    title: 'Sobre UXnicorp | Agencia Desarrollo Web Argentina',
    description: 'Equipo de desarrollo web en Argentina especializado en Landing Pages, E-commerce y Sistemas ERP. Transparencia, entregas rápidas y metodología ágil.',
    keywords: 'equipo desarrollo web, agencia desarrollo argentina, sobre nosotros, equipo UXnicorp, desarrolladores argentina, filosofía desarrollo web, valores empresa tecnología, agencia web buenos aires',
    canonical: 'https://www.uxnicorp.com.ar/sobre-nosotros',
    ogTitle: 'Sobre UXnicorp - Agencia Desarrollo Web Argentina',
    ogDescription: 'Equipo especializado en desarrollo web. Transparencia, metodología ágil y entregas rápidas en Argentina.',
    h1: 'Sobre Nosotros',
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Sobre Nosotros', url: '/sobre-nosotros' }
    ]
  },

  comoTrabajamos: {
    title: 'Cómo Trabajamos | Proceso de Desarrollo Web Transparente | UXnicorp',
    description: 'Proceso de desarrollo web transparente: Reunión inicial, Propuesta clara, Desarrollo ágil, Entregas semanales, Soporte incluido. Metodología probada en Argentina.',
    keywords: 'metodología desarrollo web, proceso desarrollo software, metodología ágil argentina, clean code, testing software, agile development, scrum, desarrollo profesional argentina, arquitectura software, como trabajamos',
    canonical: 'https://www.uxnicorp.com.ar/como-trabajamos',
    ogTitle: 'Nuestro Proceso de Trabajo - Desarrollo Web Transparente',
    ogDescription: 'Metodología ágil, entregas semanales, comunicación constante. Proceso transparente.',
    h1: 'Cómo Trabajamos',
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Cómo Trabajamos', url: '/como-trabajamos' }
    ]
  },

  casosReales: {
    title: 'Casos de Éxito Argentina | Proyectos Web Reales con Resultados - UXnicorp',
    description: 'Casos de éxito de desarrollo web en Argentina: Landing pages, E-commerce, ERPs y Fintech. Proyectos reales con resultados medibles.',
    keywords: 'casos éxito desarrollo web argentina, proyectos web argentina, portfolio web argentina, landing pages casos éxito, ecommerce argentina casos, ejemplos desarrollo web, proyectos reales web',
    canonical: 'https://www.uxnicorp.com.ar/casos-reales',
    ogTitle: 'Casos de Éxito - Proyectos Web con Resultados Reales',
    ogDescription: 'Proyectos reales: Landing pages, E-commerce, Sistemas de Gestión y Fintech con resultados comprobados.',
    h1: 'Casos de Éxito',
    breadcrumb: [
      { name: 'Inicio', url: '/' },
      { name: 'Casos Reales', url: '/casos-reales' }
    ]
  }
};

export const createBreadcrumbSchema = (breadcrumb) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumb.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://www.uxnicorp.com.ar${item.url}`
    }))
  };
};

export const createFAQSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
};
