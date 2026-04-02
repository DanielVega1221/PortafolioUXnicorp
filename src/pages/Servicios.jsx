import React, { lazy, Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import LangLink from '../componentes/LangLink';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';
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
  Clock,
  Building2,
  GraduationCap
} from 'lucide-react';
import './Servicios.css';
import '../../src/section-glass-card.css';
import GlosarioTecnico from '../componentes/Contenido/GlosarioTecnico';
import LanguageToggle from '../componentes/LanguageToggle';
import { useTranslation } from 'react-i18next';

// Lazy load de componentes pesados
const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

// Datos de servicios por categoría
const SERVICIOS_DATA = {
  auditorias: [
    {
      id: 'auditoria-ux-ui',
      titulo: 'Auditoría UX/UI Profesional',
      descripcion: 'Revisión completa de tu página web para identificar qué funciona y qué se puede mejorar, sin tocar código.',
      icon: Search,
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
const GLOSARIO_DATA = [
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
  const { t, i18n } = useTranslation();
  const { lang: urlLang } = useParams();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';
  const categoriasTexto = t('paginas.servicios.categorias', { returnObjects: true });
  const categorias = [
    {
      id: 'auditorias',
      icon: Search,
      color: '#81ade7',
      link: '/servicios/auditorias',
      ...(Array.isArray(categoriasTexto) ? categoriasTexto[0] : {
        titulo: 'Auditorías UX/UI y CRO',
        descripcion: 'Analizamos tu sitio actual para identificar problemas de usabilidad, performance y conversión. Recibís un informe completo con mejoras priorizadas.',
        serviciosCount: '3 tipos de auditoría',
        highlights: ['Análisis completo', 'Informe detallado', 'Recomendaciones accionables']
      })
    },
    {
      id: 'landing-pages',
      icon: Zap,
      color: '#f37aa6',
      link: '/servicios/landing-pages',
      ...(Array.isArray(categoriasTexto) ? categoriasTexto[1] : {
        titulo: 'Landing Pages',
        descripcion: 'Páginas de conversión listas en 72hs. Desde una página básica hasta una landing premium 100% a medida con funcionalidades avanzadas.',
        serviciosCount: '5 opciones disponibles',
        highlights: ['Lista en 72hs', 'Diseño responsive', 'SEO incluido']
      })
    },
    {
      id: 'webs-profesionales',
      icon: Building2,
      color: '#C8DBF7',
      link: '/servicios/webs-profesionales',
      titulo: 'Webs Profesionales',
      descripcion: 'Sitios web institucionales de múltiples páginas y portfolios visuales de alto impacto. Para construir autoridad y credibilidad online.',
      serviciosCount: '2 opciones + demos por sector',
      highlights: ['Hasta 8 páginas', 'Blog integrado', 'SEO avanzado']
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      color: '#e0a6d8',
      link: '/servicios/ecommerce',
      ...(Array.isArray(categoriasTexto) ? categoriasTexto[2] : {
        titulo: 'Tiendas Online',
        descripcion: 'Tiendas online con carrito y pagos integrados. Desde el emprendedor que empieza hasta el negocio con alto volumen de ventas.',
        serviciosCount: '2 opciones',
        highlights: ['Mercado Pago integrado', 'Panel admin', 'Gestión de stock']
      })
    },
    {
      id: 'plataforma-educativa',
      icon: GraduationCap,
      color: '#D966B2',
      link: '/servicios/plataforma-educativa',
      titulo: 'Plataforma Educativa',
      descripcion: 'Tu propia academia online con cursos, alumnos, progreso, certificados y pagos integrados. Ingresos pasivos de tu conocimiento.',
      serviciosCount: '1 solución completa',
      highlights: ['Certificados automáticos', 'Pagos por membresía', 'Panel admin']
    },
    {
      id: 'sistemas-gestion',
      icon: Settings,
      color: '#ffc107',
      link: '/servicios/sistemas-gestion',
      ...(Array.isArray(categoriasTexto) ? categoriasTexto[3] : {
        titulo: 'Automatización & Gestión',
        descripcion: 'CRM y ERP a medida para eliminar el caos operativo, y webs con sistema de turnos para que tus clientes reserven solos las 24hs.',
        serviciosCount: '2 soluciones',
        highlights: ['Dashboard personalizado', 'Turnos automáticos', 'Escalable']
      })
    },
    {
      id: 'paquetes',
      icon: Package,
      color: '#48b8e8',
      link: '/servicios/paquetes',
      ...(Array.isArray(categoriasTexto) ? categoriasTexto[4] : {
        titulo: 'Paquetes Completos',
        descripcion: 'Combinaciones de servicios: web + branding, web + SEO, soluciones enterprise completas. Todo en uno.',
        serviciosCount: '3 paquetes',
        highlights: ['Ahorrás tiempo', 'Solución integral', 'Paquete completo']
      })
    }
  ];

  return (
    <div className="servicios-page">
      <Helmet>
        <title>Servicios Web Argentina | Landing Pages, E-commerce y ERP | UXnicorp</title>
        <meta name="description" content="Desarrollo web completo: Landing pages express, Sistemas ERP/CRM a medida, Auditorías UX/UI, E-commerce profesional. Soluciones integrales en Argentina." />
        <meta name="keywords" content="servicios desarrollo web argentina, landing page argentina, ecommerce argentina, sistema gestión argentina, auditoría ux argentina, erp argentina, agencia programacion argentina, desarrollo web buenos aires" />
        <link rel="canonical" href={`https://www.uxnicorp.com.ar/${lang}/servicios`} />
        <link rel="alternate" hrefLang="es" href="https://www.uxnicorp.com.ar/es/servicios" />
        <link rel="alternate" hrefLang="en" href="https://www.uxnicorp.com.ar/en/servicios" />
        <link rel="alternate" hrefLang="x-default" href="https://www.uxnicorp.com.ar/es/servicios" />
        <meta property="og:title" content="Servicios Web Argentina - UXnicorp" />
        <meta property="og:description" content="Landing pages express, Sistemas ERP/CRM a medida, Auditorías UX/UI, E-commerce profesional. Desarrollo completo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.uxnicorp.com.ar/${lang}/servicios`} />
        <meta property="og:image" content="https://www.uxnicorp.com.ar/og-image.jpg" />
        <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_AR'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios Web Argentina - UXnicorp" />
        <meta name="twitter:description" content="Landing pages, E-commerce, ERP/CRM y Auditorías UX. Desarrollo web profesional en Argentina." />
        <meta name="twitter:image" content="https://www.uxnicorp.com.ar/og-image.jpg" />
      </Helmet>
      <LanguageToggle />

      {/* Hero Section */}
      <section className="servicios-hero">
        <div className="servicios-hero-container">
          <LangLink to="/" className="servicios-back-link">
            <ArrowLeft size={18} />
            {t('paginas.comun.volverInicio')}
          </LangLink>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="servicios-badge">
              <Package size={16} />
              {t('paginas.servicios.badge')}
            </span>
            <h1 className="servicios-hero-title">
              {t('paginas.servicios.h1')}
            </h1>
            <p className="servicios-hero-description">
              {t('paginas.servicios.descripcion')}
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Categorías Grid */}
      <section className="categorias-section">
        <div className="categorias-container">
          {categorias.map((categoria, index) => {
            const IconComponent = categoria.icon;
            return (
              <Motion.article
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
                  </div>
                </div>

                <LangLink 
                  to={categoria.link} 
                  className="categoria-cta"
                  style={{ 
                    background: categoria.color,
                    boxShadow: `0 10px 30px ${categoria.color}40`
                  }}
                >
                  {t('paginas.servicios.verDetalles')}
                  <ArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />
                </LangLink>
              </Motion.article>
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
          titulo={t('paginas.servicios.ctaTitulo')}
          descripcion={t('paginas.servicios.ctaDesc')}
          textoBoton={t('paginas.servicios.ctaBoton')}
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
