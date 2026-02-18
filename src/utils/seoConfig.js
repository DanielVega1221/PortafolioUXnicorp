/**
 * Configuración SEO centralizada para todas las páginas
 * Facilita mantener consistencia y agregar schemas
 */

export const seoConfig = {
  auditorias: {
    title: 'Auditorías UX/UI y CRO Argentina | UXnicorp',
    description: 'Auditorías profesionales UX/UI, CRO y técnicas en Argentina. Mejoramos usabilidad, conversión y performance. Entrega 5-15 días. Todo LATAM.',
    keywords: 'auditoría ux argentina, auditoría ui argentina, cro argentina, optimización conversión argentina, auditoría web argentina, auditoría ux buenos aires, auditoría caba, auditoría córdoba, auditoría santa fe, auditoría mendoza, auditoría tucumán, auditoría entre ríos, auditoría salta, auditoría misiones, auditoría chaco, auditoría corrientes, auditoría santiago del estero, auditoría san juan, auditoría jujuy, auditoría formosa, auditoría neuquén, auditoría chubut, auditoría río negro, auditoría santa cruz, auditoría tierra del fuego, auditoría la pampa, auditoría la rioja, auditoría catamarca, auditoría san luis, auditoría rosario, auditoría la plata, revisión técnica web argentina, usabilidad web argentina, auditoría web latam',
    canonical: 'https://www.uxnicorp.com.ar/servicios/auditorias',
    ogTitle: 'Auditorías UX/UI y CRO Argentina - UXnicorp',
    ogDescription: 'Análisis profesional de usabilidad y conversión. Mejoramos tu sitio con datos reales.',
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
    title: 'Landing Pages Argentina | Desarrollo Rápido | UXnicorp',
    description: 'Landing pages profesionales en Argentina. Entregas en 72 horas. Diseño responsive, SEO optimizado. Express Basic, Intermedia, Full y Premium.',
    keywords: 'landing page argentina, landing page buenos aires, landing page caba, landing page córdoba, landing page santa fe, landing page mendoza, landing page tucumán, landing page entre ríos, landing page salta, landing page misiones, landing page chaco, landing page corrientes, landing page santiago del estero, landing page san juan, landing page jujuy, landing page formosa, landing page neuquén, landing page chubut, landing page río negro, landing page santa cruz, landing page tierra del fuego, landing page la pampa, landing page la rioja, landing page catamarca, landing page san luis, desarrollo landing pages, crear landing page argentina, landing page responsiva, landing page ecommerce, landing page seo argentina, landing pages profesionales argentina, landing page rosario, landing page la plata, landing page mar del plata',
    canonical: 'https://www.uxnicorp.com.ar/servicios/landing-pages',
    ogTitle: 'Landing Pages Argentina - Expresas y Premium - UXnicorp',
    ogDescription: 'Tu landing page lista en 72 horas o menos. Diseño premium, SEO optimizado y convertible.',
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
    title: 'E-commerce Argentina | Tienda Online | UXnicorp',
    description: 'Desarrollo de tiendas online profesionales en Argentina. Mercado Pago, envíos, panel admin. E-commerce Simple, Robusto y Premium. 3 meses de entrega.',
    keywords: 'ecommerce argentina, tienda online argentina, ecommerce buenos aires, ecommerce caba, ecommerce córdoba, ecommerce santa fe, ecommerce mendoza, ecommerce tucumán, ecommerce entre ríos, ecommerce salta, ecommerce misiones, ecommerce chaco, ecommerce corrientes, ecommerce santiago del estero, ecommerce san juan, ecommerce jujuy, ecommerce formosa, ecommerce neuquén, ecommerce chubut, ecommerce río negro, ecommerce santa cruz, ecommerce tierra del fuego, ecommerce la pampa, ecommerce la rioja, ecommerce catamarca, ecommerce san luis, crear tienda online argentina, desarrollo ecommerce argentina, tienda virtual argentina, ecommerce mercadopago, ecommerce profesional, tienda online responsiva, carrito compras argentina, ecommerce rosario, ecommerce la plata, ecommerce mar del plata',
    canonical: 'https://www.uxnicorp.com.ar/servicios/ecommerce',
    ogTitle: 'E-commerce Argentina Profesional - UXnicorp',
    ogDescription: 'Tu tienda online completa con carrito, pagos Mercado Pago y envíos. Desarrollo profesional.',
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
    title: 'Sistemas ERP/CRM Argentina | A Medida | UXnicorp',
    description: 'Desarrollo de sistemas ERP, CRM y software a medida en Argentina. Automatización de procesos, gestión de clientes e inventario. Escalable y personalizado.',
    keywords: 'sistema erp argentina, crm argentina, sistema gestión argentina, software a medida argentina, erp buenos aires, erp caba, erp córdoba, erp santa fe, erp mendoza, erp tucumán, erp entre ríos, erp salta, erp misiones, erp chaco, erp corrientes, erp santiago del estero, erp san juan, erp jujuy, erp formosa, erp neuquén, erp chubut, erp río negro, erp santa cruz, erp tierra del fuego, erp la pampa, erp la rioja, erp catamarca, erp san luis, crm buenos aires, crm córdoba, crm santa fe, crm mendoza, sistema de facturación argentina, software gestión empresarial, desarrollo sistemas argentina, automatización procesos argentina, erp rosario, erp la plata, sistema gestión rosario',
    canonical: 'https://www.uxnicorp.com.ar/servicios/sistemas-gestion',
    ogTitle: 'Sistemas ERP y CRM Argentina - Desarrollo Personalizado - UXnicorp',
    ogDescription: 'Software a medida para tu empresa. Automatiza procesos, gestiona clientes e inventario en un solo lugar.',
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
