const baseUrl = process.env.SITE_URL || "http://127.0.0.1:3000";

const routes200 = [
  "/",
  "/casos",
  "/servicios",
  "/nosotros",
  "/politica-de-privacidad",
  "/conceptos/arquitectura",
  "/conceptos/gastronomia",
  "/servicios/sistemas-gestion/restaurantes",
  "/servicios/sistemas-gestion/construccion",
  "/servicios/sistemas-gestion/clinicas",
  "/servicios/sistemas-gestion/inmobiliarias",
  "/servicios/sistemas-gestion/gimnasios",
  "/servicios/sistemas-gestion/veterinarias",
  "/servicios/sistemas-gestion/talleres",
  "/servicios/sistemas-gestion/dentistas",
  "/servicios/sistemas-gestion/hoteles",
  "/servicios/sistemas-gestion/nutricionistas",
  "/servicios/sistemas-gestion/estudios-juridicos",
  "/servicios/sistemas-gestion/ferreterias",
  "/servicios/sistemas-gestion/concesionarias",
  "/en",
  "/en/casos",
  "/en/servicios",
  "/en/about",
  "/en/privacy-policy",
  "/en/conceptos/arquitectura",
  "/en/conceptos/gastronomia",
  "/en/servicios/management-systems/restaurants",
  "/en/servicios/management-systems/construction",
  "/en/servicios/management-systems/clinics",
  "/en/servicios/management-systems/real-estate",
  "/en/servicios/management-systems/gyms",
  "/en/servicios/management-systems/veterinary",
  "/en/servicios/management-systems/auto-repair",
  "/en/servicios/management-systems/dental",
  "/en/servicios/management-systems/hotels",
  "/en/servicios/management-systems/nutritionists",
  "/en/servicios/management-systems/law-firms",
  "/en/servicios/management-systems/hardware-stores",
  "/en/servicios/management-systems/car-dealerships",
  "/robots.txt",
  "/sitemap.xml",
];

const notFoundRoute = "/this-route-should-not-exist";

async function fetchText(path) {
  const response = await fetch(`${baseUrl}${path}`, {
    redirect: "manual",
    headers: {
      "user-agent": "seo-guard/1.0",
    },
  });
  const text = await response.text();
  return { response, text };
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function collectInternalLinks(html) {
  const hrefRe = /href=["']([^"']+)["']/gi;
  const links = new Set();
  let match;

  while ((match = hrefRe.exec(html)) !== null) {
    const href = match[1];
    if (!href.startsWith("/")) continue;
    if (href.startsWith("//")) continue;
    if (href.startsWith("/_next") || href.startsWith("/icon")) continue;
    if (href.includes("{")) continue;
    links.add(href);
  }

  return [...links];
}

async function checkStatusAndMeta() {
  for (const route of routes200) {
    const { response, text } = await fetchText(route);
    assert(response.status === 200, `Expected 200 on ${route}, got ${response.status}`);

    if (route.endsWith(".xml") || route.endsWith(".txt")) continue;

    assert(/<title>[^<]+<\/title>/i.test(text), `Missing <title> on ${route}`);
    assert(
      /<meta\s+name=["']description["'][^>]*content=["'][^"']+["']/i.test(text),
      `Missing meta description on ${route}`
    );
    assert(
      !/<meta\s+name=["']robots["'][^>]*noindex/i.test(text),
      `Unexpected noindex on indexable route ${route}`
    );
  }

  const notFound = await fetchText(notFoundRoute);
  assert(notFound.response.status === 404, `Expected 404 on ${notFoundRoute}, got ${notFound.response.status}`);
  assert(
    /<meta\s+name=["']robots["'][^>]*noindex/i.test(notFound.text),
    "Expected noindex robots meta on 404 page"
  );
}

async function checkSitemapAndRobots() {
  const { text: robots } = await fetchText("/robots.txt");
  assert(/Sitemap:\s*https:\/\/www\.uxnicorp\.com\.ar\/sitemap\.xml/i.test(robots), "robots.txt missing sitemap reference");

  const { text: sitemap } = await fetchText("/sitemap.xml");
  const requiredUrls = [
    "https://www.uxnicorp.com.ar/",
    "https://www.uxnicorp.com.ar/servicios",
    "https://www.uxnicorp.com.ar/casos",
    "https://www.uxnicorp.com.ar/en",
  ];

  for (const url of requiredUrls) {
    assert(sitemap.includes(url), `sitemap.xml missing required URL: ${url}`);
  }
}

async function checkInternalLinks() {
  const pages = ["/", "/en"];

  for (const page of pages) {
    const { text } = await fetchText(page);
    const links = collectInternalLinks(text);

    for (const href of links) {
      if (href.includes("#")) continue;
      const { response } = await fetchText(href);
      assert(response.status < 400, `Broken internal link from ${page}: ${href} -> ${response.status}`);
    }
  }
}

// Bilingual routes that must have canonical + hreflang alternate pairs.
const bilingualRoutes = [
  { es: "/", en: "/en" },
  { es: "/casos", en: "/en/casos" },
  { es: "/servicios", en: "/en/servicios" },
  { es: "/nosotros", en: "/en/about" },
  { es: "/politica-de-privacidad", en: "/en/privacy-policy" },
  { es: "/conceptos/arquitectura", en: "/en/conceptos/arquitectura" },
  { es: "/conceptos/gastronomia", en: "/en/conceptos/gastronomia" },
  { es: "/servicios/sistemas-gestion/restaurantes", en: "/en/servicios/management-systems/restaurants" },
  { es: "/servicios/sistemas-gestion/construccion", en: "/en/servicios/management-systems/construction" },
  { es: "/servicios/sistemas-gestion/clinicas", en: "/en/servicios/management-systems/clinics" },
  { es: "/servicios/sistemas-gestion/inmobiliarias", en: "/en/servicios/management-systems/real-estate" },
  { es: "/servicios/sistemas-gestion/gimnasios", en: "/en/servicios/management-systems/gyms" },
  { es: "/servicios/sistemas-gestion/veterinarias", en: "/en/servicios/management-systems/veterinary" },
  { es: "/servicios/sistemas-gestion/talleres", en: "/en/servicios/management-systems/auto-repair" },
  { es: "/servicios/sistemas-gestion/dentistas", en: "/en/servicios/management-systems/dental" },
  { es: "/servicios/sistemas-gestion/hoteles", en: "/en/servicios/management-systems/hotels" },
  { es: "/servicios/sistemas-gestion/nutricionistas", en: "/en/servicios/management-systems/nutritionists" },
  { es: "/servicios/sistemas-gestion/estudios-juridicos", en: "/en/servicios/management-systems/law-firms" },
  { es: "/servicios/sistemas-gestion/ferreterias", en: "/en/servicios/management-systems/hardware-stores" },
  { es: "/servicios/sistemas-gestion/concesionarias", en: "/en/servicios/management-systems/car-dealerships" },
];

const siteOrigin = "https://www.uxnicorp.com.ar";

function extractCanonical(html) {
  const m = html.match(/<link\s+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || html.match(/<link\s+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  return m ? m[1] : null;
}

function hasAlternate(html, lang, href) {
  // Match either attribute order: rel first or hreflang first
  const re1 = new RegExp(
    `<link\\s+rel=["']alternate["'][^>]*hreflang=["']${lang}["'][^>]*href=["']${href.replace(/\//g, "\\/")}["']`,
    "i"
  );
  const re2 = new RegExp(
    `<link\\s+hreflang=["']${lang}["'][^>]*rel=["']alternate["'][^>]*href=["']${href.replace(/\//g, "\\/")}["']`,
    "i"
  );
  const re3 = new RegExp(
    `<link\\s+rel=["']alternate["'][^>]*href=["']${href.replace(/\//g, "\\/")}["'][^>]*hreflang=["']${lang}["']`,
    "i"
  );
  const re4 = new RegExp(
    `<link\\s+href=["']${href.replace(/\//g, "\\/")}["'][^>]*hreflang=["']${lang}["']`,
    "i"
  );
  return re1.test(html) || re2.test(html) || re3.test(html) || re4.test(html);
}

async function checkCanonicalAndHreflang() {
  for (const { es, en } of bilingualRoutes) {
    const esUrl = `${siteOrigin}${es}`;
    const enUrl = `${siteOrigin}${en}`;

    const { text: esHtml } = await fetchText(es);
    const { text: enHtml } = await fetchText(en);

    // Check canonicals point to themselves
    const esCanonical = extractCanonical(esHtml);
    assert(esCanonical === esUrl, `Missing or wrong canonical on ${es}: got "${esCanonical}", expected "${esUrl}"`);

    const enCanonical = extractCanonical(enHtml);
    assert(enCanonical === enUrl, `Missing or wrong canonical on ${en}: got "${enCanonical}", expected "${enUrl}"`);

    // Check hreflang alternates on ES page
    assert(
      hasAlternate(esHtml, "es", esUrl) || hasAlternate(esHtml, "es-AR", esUrl),
      `Missing hreflang="es" alternate on ${es} pointing to ${esUrl}`
    );
    assert(
      hasAlternate(esHtml, "en", enUrl),
      `Missing hreflang="en" alternate on ${es} pointing to ${enUrl}`
    );

    // Check hreflang alternates on EN page
    assert(
      hasAlternate(enHtml, "es", esUrl) || hasAlternate(enHtml, "es-AR", esUrl),
      `Missing hreflang="es" alternate on ${en} pointing to ${esUrl}`
    );
    assert(
      hasAlternate(enHtml, "en", enUrl),
      `Missing hreflang="en" alternate on ${en} pointing to ${enUrl}`
    );
  }
}

async function run() {
  console.log(`[seo-guard] Running checks against ${baseUrl}`);
  await checkStatusAndMeta();
  await checkSitemapAndRobots();
  await checkInternalLinks();
  await checkCanonicalAndHreflang();
  console.log("[seo-guard] All checks passed.");
}

run().catch((error) => {
  console.error(`[seo-guard] FAILED: ${error.message}`);
  process.exit(1);
});
