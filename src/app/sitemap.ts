import { MetadataRoute } from "next";
import { SERVICIOS } from "./servicios/data";
import { SERVICIOS_EN } from "./en/servicios/data";
import { CASOS } from "./casos/data";
import { BLOG_POSTS } from "./blog/data";
import { BLOG_POSTS_EN } from "./en/blog/data";
import { PROVINCIAS } from "./desarrollo-web/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.uxnicorp.com.ar";

  const today = new Date();
  const recent = new Date("2026-07-01");
  const older = new Date("2025-12-15");

  const servicioUrls = SERVICIOS.map((s) => ({
    url: `${base}/servicios/${s.slug}`,
    lastModified: recent,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicioEnUrls = SERVICIOS_EN.map((s) => ({
    url: `${base}/en/servicios/${s.slug}`,
    lastModified: recent,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const casoUrls = CASOS.map((c) => ({
    url: `${base}/casos/${c.slug}`,
    lastModified: recent,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const casoEnUrls = CASOS.map((c) => ({
    url: `${base}/en/casos/${c.slug}`,
    lastModified: recent,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogUrls = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEnUrls = BLOG_POSTS_EN.map((p) => ({
    url: `${base}/en/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const provinciaUrls = PROVINCIAS.map((p) => ({
    url: `${base}/desarrollo-web/${p.slug}`,
    lastModified: recent,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: today, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/casos`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/servicios`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/desarrollo-web`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/nosotros`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    ...servicioUrls,
    ...casoUrls,
    ...blogUrls,
    ...provinciaUrls,
    { url: `${base}/servicios/sistemas-gestion/restaurantes`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/construccion`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/clinicas`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/inmobiliarias`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/gimnasios`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/veterinarias`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/talleres`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/dentistas`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/hoteles`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/nutricionistas`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/estudios-juridicos`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/ferreterias`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/servicios/sistemas-gestion/concesionarias`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/conceptos/arquitectura`, lastModified: older, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/conceptos/gastronomia`, lastModified: older, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/en`, lastModified: today, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/en/casos`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/servicios`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/about`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/en/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    ...servicioEnUrls,
    ...casoEnUrls,
    ...blogEnUrls,
    { url: `${base}/en/servicios/management-systems/restaurants`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/construction`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/clinics`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/real-estate`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/gyms`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/veterinary`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/auto-repair`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/dental`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/hotels`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/nutritionists`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/law-firms`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/hardware-stores`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/servicios/management-systems/car-dealerships`, lastModified: recent, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/en/conceptos/arquitectura`, lastModified: older, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/en/conceptos/gastronomia`, lastModified: older, changeFrequency: "yearly", priority: 0.5 },
  ];
}
