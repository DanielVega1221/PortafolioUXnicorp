import { MetadataRoute } from "next";
import { SERVICIOS } from "./servicios/data";
import { SERVICIOS_EN } from "./en/servicios/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.uxnicorp.com.ar";

  const servicioUrls = SERVICIOS.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: new Date("2026-04-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicioEnUrls = SERVICIOS_EN.map((s) => ({
    url: `${base}/en/servicios/${s.slug}`,
    lastModified: new Date("2026-04-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/casos`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/servicios`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/nosotros`,
      lastModified: new Date("2025-12-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicioUrls,
    {
      url: `${base}/conceptos/arquitectura`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/conceptos/gastronomia`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/en`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/en/casos`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/en/about`,
      lastModified: new Date("2025-12-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicioEnUrls,
    {
      url: `${base}/en/conceptos/arquitectura`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/en/conceptos/gastronomia`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/politica-de-privacidad`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/en/privacy-policy`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
