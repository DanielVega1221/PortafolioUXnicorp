import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './componentes/Navbar/Navbar';
import Inicio from './componentes/Contenido/Inicio';
import SobreNosotros from './componentes/Contenido/SobreNosotros';
import './App.css';
import './section-glass-card.css';

// ⚠️ MEJORA: Lazy loading para componentes pesados
const Culture = lazy(() => import('./componentes/Contenido/Culture'));
const Tecnologias = lazy(() => import('./componentes/Contenido/Tecnologias'));
const FAQ = lazy(() => import('./componentes/Contenido/FAQ'));
const CTASection = lazy(() => import('./componentes/Contenido/CTASection'));
const ContactoFormulario = lazy(() => import('./componentes/Contenido/ContactoFormulario'));
const Footer = lazy(() => import('./componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

function App() {
  const [activeSection, setActiveSection] = useState('main');
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const sections = ['main', 'sobre-nosotros', 'servicios', 'proyectos', 'tecnologias', 'nosotros', 'metodologia', 'contact'];
    let observerInstance = null;
    let footerObserver = null;
    
    const setupObserver = () => {
      observerInstance = new IntersectionObserver(
        (entries) => {
          // Encuentra la sección más visible
          let maxRatio = 0;
          let mostVisibleSection = null;
          
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisibleSection = entry.target.id;
            }
          });
          
          if (mostVisibleSection) {
            console.log('Sección activa detectada:', mostVisibleSection);
            setActiveSection(mostVisibleSection);
          }
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
          rootMargin: '-100px 0px -100px 0px'
        }
      );

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          console.log('Observando sección:', sectionId);
          observerInstance.observe(element);
        } else {
          console.warn('Sección no encontrada:', sectionId);
        }
      });

      // Observer para el footer
      footerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setHideNavbar(entry.isIntersecting);
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px'
        }
      );

      const footer = document.querySelector('.footer-modern');
      if (footer) {
        footerObserver.observe(footer);
      }
    };

    // Delay más largo para asegurar que todo esté renderizado
    const timeoutId = setTimeout(setupObserver, 300);

    return () => {
      clearTimeout(timeoutId);
      if (observerInstance) {
        observerInstance.disconnect();
      }
      if (footerObserver) {
        footerObserver.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Desarrollo Web Argentina | Agencia de Programación Web Profesional - UXnicorp</title>
        <meta name="description" content="Agencia de desarrollo web en Argentina. Creamos landing pages, e-commerce, sistemas de gestión y ERPs. Programadores expertos en React y Node.js." />
        
        <meta name="keywords" content="desarrollo web argentina, programadores argentina, agencia web argentina, landing page argentina, ecommerce argentina, sistema gestión argentina, desarrollo web buenos aires, desarrollo web caba, desarrollo web córdoba, desarrollo web santa fe, desarrollo web mendoza, desarrollo web tucumán, desarrollo web rosario, desarrollo web la plata, desarrollo web salta, desarrollo web misiones, desarrollo web entre ríos, desarrollo web chaco, desarrollo web corrientes, desarrollo web santiago del estero, desarrollo web san juan, desarrollo web jujuy, desarrollo web neuquén, desarrollo web formosa, desarrollo web chubut, desarrollo web río negro, desarrollo web santa cruz, desarrollo web tierra del fuego, desarrollo web la pampa, desarrollo web la rioja, desarrollo web catamarca, desarrollo web san luis, programadores react argentina, agencia digital argentina, programación web profesional, crear página web argentina, diseño web argentina, erp argentina, crm argentina, auditoría ux argentina, agencia web córdoba, agencia web mendoza, agencia web rosario, programadores buenos aires, programadores córdoba" />
        
        <meta property="og:title" content="Desarrollo Web Argentina | Agencia de Programación Web - UXnicorp" />
        <meta property="og:description" content="Agencia de desarrollo web en Argentina. Landing pages, e-commerce, sistemas de gestión y ERPs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.uxnicorp.com.ar" />
        <meta property="og:image" content="https://www.uxnicorp.com.ar/og-image.jpg" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desarrollo Web Argentina | Agencia de Programación Web" />
        <meta name="twitter:description" content="Agencia de desarrollo web profesional. Programadores expertos creando soluciones web exitosas" />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="UXnicorp" />
        <link rel="canonical" href="https://www.uxnicorp.com.ar" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "UXnicorp - Agencia de Desarrollo Web",
            "alternateName": "UXnicorp Programadores",
            "url": "https://www.uxnicorp.com.ar",
            "logo": "https://www.uxnicorp.com.ar/logo.png",
            "image": "https://www.uxnicorp.com.ar/og-image.jpg",
            "description": "Agencia de desarrollo web en Argentina especializada en landing pages, e-commerce, sistemas ERP/CRM y auditorías UX. Trabajo remoto en toda Argentina.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AR",
              "addressRegion": "Buenos Aires"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Argentina"
            },
            "priceRange": "$$",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-28.4696",
              "longitude": "-65.7852"
            },
            "email": "uxnicorp@gmail.com",
            "telephone": "+54-383-436-8748",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+54-383-436-8748",
                "contactType": "customer service",
                "areaServed": "AR",
                "availableLanguage": ["Spanish", "English"]
              }
            ],
            "sameAs": [
              "https://instagram.com/uxnicorp",
              "https://linkedin.com/company/uxnicorp",
              "https://facebook.com/uxnicorp"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "50"
            },
            "serviceType": [
              "Desarrollo Web",
              "Programación",
              "Desarrollo Frontend",
              "Desarrollo Backend",
              "E-commerce",
              "Sistemas de Gestión",
              "Desarrollo React",
              "Desarrollo Next.js"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta hacer una página web en Argentina 2025?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Los costos varían según el tipo de proyecto: landing pages profesionales, páginas web institucionales, e-commerce completos y sistemas personalizados (ERP/CRM). Contactanos para recibir una propuesta personalizada."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué incluye el desarrollo de una página web?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Incluye diseño responsivo, optimización SEO, certificado SSL, hosting por 1 año, formulario de contacto, integración con redes sociales, y capacitación. Desarrollamos con React, Node.js y Next.js para máximo rendimiento."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto tiempo tarda en estar lista una web?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Landing page: 2-3 semanas. Web institucional: 3-4 semanas. E-commerce: 6-10 semanas. Sistema personalizado: 12-16 semanas. Tiempos desde aprobación de diseño y contenidos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo funciona el proceso de cotización?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nos contactas contando tu proyecto, agendamos una videollamada o chat para entender tus necesidades, y en 48 horas te enviamos una propuesta personalizada con costos, tiempos y alcance detallado. Todo sin compromiso y completamente transparente."
                }
              },
              {
                "@type": "Question",
                "name": "¿Ofrecen mantenimiento después del lanzamiento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, ofrecemos planes de mantenimiento mensuales que incluyen: actualizaciones de seguridad, backups automáticos, soporte técnico prioritario, optimización de rendimiento y una ronda de cambios mensuales para ajustes menores que necesites."
                }
              },
              {
                "@type": "Question",
                "name": "¿Trabajan con empresas de toda Argentina y otros países?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, trabajamos 100% remoto con empresas de Buenos Aires, Córdoba, Rosario, Mendoza y toda Argentina. También atendemos clientes de Latinoamérica, España y Estados Unidos. Utilizamos herramientas de comunicación modernas (Zoom, Slack, Trello) y nos adaptamos a tu zona horaria para reuniones."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué pasa si necesito cambios después del lanzamiento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Si contratas nuestro plan de mantenimiento, incluye una ronda de cambios mensuales para modificaciones menores. Los primeros 30 días después del lanzamiento también incluyen ajustes sin costo. Para cambios mayores, trabajamos con total transparencia en costos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué diferencia a UXnicorp de otras agencias?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No solo te vendemos un sitio web, nos convertimos en tu aliado tecnológico. Nos preocupamos genuinamente por el crecimiento de tu negocio y te acompañamos en cada paso. No usamos plantillas genéricas, cada proyecto es hecho a medida. Hablamos sin tecnicismos, cumplimos lo que prometemos y estamos disponibles cuando nos necesitas."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Navbar activeSection={activeSection} hidden={hideNavbar} />
      <main className="main-cards-wrapper">
        <Inicio />
        <SobreNosotros />
        <Suspense fallback={<LoadingFallback />}>
          <div id="servicios">
            <CTASection 
              titulo="¿Qué podemos hacer por tu negocio?"
              descripcion="Explorá nuestros servicios: auditorías, landing pages, e-commerce, sistemas de gestión y paquetes a medida"
              textoBoton="Ver todos los servicios"
              variant="primary"
              linkTo="/servicios"
            />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="proyectos">
            <CTASection 
              titulo="¿Querés ver nuestro trabajo en acción?"
              descripcion="Descubrí proyectos reales con resultados medibles: landing pages, sistemas de gestión y plataformas completas"
              textoBoton="Ver casos de éxito"
              variant="secondary"
              linkTo="/casos-reales"
            />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Tecnologias />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="nosotros">
            <CTASection 
              titulo="¿Querés conocer quiénes somos?"
              descripcion="Conocé nuestra historia, filosofía y al equipo detrás de UXnicorp"
              textoBoton="Sobre nosotros"
              linkTo="/sobre-nosotros"
              variant="secondary"
            />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="metodologia">
            <CTASection 
              titulo="¿Querés saber cómo trabajamos?"
              descripcion="Conocé nuestra metodología, cultura y proceso de trabajo"
              textoBoton="Descubrí cómo lo hacemos"
              linkTo="/como-trabajamos"
            />
          </div>
        </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ContactoFormulario />
      </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;