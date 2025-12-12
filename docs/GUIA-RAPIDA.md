# Guía Rápida - Navegando el Proyecto

## 📍 ¿Dónde está cada cosa?

### Páginas Completas (src/pages/)
Son las rutas principales del sitio:

- SobreNosotros.jsx → /sobre-nosotros
  - Página completa del equipo
  - Muestra 3 cards con fotos: Daniel, Ailín, Sol
  - Badges expandibles (profesionales + personales)
  - Historia, valores, "Por qué elegirnos"

- ComoTrabajamos.jsx → /como-trabajamos
  - Metodología de trabajo (10 pasos)
  - Cultura del equipo
  - FAQ completo
  - Usa Metodologia.jsx y Culture.jsx

- NotFound.jsx → Cualquier ruta inexistente
  - Página 404 simple
  - Botón para volver al home

### Secciones de la Home (src/componentes/Contenido/)
Son componentes que se usan en App.jsx (la home):

Secciones principales (en orden de aparición):
1. Inicio.jsx → Hero con logo y CTA
2. SobreNosotros.jsx → Preview "Por qué elegirnos" (4 acordeones)
   - ⚠️ NO confundir con pages/SobreNosotros.jsx
3. Servicios.jsx → Grid de servicios con modal de ayuda
4. Proyectos.jsx → Showcase de proyectos
5. Tecnologias.jsx → Stack tecnológico
6. ContactoFormulario.jsx → Formulario de contacto
7. Footer.jsx → Footer con navegación y redes

Componentes reutilizables:
- CTASection.jsx → Call to action (usado 2 veces en App.jsx)
- Culture.jsx → Cultura de equipo (usado en ComoTrabajamos)
- Metodologia.jsx → Proceso de desarrollo (usado en ComoTrabajamos)
- FAQ.jsx → Preguntas frecuentes (usado en ComoTrabajamos)

Componentes auxiliares:
- AcordeonAnimado.jsx → Acordeón genérico con estado interno
- AcordeonAnimadoMetodologia.jsx → Acordeón controlado para Metodologia
- OptimizedImage.jsx → Wrapper para imágenes con lazy loading
- SVGIcons.jsx → Iconos custom SVG reutilizables

### Navegación (src/componentes/Navbar/)
- Navbar.jsx → Barra de navegación con scroll spy
- Navbar.css → Estilos de navbar

---

## 🗺️ ¿Cómo funciona el routing?

Entry Point: src/main.jsx
```
Home (/)
├─ Inicio
├─ SobreNosotros (preview)
├─ Servicios
├─ Proyectos
├─ Tecnologias
├─ CTASection × 2
└─ Contacto

Páginas completas:
├─ /sobre-nosotros
├─ /como-trabajamos
└─ /* (404)
```

Lazy Loading:
Las páginas completas se cargan con React.lazy() para mejor performance:
- SobreNosotrosLazy
- ComoTrabajamosLazy

---

## 🎨 ¿Dónde están los estilos?

Estructura CSS:
```
src/
├── index.css              # Estilos globales base
├── App.css                # Variables CSS, estilos de App.jsx
├── section-glass-card.css # Clase reutilizable para cards con efecto glass
├── responsive-utils.css   # Utilities responsive
└── componentes/
    └── Contenido/
        ├── Inicio.css
        ├── SobreNosotros.css
        ├── Servicios.css
        └── ... (cada componente tiene su CSS)
```

Variables CSS importantes:
```css
--primary-pink: #f37aa6
--primary-blue: #81ade7
--primary-purple: #e0a6d8
```

---

## 📸 ¿Dónde están las imágenes?

src/assets/
Imágenes que importa Vite (se optimizan y hashean):
- Logos, iconos, imágenes decorativas
- Vite les agrega hash al nombre en build

public/
Assets estáticos (se copian tal cual al build):
- daniel.webp, ailin.webp, sol.webp (fotos del equipo)
- manifest.json, robots.txt, sitemap.xml
- Cualquier archivo que necesite ruta fija

Optimización:
```bash
npm run optimize:images
```
Genera versiones WebP de todas las imágenes en src/assets/

---

## 🔧 Scripts útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Build + optimizar imágenes
npm run build:optimized

# Ver logs de optimización
cat optimize-images.log
```

---

## 🚨 Convenciones importantes

### Componentes
- **Functional components** siempre
- Hooks: `useState`, `useEffect`, `useRef`, `lazy`
- Props destructuradas en la firma de la función

### Imports
```jsx
// Orden recomendado:
import React, { useState } from 'react';           // React
import { useNavigate } from 'react-router-dom';    // Libs externas
import { motion } from 'framer-motion';
import ComponenteLocal from './componentes/...';   // Componentes locales
import './Estilos.css';                            // CSS
import imagen from '../../assets/imagen.png';      // Assets
```

