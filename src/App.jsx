import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from './componentes/Navbar/Navbar';
import Inicio from './componentes/Contenido/Inicio';
import SobreNosotros from './componentes/Contenido/SobreNosotros';
import './App.css';
import './section-glass-card.css';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

// ⚠️ MEJORA: Lazy loading para componentes pesados
const Culture = lazy(() => import('./componentes/Contenido/Culture'));
const Servicios = lazy(() => import('./componentes/Contenido/Servicios'));
const Proyectos = lazy(() => import('./componentes/Contenido/Proyectos'));
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
    const sections = ['main', 'sobre-nosotros', 'servicios', 'proyectos', 'tecnologias', 'contact'];
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
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Desarrollo Web Argentina | Programadores & Agencia Web Profesional - UXnicorp</title>
        <meta name="description" content="⭐ Agencia de desarrollo web y programación en Argentina. Programadores expertos en React, Node.js y Next.js. Creamos páginas web, e-commerce y sistemas a medida. +50 proyectos exitosos 🚀" />
        
        <meta name="keywords" content="desarrollo web argentina, programadores argentina, agencia web, agencia de programación, desarrollo páginas web, devs argentina, programación web, desarrolladores web, agencia desarrollo software, agencia digital argentina, react developers, programadores freelance, empresa desarrollo web, servicios programación, desarrollo frontend backend, crear página web, diseño web profesional, e-commerce argentina" />
        
        <meta property="og:title" content="Desarrollo Web Argentina | Programadores & Agencia Web - UXnicorp" />
        <meta property="og:description" content="Agencia de desarrollo web profesional. Programadores expertos en React, Node.js. Creamos tu página web, e-commerce o sistema a medida. Presupuesto gratis" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uxnicorp.com" />
        <meta property="og:image" content="https://uxnicorp.com/og-image.jpg" />
        <meta property="og:locale" content="es_AR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desarrollo Web Argentina | Programadores & Agencia Web" />
        <meta name="twitter:description" content="Agencia de desarrollo web profesional. Programadores expertos creando soluciones web exitosas" />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="UXnicorp" />
        <link rel="canonical" href="https://uxnicorp.com" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "UXnicorp - Agencia de Desarrollo Web",
            "alternateName": "UXnicorp Programadores",
            "url": "https://uxnicorp.com",
            "logo": "https://uxnicorp.com/logo.png",
            "image": "https://uxnicorp.com/og-image.jpg",
            "description": "Agencia de desarrollo web y programación en Argentina. Especialistas en React, Node.js, Next.js. Desarrollo de páginas web, e-commerce y sistemas a medida.",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AR",
              "addressRegion": "Catamarca",
              "addressLocality": "San Fernando del Valle de Catamarca"
            },
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
                "areaServed": ["AR", "LATAM"],
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
            ],
            "areaServed": {
              "@type": "Country",
              "name": "Argentina"
            }
          })}
        </script>
      </Helmet>
      
      <Navbar activeSection={activeSection} hidden={hideNavbar} />
      <main className="main-cards-wrapper">
        <Inicio />
        <SobreNosotros />
        <Suspense fallback={<LoadingFallback />}>
          <Servicios />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Proyectos />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Tecnologias />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <CTASection 
            titulo="¿Querés saber cómo trabajamos?"
            descripcion="Conocé nuestra metodología, cultura y proceso de trabajo"
            textoBoton="Descubrí cómo lo hacemos"
            linkTo="/como-trabajamos"
          />
        </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ContactoFormulario />
      </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
}

export default App;