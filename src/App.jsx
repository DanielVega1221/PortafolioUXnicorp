import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Inicio from './componentes/Contenido/Inicio';
import SobreNosotros from './componentes/Contenido/SobreNosotros';
import LanguageToggle from './componentes/LanguageToggle';
import './App.css';
import './section-glass-card.css';

// ⚠️ MEJORA: Lazy loading para componentes pesados
const Culture = lazy(() => import('./componentes/Contenido/Culture'));
const Tecnologias = lazy(() => import('./componentes/Contenido/Tecnologias'));
const FAQ = lazy(() => import('./componentes/Contenido/FAQ'));
const CTASection = lazy(() => import('./componentes/Contenido/CTASection'));
const SolucionesSector = lazy(() => import('./componentes/Contenido/SolucionesSector'));
const ContactoFormulario = lazy(() => import('./componentes/Contenido/ContactoFormulario'));
const Footer = lazy(() => import('./componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

function App() {
  const { t, i18n } = useTranslation();
  const { lang: urlLang } = useParams();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';
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
          observerInstance.observe(element);
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
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.description')} />
        <meta name="keywords" content="desarrollo web argentina, programadores argentina, agencia web argentina, landing page argentina, ecommerce argentina, sistema gestión argentina, desarrollo web buenos aires, desarrollo web córdoba, desarrollo web rosario, desarrollo web mendoza, programadores react argentina, agencia digital argentina, crear página web argentina, diseño web argentina, erp argentina, crm argentina, auditoría ux argentina" />
        <meta property="og:title" content={t('seo.home.ogTitle')} />
        <meta property="og:description" content={t('seo.home.ogDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.uxnicorp.com.ar/${lang}`} />
        <meta property="og:image" content="https://www.uxnicorp.com.ar/og-image.jpg" />
        <meta property="og:locale" content={lang === 'es' ? 'es_AR' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.home.twitterTitle')} />
        <meta name="twitter:description" content={t('seo.home.twitterDesc')} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="UXnicorp" />
        <link rel="canonical" href={`https://www.uxnicorp.com.ar/${lang}`} />
        <link rel="alternate" hrefLang="es" href="https://www.uxnicorp.com.ar/es" />
        <link rel="alternate" hrefLang="en" href="https://www.uxnicorp.com.ar/en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.uxnicorp.com.ar/es" />
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
            "areaServed": { "@type": "Country", "name": "Argentina" },
            "priceRange": "$$",
            "email": "uxnicorp@gmail.com",
            "telephone": "+54-383-436-8748",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+54-383-436-8748",
              "contactType": "customer service",
              "areaServed": "AR",
              "availableLanguage": ["Spanish", "English"]
            }],
            "sameAs": [
              "https://instagram.com/uxnicorp",
              "https://linkedin.com/company/uxnicorp",
              "https://facebook.com/uxnicorp"
            ]
          })}
        </script>
      </Helmet>
      
      <LanguageToggle />
      <Navbar activeSection={activeSection} hidden={hideNavbar} />
      <main className="main-cards-wrapper">
        <Inicio />
        <SobreNosotros />
        <Suspense fallback={<LoadingFallback />}>
          <div id="servicios">
            <CTASection 
              titulo={t('cta.serviciosTitulo')}
              descripcion={t('cta.serviciosDesc')}
              textoBoton={t('cta.serviciosBoton')}
              variant="primary"
              linkTo="/servicios"
            />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="proyectos">
            <CTASection 
              titulo={t('cta.proyectosTitulo')}
              descripcion={t('cta.proyectosDesc')}
              textoBoton={t('cta.proyectosBoton')}
              variant="secondary"
              linkTo="/casos-reales"
            />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <SolucionesSector />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Tecnologias />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="nosotros">
            <CTASection 
              titulo={t('cta.nosotrosTitulo')}
              descripcion={t('cta.nosotrosDesc')}
              textoBoton={t('cta.nosotrosBoton')}
              linkTo="/sobre-nosotros"
              variant="secondary"
            />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="metodologia">
            <CTASection 
              titulo={t('cta.metodologiaTitulo')}
              descripcion={t('cta.metodologiaDesc')}
              textoBoton={t('cta.metodologiaBoton')}
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