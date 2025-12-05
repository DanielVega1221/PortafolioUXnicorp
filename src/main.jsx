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

// ⚠️ MEJORA: Lazy loading para rutas
const ComoTrabajamosLazy = React.lazy(() => import('./pages/ComoTrabajamos'));

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/como-trabajamos" element={<ComoTrabajamosLazy />} />
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
