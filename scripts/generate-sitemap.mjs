/**
 * Script para generar sitemap.xml dinámicamente
 * Se puede ejecutar con: node scripts/generate-sitemap.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

// Todas las rutas del sitio
const routes = [
  {
    loc: 'https://www.uxnicorp.com.ar/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    loc: 'https://www.uxnicorp.com.ar/sobre-nosotros',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: 'https://www.uxnicorp.com.ar/como-trabajamos',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    loc: 'https://www.uxnicorp.com.ar/servicios',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: 'https://www.uxnicorp.com.ar/servicios/auditorias',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.85'
  },
  {
    loc: 'https://www.uxnicorp.com.ar/servicios/landing-pages',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.85'
  },
  {
    loc: 'https://www.uxnicorp.com.ar/servicios/ecommerce',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.85'
  },
  {
    loc: 'https://www.uxnicorp.com.ar/servicios/sistemas-gestion',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.85'
  },
  {
    loc: 'https://www.uxnicorp.com.ar/servicios/paquetes',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.85'
  },
  {
    loc: 'https://www.uxnicorp.com.ar/casos-reales',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  }
];

// Generar XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

routes.forEach(route => {
  xml += '  <url>\n';
  xml += `    <loc>${route.loc}</loc>\n`;
  xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
  xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
  xml += `    <priority>${route.priority}</priority>\n`;
  xml += '  </url>\n';
});

xml += '</urlset>\n';

// Escribir archivo
fs.writeFileSync(sitemapPath, xml);
console.log('✅ Sitemap generado exitosamente:', sitemapPath);
