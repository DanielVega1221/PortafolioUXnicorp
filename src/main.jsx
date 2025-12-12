/**
 * ENTRY POINT - Router y configuración principal
 * 
 * Este archivo maneja:
 * - Router de React Router v7 (todas las rutas del sitio)
 * - Lazy loading de páginas completas para mejor performance
 * - Animaciones de transición entre páginas (Framer Motion)
 * - SEO (React Helmet Provider para meta tags dinámicos)
 * 
 * RUTAS:
 * / → App.jsx (home con todas las secciones)
 * /sobre-nosotros → Página completa del equipo
 * /como-trabajamos → Metodología y cultura
 * * → 404 Not Found
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import ComoTrabajamos from './pages/ComoTrabajamos';
import NotFound from './pages/NotFound';
import './index.css';
import './responsive-utils.css';

// Lazy loading para páginas completas (mejora tiempo de carga inicial)
const ComoTrabajamosLazy = React.lazy(() => import('./pages/ComoTrabajamos'));
const SobreNosotrosLazy = React.lazy(() => import('./pages/SobreNosotros'));

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/como-trabajamos" element={<ComoTrabajamosLazy />} />
        <Route path="/sobre-nosotros" element={<SobreNosotrosLazy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <React.Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <AnimatedRoutes />
        </React.Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
