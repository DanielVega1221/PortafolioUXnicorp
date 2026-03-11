/**
 * ENTRY POINT - Router y configuración principal
 *
 * RUTAS (con prefijo de idioma):
 * /          → redirect a /es/ o /en/ según navegador / localStorage
 * /es/       → Home en español
 * /en/       → Home en inglés
 * /es|en/... → Resto de páginas en el idioma correspondiente
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import NotFound from './pages/NotFound';
import './i18n';
import i18n from './i18n';
import './index.css';
import './responsive-utils.css';

// Lazy loading para páginas completas
const ComoTrabajamosLazy        = React.lazy(() => import('./pages/ComoTrabajamos'));
const SobreNosotrosLazy         = React.lazy(() => import('./pages/SobreNosotros'));
const CasosRealesLazy           = React.lazy(() => import('./pages/CasosReales'));
const LandingPagesLazy          = React.lazy(() => import('./pages/LandingPages'));
const ServiciosLazy             = React.lazy(() => import('./pages/Servicios'));
const AuditoriasLazy            = React.lazy(() => import('./pages/Auditorias'));
const LandingPagesServiciosLazy = React.lazy(() => import('./pages/LandingPagesServicios'));
const EcommerceLazy             = React.lazy(() => import('./pages/Ecommerce'));
const SistemasGestionLazy       = React.lazy(() => import('./pages/SistemasGestion'));
const PaquetesServiciosLazy     = React.lazy(() => import('./pages/PaquetesServicios'));
const ArquitecturaLazy          = React.lazy(() => import('./pages/Arquitectura'));
const GastronomiaLazy           = React.lazy(() => import('./pages/Gastronomia'));

const SUPPORTED_LANGS = ['es', 'en'];

/** Lee el idioma preferido: localStorage → navegador → 'es' */
function detectLang() {
  const stored = localStorage.getItem('preferredLang');
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = navigator.language?.slice(0, 2);
  return SUPPORTED_LANGS.includes(browser) ? browser : 'es';
}

/** Redirige / → /:lang detectado */
function RootRedirect() {
  return <Navigate to={`/${detectLang()}`} replace />;
}

/**
 * Valida el :lang param, sincroniza con i18next y renderiza rutas hijas.
 */
function LangWrapper() {
  const { lang } = useParams();

  React.useEffect(() => {
    if (SUPPORTED_LANGS.includes(lang) && i18n.language?.slice(0, 2) !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem('preferredLang', lang);
    }
  }, [lang]);

  if (!SUPPORTED_LANGS.includes(lang)) {
    return <Navigate to="/es" replace />;
  }

  return (
    <React.Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <Outlet />
    </React.Suspense>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Raíz → detectar idioma y redirigir */}
      <Route path="/" element={<RootRedirect />} />

      {/* Rutas con prefijo de idioma */}
      <Route path="/:lang" element={<LangWrapper />}>
        <Route index                              element={<App />} />
        <Route path="como-trabajamos"             element={<ComoTrabajamosLazy />} />
        <Route path="sobre-nosotros"              element={<SobreNosotrosLazy />} />
        <Route path="servicios"                   element={<ServiciosLazy />} />
        <Route path="servicios/auditorias"        element={<AuditoriasLazy />} />
        <Route path="servicios/landing-pages"     element={<LandingPagesServiciosLazy />} />
        <Route path="servicios/ecommerce"         element={<EcommerceLazy />} />
        <Route path="servicios/sistemas-gestion"  element={<SistemasGestionLazy />} />
        <Route path="servicios/paquetes"          element={<PaquetesServiciosLazy />} />
        <Route path="casos-reales"                element={<CasosRealesLazy />} />
        <Route path="landing-pages"               element={<LandingPagesLazy />} />
        <Route path="arquitectura"                element={<ArquitecturaLazy />} />
        <Route path="gastronomia"                 element={<GastronomiaLazy />} />
      </Route>

      {/* Redirecciones de rutas antiguas (sin prefijo) → /es/... */}
      <Route path="/como-trabajamos"            element={<Navigate to="/es/como-trabajamos" replace />} />
      <Route path="/sobre-nosotros"             element={<Navigate to="/es/sobre-nosotros" replace />} />
      <Route path="/servicios"                  element={<Navigate to="/es/servicios" replace />} />
      <Route path="/servicios/auditorias"       element={<Navigate to="/es/servicios/auditorias" replace />} />
      <Route path="/servicios/landing-pages"    element={<Navigate to="/es/servicios/landing-pages" replace />} />
      <Route path="/servicios/ecommerce"        element={<Navigate to="/es/servicios/ecommerce" replace />} />
      <Route path="/servicios/sistemas-gestion" element={<Navigate to="/es/servicios/sistemas-gestion" replace />} />
      <Route path="/servicios/paquetes"         element={<Navigate to="/es/servicios/paquetes" replace />} />
      <Route path="/casos-reales"               element={<Navigate to="/es/casos-reales" replace />} />
      <Route path="/landing-pages"              element={<Navigate to="/es/landing-pages" replace />} />
      <Route path="/arquitectura"               element={<Navigate to="/es/arquitectura" replace />} />
      <Route path="/gastronomia"                element={<Navigate to="/es/gastronomia" replace />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

export { AnimatedRoutes };
