import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Search, 
  Zap, 
  Package, 
  ShoppingCart,
  Settings,
  Code,
  TrendingUp,
  CheckCircle,
  Info,
  HelpCircle,
  Clock
} from 'lucide-react';
import './Servicios.css';
import '../../src/section-glass-card.css';
import GlosarioTecnico from '../componentes/Contenido/GlosarioTecnico';

// Lazy load de componentes pesados
const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

// Datos de servicios por categoría
const serviciosData = {
  auditorias: [
    {
      id: 'auditoria-ux-ui',
      titulo: 'Auditoría UX/UI Profesional',
      descripcion: 'Revisión completa de tu página web para identificar qué funciona y qué se puede mejorar, sin tocar código.',
      icon: Search,
      precio: 'Desde $50.000 ARS',
      duracion: '1-2 semanas',
      incluye: [
        'Análisis heurístico completo',
        'Revisión de usabilidad en móvil y desktop',
        'Evaluación de velocidad de carga',
        'Análisis de arquitectura de información',
        'Informe detallado con prioridades',
        'Recomendaciones accionables',
        'Sesión de consultoría incluida'
      ],
      color: '#81ade7'
    },
    {
      id: 'auditoria-cro',
      titulo: 'Optimización de Conversión (CRO)',
      descripcion: 'Análisis enfocado en descubrir por qué los visitantes no convierten en clientes y cómo solucionarlo.',
      icon: TrendingUp,
      precio: 'Desde $70.000 ARS',
      duracion: '2-3 semanas',
      incluye: [
        'Análisis de embudos de conversión',
        'Revisión de CTAs y formularios',
        'Evaluación de copywriting',
        'Testing de hipótesis',
        'Heatmaps y grabaciones de sesiones',
        'Plan de acción priorizado',
        'Seguimiento de métricas'
      ],
      color: '#f37aa6'
    },
    {
      id: 'auditoria-tecnica',
      titulo: 'Revisión Técnica + Mini-Refactor',
      descripcion: 'Auditoría técnica del código más limpieza express de 1-2 módulos críticos.',
      icon: Code,
      precio: 'Desde $90.000 ARS',
      duracion: '2-4 semanas',
      incluye: [
        'Code review completo',
        'Análisis de performance',
        'Evaluación de arquitectura',
        'Refactor de 1-2 módulos críticos',
        'Optimización de consultas',
        'Documentación técnica',
        'Recomendaciones de escalabilidad'
      ],
      color: '#e0a6d8'
    }
  ],
  landingPages: [
    {
      id: 'landing-express-basic',
      titulo: 'Landing Express Basic',
      descripcion: 'Página web de una sola página lista en 72 horas con lo esencial para arrancar.',
      icon: Zap,
      precio: '$80.000 ARS',
      duracion: '72 horas',
      incluye: [
        '1 página de aterrizaje (3-4 secciones)',
        'Diseño responsive mobile-first',
        'Formulario de contacto',
        'Botón directo a WhatsApp',
        'Dominio propio (.com.ar o .com)',
        'Hosting por 1 año incluido',
        'SSL certificado (https)',
        '1 ronda de ajustes'
      ],
      color: '#81ade7',
      ideal: 'Profesionales, freelancers, pequeños negocios que necesitan presencia digital rápida'
    },
    {
      id: 'landing-express-intermedia',
      titulo: 'Landing Express Intermedia',
      descripcion: 'Landing más completa y moderna con hasta 5 secciones y animaciones profesionales.',
      icon: Zap,
      precio: '$140.000 ARS',
      duracion: '1-2 semanas',
      incluye: [
        '1 página de aterrizaje (5-6 secciones)',
        'Animaciones al scroll (Framer Motion)',
        'Diseño UX/UI premium',
        'Galería de imágenes optimizada',
        'Formularios con validación',
        'Integración con Google Analytics',
        'SEO básico implementado',
        'Hosting + dominio por 1 año',
        '2 rondas de ajustes'
      ],
      color: '#f37aa6',
      ideal: 'Estudios profesionales, consultores, agencias que quieren destacarse'
    },
    {
      id: 'landing-express-full',
      titulo: 'Landing Express Full',
      descripcion: 'Versión completa: landing de 6 secciones + 1 página adicional, optimizada para Google.',
      icon: Package,
      precio: '$220.000 ARS',
      duracion: '3-4 semanas',
      incluye: [
        'Landing principal (6-7 secciones)',
        '1 página adicional (Sobre nosotros / Portfolio)',
        'SEO técnico completo',
        'Optimización de velocidad (90+ en Google)',
        'Estrategia de contenido incluida',
        'Schema markup implementado',
        'Blog básico (opcional)',
        'Integración con CRM',
        'Hosting + dominio por 1 año',
        '3 rondas de ajustes',
        'Capacitación de uso incluida'
      ],
      color: '#e0a6d8',
      ideal: 'Empresas de servicios, clínicas, estudios jurídicos que van en serio'
    },
    {
      id: 'landing-flyer-promo',
      titulo: 'Landing Flyer Promo',
      descripcion: 'Anuncio digital en formato web para promociones puntuales y campañas específicas.',
      icon: Zap,
      precio: '$50.000 ARS',
      duracion: '48-72 horas',
      incluye: [
        'Página simple estilo flyer digital',
        'Diseño enfocado en conversión',
        'Botón directo a WhatsApp',
        'PDF descargable de la promo',
        'Contador regresivo (opcional)',
        'Formulario de captura de leads',
        'Hosting temporal 3 meses',
        'Optimizado para compartir en redes'
      ],
      color: '#ffc107',
      ideal: 'Promociones, Black Friday, lanzamientos, eventos temporales'
    },
    {
      id: 'landing-premium-medida',
      titulo: 'Landing Premium a Medida',
      descripcion: 'Desarrollo 100% personalizado con funcionalidades específicas según tu negocio.',
      icon: Package,
      precio: 'Desde $300.000 ARS',
      duracion: '4-8 semanas',
      incluye: [
        'Diseño 100% personalizado',
        'Funcionalidades específicas a medida',
        'Integraciones con sistemas externos',
        'Panel de administración',
        'Animaciones avanzadas',
        'SEO avanzado',
        'Testing A/B incluido',
        'Estrategia de marketing digital',
        'Capacitación del equipo',
        'Soporte prioritario 3 meses',
        'Ajustes ilimitados durante desarrollo'
      ],
      color: '#81ade7',
      ideal: 'Empresas grandes, startups con necesidades específicas, proyectos complejos'
    }
  ],
  ecommerce: [
    {
      id: 'ecommerce-basico',
      titulo: 'E-commerce Básico',
      descripcion: 'Tienda online funcional con carrito, pasarela de pagos y gestión de productos.',
      icon: ShoppingCart,
      precio: 'Desde $280.000 ARS',
      duracion: '4-6 semanas',
      incluye: [
        'Catálogo de productos ilimitado',
        'Carrito de compras funcional',
        'Integración Mercado Pago',
        'Gestión de stock',
        'Sistema de envíos',
        'Panel de administración',
        'Diseño responsive',
        'SEO básico para productos',
        'Hosting por 1 año',
        'Capacitación incluida'
      ],
      color: '#f37aa6'
    },
    {
      id: 'ecommerce-premium',
      titulo: 'E-commerce Premium',
      descripcion: 'Tienda completa con funcionalidades avanzadas: cupones, seguimiento, emails automatizados.',
      icon: ShoppingCart,
      precio: 'Desde $450.000 ARS',
      duracion: '8-12 semanas',
      incluye: [
        'Todo lo de E-commerce Básico',
        'Sistema de cupones y descuentos',
        'Emails transaccionales automatizados',
        'Seguimiento de pedidos en tiempo real',
        'Sistema de reviews y calificaciones',
        'Filtros avanzados de búsqueda',
        'Múltiples métodos de pago',
        'Panel de reportes y analítica',
        'Integración con redes sociales',
        'Marketing automation básico',
        'Soporte prioritario 6 meses'
      ],
      color: '#e0a6d8'
    }
  ],
  sistemasGestion: [
    {
      id: 'sistema-gestion-basico',
      titulo: 'Sistema de Gestión Básico',
      descripcion: 'CRM o ERP simple para administrar clientes, ventas o inventario.',
      icon: Settings,
      precio: 'Desde $320.000 ARS',
      duracion: '6-10 semanas',
      incluye: [
        'Dashboard con métricas clave',
        'Gestión de clientes (CRM)',
        'Gestión de ventas y presupuestos',
        'Control de inventario',
        'Generación de reportes PDF',
        'Sistema de usuarios y permisos',
        'Backup automático',
        'Base de datos segura',
        'Capacitación del equipo',
        'Soporte 3 meses'
      ],
      color: '#81ade7'
    },
    {
      id: 'sistema-gestion-avanzado',
      titulo: 'Sistema de Gestión Avanzado',
      descripcion: 'ERP completo con módulos integrados para toda tu operación empresarial.',
      icon: Settings,
      precio: 'Desde $600.000 ARS',
      duracion: '12-20 semanas',
      incluye: [
        'Todo lo de Sistema Básico',
        'Módulo de facturación electrónica',
        'Integración con AFIP',
        'Sistema de compras y proveedores',
        'Gestión de recursos humanos',
        'Control de proyectos',
        'Reportes avanzados con gráficos',
        'API REST para integraciones',
        'App móvil (iOS/Android)',
        'Arquitectura escalable',
        'Soporte prioritario 12 meses',
        'Actualizaciones incluidas'
      ],
      color: '#f37aa6'
    }
  ],
  paquetes: [
    {
      id: 'paquete-emprendedor',
      titulo: 'Paquete Emprendedor',
      descripcion: 'Landing + Branding básico + Social media templates.',
      icon: Package,
      precio: '$180.000 ARS',
      duracion: '3-4 semanas',
      incluye: [
        'Landing Express Intermedia',
        'Logo profesional',
        'Paleta de colores',
        'Tipografías corporativas',
        '10 templates para Instagram',
        'Guía de marca básica',
        'Tarjetas digitales'
      ],
      color: '#81ade7'
    },
    {
      id: 'paquete-crecimiento',
      titulo: 'Paquete Crecimiento',
      descripcion: 'Sitio web completo + SEO + Marketing inicial.',
      icon: TrendingUp,
      precio: '$350.000 ARS',
      duracion: '6-8 semanas',
      incluye: [
        'Landing Express Full',
        'Estrategia SEO completa',
        'Keyword research',
        'Optimización on-page',
        'Google My Business configurado',
        'Email marketing setup',
        'Pixel de Facebook/Meta',
        '3 meses de consultoría SEO'
      ],
      color: '#f37aa6'
    },
    {
      id: 'paquete-enterprise',
      titulo: 'Paquete Enterprise',
      descripcion: 'Solución completa: Web + Sistema + Branding + Marketing.',
      icon: Package,
      precio: 'Consultar',
      duracion: '12-24 semanas',
      incluye: [
        'Sitio web corporativo completo',
        'Sistema de gestión a medida',
        'Identidad de marca completa',
        'Estrategia digital 360°',
        'Desarrollo de app móvil',
        'Integración de sistemas',
        'Capacitación del equipo',
        'Soporte anual incluido',
        'Growth hacking',
        'Consultoría mensual'
      ],
      color: '#e0a6d8'
    }
  ]
};

// Glosario técnico
const glosarioData = [
  {
    termino: 'Responsive',
    definicion: 'Diseño que se adapta automáticamente a cualquier tamaño de pantalla (celular, tablet, computadora) para que tu web se vea bien en todos los dispositivos.'
  },
  {
    termino: 'SEO (Search Engine Optimization)',
    definicion: 'Optimización para motores de búsqueda. Son técnicas para que tu web aparezca en los primeros resultados de Google cuando alguien busca tus servicios.'
  },
  {
    termino: 'Landing Page',
    definicion: 'Página de aterrizaje diseñada específicamente para convertir visitantes en clientes. Tiene un objetivo claro: que te contacten, compren o se registren.'
  },
  {
    termino: 'CRM (Customer Relationship Management)',
    definicion: 'Sistema para gestionar clientes: guardar contactos, hacer seguimiento de ventas, registrar interacciones. Como una agenda inteligente para tu negocio.'
  },
  {
    termino: 'ERP (Enterprise Resource Planning)',
    definicion: 'Sistema para administrar toda tu empresa: ventas, compras, inventario, facturación, empleados, todo integrado en un solo lugar.'
  },
  {
    termino: 'UX/UI (User Experience / User Interface)',
    definicion: 'UX es la experiencia del usuario (qué tan fácil es usar tu web). UI es la interfaz (cómo se ve). Juntos hacen que tu web sea bonita Y fácil de usar.'
  },
  {
    termino: 'CRO (Conversion Rate Optimization)',
    definicion: 'Optimización de tasa de conversión. Hacer cambios en tu web para que más visitantes se conviertan en clientes, sin necesidad de más tráfico.'
  },
  {
    termino: 'Hosting',
    definicion: 'El "alojamiento" de tu web. Es como el terreno donde está construida tu casa digital. Sin hosting, tu web no existe en internet.'
  },
  {
    termino: 'Dominio',
    definicion: 'La dirección de tu web (ejemplo: tuempresa.com). Es como el nombre de tu negocio en internet, único y exclusivo.'
  },
  {
    termino: 'SSL/HTTPS',
    definicion: 'Certificado de seguridad que hace que tu web sea confiable (aparece el candadito en el navegador). Google prioriza webs con SSL.'
  },
  {
    termino: 'API (Application Programming Interface)',
    definicion: 'Conexión entre diferentes sistemas. Por ejemplo, conectar tu web con Mercado Pago, con tu sistema de envíos o con redes sociales.'
  },
  {
    termino: 'Dashboard',
    definicion: 'Panel de control con gráficos y métricas clave. Te permite ver el estado de tu negocio de un vistazo: ventas, clientes, inventario, etc.'
  },
  {
    termino: 'Backup',
    definicion: 'Copia de seguridad de tu web o sistema. Si algo falla, se puede restaurar todo como estaba. Como tener un "guardado" de tu juego favorito.'
  },
  {
    termino: 'Escalable',
    definicion: 'Que puede crecer sin problemas. Un sistema escalable funciona bien si tenés 10 clientes o 10.000, sin necesidad de rehacer todo.'
  },
  {
    termino: 'Pasarela de Pago',
    definicion: 'Sistema para cobrar online (como Mercado Pago, Stripe). Permite que tus clientes paguen con tarjeta de forma segura en tu web.'
  }
];

function Servicios() {
  const categorias = [
    {
      id: 'auditorias',
      titulo: 'Auditorías UX/UI y CRO',
      descripcion: 'Analizamos tu sitio actual para identificar problemas de usabilidad, performance y conversión. Recibís un informe completo con mejoras priorizadas.',
      icon: Search,
      color: '#81ade7',
      serviciosCount: '3 tipos de auditoría',
      precioDesde: 'Desde $120.000',
      link: '/servicios/auditorias',
      highlights: ['Análisis completo', 'Informe detallado', 'Recomendaciones accionables']
    },
    {
      id: 'landing-pages',
      titulo: 'Landing Pages',
      descripcion: 'Páginas de aterrizaje diseñadas para convertir. Desde landing express en 72hs hasta soluciones premium a medida.',
      icon: Zap,
      color: '#f37aa6',
      serviciosCount: '5 paquetes disponibles',
      precioDesde: 'Desde $120.000',
      link: '/servicios/landing-pages',
      highlights: ['Listas en 72-96hs', 'Diseño responsive', 'SEO incluido']
    },
    {
      id: 'ecommerce',
      titulo: 'E-commerce',
      descripcion: 'Tiendas online completas con carrito, pasarela de pagos, gestión de productos y envíos. Todo lo que necesitás para vender online.',
      icon: ShoppingCart,
      color: '#e0a6d8',
      serviciosCount: '2 opciones',
      precioDesde: 'Desde $540.000',
      link: '/servicios/ecommerce',
      highlights: ['Mercado Pago integrado', 'Panel admin', 'Control de stock']
    },
    {
      id: 'sistemas-gestion',
      titulo: 'Sistemas de Gestión',
      descripcion: 'CRM y ERP personalizados para administrar clientes, ventas, inventario y toda tu operación. Desde básico hasta avanzado según tu presupuesto.',
      icon: Settings,
      color: '#ffc107',
      serviciosCount: 'A medida',
      precioDesde: 'A consultar',
      link: '/servicios/sistemas-gestion',
      highlights: ['Dashboard personalizado', 'Módulos escalables', 'Precio según alcance']
    },
    {
      id: 'paquetes',
      titulo: 'Paquetes Completos',
      descripcion: 'Combinaciones de servicios: web + branding, web + SEO, soluciones enterprise completas. Todo en uno.',
      icon: Package,
      color: '#81ade7',
      serviciosCount: '3 paquetes',
      precioDesde: 'Desde $180.000',
      link: '/servicios/paquetes',
      highlights: ['Ahorrás tiempo', 'Solución integral', 'Mejor precio']
    }
  ];

  return (
    <div className="servicios-page">
      <Helmet>
        <title>Servicios de Desarrollo Web Argentina | Landing Pages, E-commerce, ERP - UXnicorp</title>
        <meta name="description" content="Servicios web en Argentina: Auditorías UX/UI desde $120k, Landing Pages desde $180k, E-commerce desde $540k, Sistemas ERP personalizados. Atendemos todo LATAM." />
        <meta name="keywords" content="servicios desarrollo web argentina, landing page argentina precio, ecommerce argentina, sistema gestión argentina, auditoría ux argentina, erp argentina, desarrollo web latam" />
        <link rel="canonical" href="https://uxnicorp.com/servicios" />
        <meta property="og:title" content="Servicios de Desarrollo Web Argentina - UXnicorp" />
        <meta property="og:description" content="Landing pages, E-commerce, Sistemas ERP y Auditorías UX en Argentina. Precios claros desde $120k." />
        <meta property="og:locale" content="es_AR" />
      </Helmet>

      {/* Hero Section */}
      <section className="servicios-hero">
        <div className="servicios-hero-container">
          <Link to="/" className="servicios-back-link">
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="servicios-badge">
              <Package size={16} />
              5 Categorías de Servicios
            </span>
            <h1 className="servicios-hero-title">
              ¿Qué necesita <span style={{background: 'linear-gradient(135deg, #81ade7 0%, #f37aa6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>tu negocio</span>?
            </h1>
            <p className="servicios-hero-description">
              Elegí la categoría que mejor se adapte a tu proyecto. Cada una tiene opciones específicas con precios y detalles completos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorías Grid */}
      <section className="categorias-section">
        <div className="categorias-container">
          {categorias.map((categoria, index) => {
            const IconComponent = categoria.icon;
            return (
              <motion.article
                key={categoria.id}
                className="categoria-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="categoria-icon-wrapper" style={{ backgroundColor: `${categoria.color}20`, border: `2px solid ${categoria.color}40` }}>
                  <IconComponent size={36} style={{ color: categoria.color }} />
                </div>

                <div className="categoria-content">
                  <h2 className="categoria-titulo">{categoria.titulo}</h2>
                  <p className="categoria-descripcion">{categoria.descripcion}</p>

                  <div className="categoria-highlights">
                    {categoria.highlights.map((highlight, idx) => (
                      <span key={idx} className="categoria-highlight">
                        <CheckCircle size={14} />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="categoria-meta">
                    <span className="categoria-count">{categoria.serviciosCount}</span>
                    <span className="categoria-precio">{categoria.precioDesde}</span>
                  </div>
                </div>

                <Link 
                  to={categoria.link} 
                  className="categoria-cta"
                  style={{ 
                    background: categoria.color,
                    boxShadow: `0 10px 30px ${categoria.color}40`
                  }}
                >
                  Ver todos los detalles
                  <ArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Glosario Técnico */}
      <Suspense fallback={<LoadingFallback />}>
        <GlosarioTecnico />
      </Suspense>

      {/* CTA Final */}
      <Suspense fallback={<LoadingFallback />}>
        <CTASection 
          titulo="¿No estás seguro qué servicio necesitás?"
          descripcion="Contactanos y te asesoramos gratis para encontrar la mejor solución para tu negocio"
          textoBoton="Consultar ahora"
          linkTo="/#contact"
        />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Servicios;
