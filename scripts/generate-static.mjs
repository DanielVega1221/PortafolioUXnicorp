import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtml = path.join(distDir, 'index.html');

// Todas las rutas que necesitan HTML estático
const routes = [
  '/sobre-nosotros',
  '/como-trabajamos',
  '/servicios',
  '/servicios/auditorias',
  '/servicios/landing-pages',
  '/servicios/ecommerce',
  '/servicios/sistemas-gestion',
  '/servicios/paquetes',
  '/casos-reales',
  '/landing-pages'
];

async function generateStaticPages() {
  console.log('📄 Generando páginas estáticas para SEO...\n');

  if (!fs.existsSync(indexHtml)) {
    console.error('❌ Error: index.html no encontrado en dist/');
    process.exit(1);
  }

  const indexContent = await fs.readFile(indexHtml, 'utf-8');

  for (const route of routes) {
    const routePath = path.join(distDir, route);
    const htmlFile = path.join(routePath, 'index.html');

    // Crear directorio si no existe
    await fs.ensureDir(routePath);

    // Copiar index.html a cada ruta
    await fs.writeFile(htmlFile, indexContent);

    console.log(`✅ ${route}/index.html`);
  }

  console.log(`\n✨ ${routes.length} páginas estáticas generadas exitosamente!`);
  console.log('🚀 Ahora cada URL devolverá HTML real para Google');
}

generateStaticPages().catch(err => {
  console.error('❌ Error generando páginas:', err);
  process.exit(1);
});
