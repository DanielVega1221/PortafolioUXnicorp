/**
 * Script para generar sitemap.xml dinámicamente
 * Se puede ejecutar con: node scripts/generate-sitemap.mjs
 *
 * Genera URLs con prefijo de idioma (/es/ y /en/) y etiquetas hreflang correctas.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const BASE = 'https://www.uxnicorp.com.ar';
const today = new Date().toISOString().split('T')[0];

// Rutas sin prefijo de idioma. Se generan versiones /es/ y /en/ para cada una.
const routes = [
  { path: '',                         changefreq: 'weekly',  priority: '1.0' },
  { path: '/sobre-nosotros',          changefreq: 'monthly', priority: '0.8' },
  { path: '/como-trabajamos',         changefreq: 'monthly', priority: '0.7' },
  { path: '/servicios',               changefreq: 'weekly',  priority: '0.9' },
  { path: '/servicios/auditorias',    changefreq: 'weekly',  priority: '0.85' },
  { path: '/servicios/landing-pages', changefreq: 'weekly',  priority: '0.85' },
  { path: '/servicios/webs-profesionales', changefreq: 'weekly', priority: '0.85' },
  { path: '/servicios/ecommerce',     changefreq: 'weekly',  priority: '0.85' },
  { path: '/servicios/plataforma-educativa', changefreq: 'weekly', priority: '0.85' },
  { path: '/servicios/sistemas-gestion', changefreq: 'weekly', priority: '0.85' },
  { path: '/servicios/paquetes',      changefreq: 'weekly',  priority: '0.85' },
  { path: '/diagnostico',             changefreq: 'monthly', priority: '0.8' },
  { path: '/casos-reales',            changefreq: 'weekly',  priority: '0.9' },
  { path: '/landing-pages',           changefreq: 'weekly',  priority: '0.8' },
  { path: '/arquitectura',            changefreq: 'monthly', priority: '0.75' },
  { path: '/gastronomia',             changefreq: 'monthly', priority: '0.75' },
];

function urlEntry({ path: p, changefreq, priority }) {
  const esUrl = `${BASE}/es${p}`;
  const enUrl = `${BASE}/en${p}`;
  return `
  <url>
    <loc>${esUrl}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${esUrl}"/>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${esUrl}"/>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(urlEntry).join('')}
</urlset>
`;

fs.writeFileSync(sitemapPath, xml);
console.log('✅ Sitemap generado exitosamente:', sitemapPath);
