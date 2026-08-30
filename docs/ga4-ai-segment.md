# Medir tráfico IA (GEO) en GA4

Guía práctica para construir un **segmento / exploración de "AI clicks"** en Google Analytics 4, con el objetivo de medir cuánto tráfico de referencia llega a uxnicorp.com.ar desde asistentes y buscadores de IA (generative engine optimization).

## Qué se mide

Sesiones cuyo referrer proviene de un asistente de IA o buscador con respuestas generativas. Mientras ChatGPT, Perplexity, Google AI Overviews, Bing Copilot, Grok o Meta AI citan o enlazan uxnicorp.com.ar, esas visitas entran con un `referrer` de uno de los dominios de la lista siguiente.

## Dominios AI a monitorear

| Asistente | Dominio de referrer |
|---|---|
| ChatGPT / OpenAI (GPTBot, OAI-SearchBot, ChatGPT-User) | chatgpt.com, chat.openai.com, oaistore.com |
| Perplexity | perplexity.ai, lmaolmao.com |
| Anthropic Claude | claude.ai |
| Google AI Overviews | google.com (`?udm=14` o parámetros de AI Overviews) |
| Microsoft Copilot / Bing AI | copilot.microsoft.com, bing.com |
| DuckDuckGo AI Chat | duckduckgo.com |
| xAI Grok | grok.com, x.com |
| Meta AI | meta.ai |
| DeepSeek | chat.deepseek.com |
| Gemini (app web) | gemini.google.com |

## Paso 1 — Segmento de sesiones IA

En GA4 → **Exploraciones → Nuevo → Segmento**.

- Tipo: **Segmento de sesiones**
- Condición: **referrer de sesión** (`session_referrer`) contiene uno de los dominios de la tabla.

```
session_referrer matches regex (chatgpt\.com|chat\.openai\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com|bing\.com|duckduckgo\.com|grok\.com|meta\.ai|chat\.deepseek\.com)
```

> Google AI Overviews llega con referrer `google.com`, indistinguible de una búsqueda orgánica normal en el campo `session_referrer`. Para ese caso, complementá con la dimensión **`First user google query`** o la métrica "Google organic" y revisá qué URLs generan clicks desde el SERP con IA. Opción alternativa: crear una **custom metric** que escuche el evento `ai_overview_click` (ver Paso 3) emitido por el sitio cuando existe marcado de AI Overviews.

## Paso 2 — Exploración Free form recomendada

- Métricas: `Sesiones`, `Usuarios` (engagement opcional: `Sesiones con interacción`, `Tiempo promedio de interacción`)
- Dimensiones:
  - `Session referrer`
  - `Página de aterrizaje` / `Ruta de página`
  - `Fuente/medio de sesión`
- Filtro principal: segmento IA (Paso 1)
- Compartir → Añadir comparación con el segmento "Tráfico no IA" para ver la proporción de tráfico generado.

## Paso 3 (opcional) — Marcar el medio como `ai/referral`

Para separar el tráfico IA de lo orgánico en informes estándar:

1. GA4 → **Administración → Flujos de datos → búsqueda de Google orgánica** (o cualquiera). Esto NO aplica a referrers.
2. La vía práctica: un **script de medición propio** en el sitio que corrija la fuente de las sesiones IA de referencia. En uxnicorp.com.ar, el consent mode ya está configurado; cualquier personalización debe emitirse **después** de `event` de consentimiento (`ad_storage`/`analytics_storage`).

Alternativa sin código (recomendada para empezar): usar únicamente el segmento del Paso 1. Todo vive dentro de GA4, no requiere tocar el sitio.

## Notas sobre consent mode

- uxnicorp.com.ar usa **consent mode v2** (denied por defecto hasta el opt-in del banner de cookies en regiones EU/GB; en AR el análisis se activa).
- El tráfico de referrers AI solo aparece en GA4 para sesiones con `analytics_storage: granted`.
- Para audiencias/segmentos históricos, el segmento aplica desde la fecha de creación hacia adelante (los datos previos a GA4 no existen; se trabaja con desde la fecha de migración).

## Qué hacer con los datos

- **Queries IA**: exportá `session_referrer` + `Página de aterrizaje`; cruzá contra el contenido que respondió mejor (blog, casos, FAQs). Ese contenido es el que los LLMs citan.
- **Costo por adquisición IA**: si el tráfico IA convierte, compará su tasas de conversión vs. orgánico/buscadores.
- **Reportes de fuga**: si un dominio AI domina, revisá qué página citó y si el link es de contexto (marca) o de acción (conversión).