import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { seoConfig } from '../src/utils/seoConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtml = path.join(distDir, 'index.html');
const BASE = 'https://www.uxnicorp.com.ar';

/**
 * Escapa caracteres especiales para inyección segura en atributos HTML.
 */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Devuelve metadatos completos para cada ruta incluyendo hreflang URLs.
 * Para versiones EN usa los datos del sub-objeto `cfg.en` si existen,
 * si no usa los datos ES como fallback.
 */
function getRouteMeta(route) {
  const isEn     = route.startsWith('/en');
  const htmlLang = isEn ? 'en-US' : 'es-AR';
  const canonical = `${BASE}${route}`;
  // Calcula URLs hreflang eliminando el prefijo de idioma
  const basePath      = route.replace(/^\/(es|en)/, '');
  const hreflangEsUrl = `${BASE}/es${basePath}`;
  const hreflangEnUrl = `${BASE}/en${basePath}`;

  const pick = (key) => {
    const cfg = seoConfig[key];
    if (!cfg) return null;
    return {
      title:          (isEn && cfg.en?.title)          ? cfg.en.title          : cfg.title,
      description:    (isEn && cfg.en?.description)    ? cfg.en.description    : cfg.description,
      ogTitle:        (isEn && cfg.en?.ogTitle)        ? cfg.en.ogTitle        : (cfg.ogTitle        || null),
      ogDescription:  (isEn && cfg.en?.ogDescription)  ? cfg.en.ogDescription  : (cfg.ogDescription  || null),
    };
  };

  const map = {
    '/es':                               pick('home'),
    '/en':                               pick('home'),
    '/es/sobre-nosotros':                pick('sobreNosotros'),
    '/en/sobre-nosotros':                pick('sobreNosotros'),
    '/es/como-trabajamos':               pick('comoTrabajamos'),
    '/en/como-trabajamos':               pick('comoTrabajamos'),
    '/es/servicios':                     pick('servicios'),
    '/en/servicios':                     pick('servicios'),
    '/es/servicios/auditorias':          pick('auditorias'),
    '/en/servicios/auditorias':          pick('auditorias'),
    '/es/servicios/landing-pages':       pick('landingPages'),
    '/en/servicios/landing-pages':       pick('landingPages'),
    '/es/servicios/ecommerce':           pick('ecommerce'),
    '/en/servicios/ecommerce':           pick('ecommerce'),
    '/es/servicios/webs-profesionales':  pick('websProfesionales'),
    '/en/servicios/webs-profesionales':  pick('websProfesionales'),
    '/es/servicios/plataforma-educativa':pick('plataformaEducativa'),
    '/en/servicios/plataforma-educativa':pick('plataformaEducativa'),
    '/es/servicios/sistemas-gestion':    pick('sistemasGestion'),
    '/en/servicios/sistemas-gestion':    pick('sistemasGestion'),
    '/es/servicios/paquetes':            pick('paquetes'),
    '/en/servicios/paquetes':            pick('paquetes'),
    '/es/casos-reales':                  pick('casosReales'),
    '/en/casos-reales':                  pick('casosReales'),
    '/es/landing-pages':                 pick('landingPagesHub'),
    '/en/landing-pages':                 pick('landingPagesHub'),
    '/es/arquitectura':                  pick('arquitectura'),
    '/en/arquitectura':                  pick('arquitectura'),
    '/es/gastronomia':                   pick('gastronomia'),
    '/en/gastronomia':                   pick('gastronomia'),
    '/es/diagnostico':                   pick('diagnostico'),
    '/en/diagnostico':                   pick('diagnostico'),
  };

  const meta = map[route];
  if (!meta) return null;
  return { ...meta, canonical, htmlLang, hreflangEsUrl, hreflangEnUrl };
}

// Todas las rutas que necesitan un index.html propio
const routes = [
  '/es', '/en',
  '/es/sobre-nosotros',          '/en/sobre-nosotros',
  '/es/como-trabajamos',         '/en/como-trabajamos',
  '/es/servicios',               '/en/servicios',
  '/es/servicios/auditorias',    '/en/servicios/auditorias',
  '/es/servicios/landing-pages', '/en/servicios/landing-pages',
  '/es/servicios/ecommerce',     '/en/servicios/ecommerce',
  '/es/servicios/webs-profesionales',   '/en/servicios/webs-profesionales',
  '/es/servicios/plataforma-educativa', '/en/servicios/plataforma-educativa',
  '/es/servicios/sistemas-gestion',     '/en/servicios/sistemas-gestion',
  '/es/servicios/paquetes',      '/en/servicios/paquetes',
  '/es/casos-reales',            '/en/casos-reales',
  '/es/landing-pages',           '/en/landing-pages',
  '/es/arquitectura',            '/en/arquitectura',
  '/es/gastronomia',             '/en/gastronomia',
  '/es/diagnostico',             '/en/diagnostico',
];

async function generateStaticPages() {
  console.log('📄 Generando páginas estáticas con metadata única por ruta...\n');

  if (!fs.existsSync(indexHtml)) {
    console.error('❌ Error: index.html no encontrado en dist/');
    process.exit(1);
  }

  const indexContent = await fs.readFile(indexHtml, 'utf-8');

  for (const route of routes) {
    const meta      = getRouteMeta(route);
    const routePath = path.join(distDir, route);
    const htmlFile  = path.join(routePath, 'index.html');

    await fs.ensureDir(routePath);

    let content = indexContent;

    if (meta) {
      // 1. Atributo lang del elemento <html>
      content = content.replace(
        /(<html[^>]*\slang=")[^"]*(")/i,
        `$1${meta.htmlLang}$2`
      );
      // 2. <title>
      content = content.replace(
        /<title>[^<]*<\/title>/,
        `<title>${escHtml(meta.title)}</title>`
      );
      // 3. <meta name="description">
      content = content.replace(
        /<meta\s+name="description"[^>]*>/i,
        `<meta name="description" content="${escHtml(meta.description)}" />`
      );
      // 4. <link rel="canonical">
      content = content.replace(
        /<link\s+rel="canonical"[^>]*>/i,
        `<link rel="canonical" href="${meta.canonical}" />`
      );
      // 5. og:url
      content = content.replace(
        /<meta\s+property="og:url"[^>]*>/i,
        `<meta property="og:url" content="${meta.canonical}" />`
      );
      // 6. og:title — usa ogTitle dedicado (más social) o fallback al title SEO
      content = content.replace(
        /<meta\s+property="og:title"[^>]*>/i,
        `<meta property="og:title" content="${escHtml(meta.ogTitle || meta.title)}" />`
      );
      // 7. og:description — usa ogDescription dedicada o fallback
      content = content.replace(
        /<meta\s+property="og:description"[^>]*>/i,
        `<meta property="og:description" content="${escHtml(meta.ogDescription || meta.description)}" />`
      );
      // 8. og:locale
      const ogLocale = meta.htmlLang === 'en-US' ? 'en_US' : 'es_AR';
      content = content.replace(
        /<meta\s+property="og:locale"[^>]*>/i,
        `<meta property="og:locale" content="${ogLocale}" />`
      );
      // 9. twitter:title
      content = content.replace(
        /<meta\s+name="twitter:title"[^>]*>/i,
        `<meta name="twitter:title" content="${escHtml(meta.title)}" />`
      );
      // 10. twitter:description
      content = content.replace(
        /<meta\s+name="twitter:description"[^>]*>/i,
        `<meta name="twitter:description" content="${escHtml(meta.description)}" />`
      );
      // 11. hreflang es
      content = content.replace(
        /(<link\s+rel="alternate"\s+hreflang="es"\s+href=")[^"]*("\ *\/>)/i,
        `$1${meta.hreflangEsUrl}$2`
      );
      // 12. hreflang en
      content = content.replace(
        /(<link\s+rel="alternate"\s+hreflang="en"\s+href=")[^"]*("\ *\/>)/i,
        `$1${meta.hreflangEnUrl}$2`
      );
      // 13. hreflang x-default
      content = content.replace(
        /(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*("\ *\/>)/i,
        `$1${meta.hreflangEsUrl}$2`
      );
      // 14. meta language
      content = content.replace(
        /(<meta\s+name="language"\s+content=")[^"]*("\ *\/>)/i,
        `$1${meta.htmlLang}$2`
      );
    }

    await fs.writeFile(htmlFile, content);
    console.log(`✅ ${route.padEnd(42)} → ${meta?.title?.slice(0, 48) ?? 'default'}`);
  }

  console.log(`\n✨ ${routes.length} páginas estáticas generadas con metadata única!`);
  console.log('🚀 Cada URL entrega title, description, canonical y og únicos a Googlebot');
}

generateStaticPages().catch(err => {
  console.error('❌ Error generando páginas:', err);
  process.exit(1);
});
