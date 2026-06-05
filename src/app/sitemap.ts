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
      url: `${base}/servicios/sistemas-gestion/restaurantes`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/construccion`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/clinicas`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/inmobiliarias`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/gimnasios`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/veterinarias`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/talleres`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/dentistas`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/hoteles`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/nutricionistas`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/estudios-juridicos`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/ferreterias`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/servicios/sistemas-gestion/concesionarias`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
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
      url: `${base}/en/servicios/management-systems/restaurants`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/construction`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/clinics`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/real-estate`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/gyms`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/veterinary`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/auto-repair`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/dental`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/hotels`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/nutritionists`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/law-firms`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/hardware-stores`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/en/servicios/management-systems/car-dealerships`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
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
