# UXnicorp - Portfolio & Sitio Web Oficial

Sitio web corporativo de UXnicorp desarrollado con React, Vite y Framer Motion.

## 🚀 Stack Tecnológico

- **Framework:** React 19 + Vite
- **Animaciones:** Framer Motion 11
- **Routing:** React Router DOM 7
- **Iconos:** Lucide React, React Icons
- **Estilos:** CSS puro (sin preprocessadores)
- **Optimización de imágenes:** Sharp (script automatizado)
- **SEO:** React Helmet Async

## 📁 Estructura del Proyecto

```
PortafolioUXnicorp/
├── public/                    # Assets estáticos (copian tal cual al build)
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── daniel.webp           # Fotos del equipo
│   ├── ailin.webp
│   └── sol.webp
├── src/
│   ├── assets/               # Assets que importa Vite (se optimizan)
│   ├── componentes/
│   │   ├── Navbar/          # Navegación principal
│   │   └── Contenido/       # Secciones de la home
│   │       ├── Inicio.jsx
│   │       ├── SobreNosotros.jsx  # Preview en home
│   │       ├── Servicios.jsx
│   │       ├── Proyectos.jsx
│   │       ├── Tecnologias.jsx
│   │       ├── Culture.jsx
│   │       ├── Metodologia.jsx
│   │       ├── FAQ.jsx
│   │       ├── CTASection.jsx
│   │       ├── ContactoFormulario.jsx
│   │       └── Footer.jsx
│   ├── pages/               # Páginas completas (rutas)
│   │   ├── SobreNosotros.jsx   # Página /sobre-nosotros
│   │   ├── ComoTrabajamos.jsx  # Página /como-trabajamos
│   │   └── NotFound.jsx        # Página 404
│   ├── App.jsx              # Layout principal (home)
│   ├── main.jsx             # Router y entry point
│   └── *.css                # Estilos globales
├── docs/                    # Documentación técnica y SEO
│   ├── BACKLINKS-STRATEGY.md
│   ├── GOOGLE-SEARCH-CONSOLE.md
│   ├── SEO-CHECKLIST.md
│   ├── OPTIMIZACION-URGENTE.md
│   └── OPTIMIZACIONES-REALIZADAS.md
├── optimize-images.mjs      # Script de optimización de imágenes
├── package.json
├── vite.config.js
└── vercel.json              # Config de deployment en Vercel
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo (servidor local en http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Build + optimización de imágenes (genera WebP)
npm run build:optimized

# Solo optimizar imágenes (JPG/PNG → WebP)
npm run optimize:images

# Preview del build
npm run preview

# Linter
npm run lint
```

## 🔧 Setup Inicial

```bash
# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev
```

## 📖 Guías y Documentación

### Para empezar rápido:
- **[Guía Rápida](docs/GUIA-RAPIDA.md)** ← Leé esto primero si sos nuevo en el proyecto
  - Dónde está cada cosa
  - Cómo funciona el routing
  - Convenciones del código
  - Resolución de problemas comunes

### Documentación técnica:
- **[SEO Checklist](docs/SEO-CHECKLIST.md)** - Optimizaciones SEO y mejores prácticas
- **[Backlinks Strategy](docs/BACKLINKS-STRATEGY.md)** - Estrategia de enlaces externos
- **[Google Search Console](docs/GOOGLE-SEARCH-CONSOLE.md)** - Configuración y monitoreo
- **[Optimizaciones Realizadas](docs/OPTIMIZACIONES-REALIZADAS.md)** - Historial de mejoras

## 📝 Convenciones del Código

### Componentes
- **Functional components** con hooks (useState, useEffect, lazy)
- **Framer Motion** para animaciones (viewport triggers, scroll effects)
- **Lazy loading** para componentes pesados

### Estructura de archivos
- Cada componente tiene su `.jsx` y `.css` en la misma carpeta
- Los componentes de sección van en `componentes/Contenido/`
- Las páginas completas van en `pages/`

### Rutas
- `/` - Home (App.jsx)
- `/sobre-nosotros` - Página completa del equipo
- `/como-trabajamos` - Metodología y cultura
- `*` - 404 Not Found

### Imágenes
- **Assets en `src/assets/`:** Se importan en el código, Vite los hashea
- **Assets en `public/`:** Se copian tal cual (ideal para fotos del equipo, favicons)
- **Formato:** WebP para máxima compresión (generado por `optimize-images.mjs`)

### CSS
- Variables globales en `App.css` y `section-glass-card.css`
- BEM-like naming para componentes específicos
- Mobile-first con media queries
- Animaciones con `@keyframes` + Framer Motion

## 🌐 Deploy (Vercel)

El sitio se deploya automáticamente en cada push a `main`:
- **Build command:** `vite build`
- **Output directory:** `dist`
- **Redirects:** Configurados en `vercel.json` para SPA routing

## 📊 SEO

- Sitemap en `/sitemap.xml` (actualizar manualmente al agregar páginas)
- Schema.org markup en `App.jsx` (ProfessionalService)
- Meta tags optimizados con React Helmet
- Robots.txt en `/public/robots.txt`

Ver documentación completa en `docs/SEO-CHECKLIST.md`

## 🎨 Paleta de Colores

```css
--primary-pink: #f37aa6
--primary-blue: #81ade7
--primary-purple: #e0a6d8
--text-dark: #2b2b2b
--text-gray: #4a5568
--bg-light: #faf8ff
```

## 👥 Colaboradores

- **Daniel** - Full Stack Developer (Backend & Arquitectura)
- **Ailín** - Front End Developer (UI, UX e Interacción)
- **Sol** - Full Stack Developer (Frontend + Backend + Optimización)

## 📄 Licencia

Código propietario - UXnicorp © 2025