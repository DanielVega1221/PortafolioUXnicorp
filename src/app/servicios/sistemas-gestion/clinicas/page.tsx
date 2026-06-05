import React from "react";
import Script from "next/script";
import TransitionLink from "@/components/TransitionLink";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sistema de Gestión para Clínicas y Consultorios",
  description:
    "Software de gestión para clínicas: agenda de turnos, historias clínicas, facturación y pacientes. Desarrollado a medida en Argentina, sin licencias caras.",
  keywords: [
    "sistema de gestión para clínicas",
    "software para consultorios médicos",
    "agenda médica online",
    "historia clínica digital",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/servicios/sistemas-gestion/clinicas",
    languages: {
      es: "https://www.uxnicorp.com.ar/servicios/sistemas-gestion/clinicas",
      en: "https://www.uxnicorp.com.ar/en/servicios/management-systems/clinics",
      "x-default": "https://www.uxnicorp.com.ar/servicios/sistemas-gestion/clinicas",
    },
  },
  openGraph: {
    title: "Sistema de Gestión para Clínicas y Consultorios | UXnicorp",
    description: "Software de gestión para clínicas: agenda de turnos, historias clínicas, facturación y pacientes. Desarrollado a medida en Argentina.",
    url: "https://www.uxnicorp.com.ar/servicios/sistemas-gestion/clinicas",
    type: "website",
    locale: "es_AR",
    siteName: "UXnicorp",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sistema de Gestión para Clínicas — UXnicorp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Gestión para Clínicas y Consultorios | UXnicorp",
    description: "Software de gestión para clínicas: agenda de turnos, historias clínicas, facturación y pacientes. Desarrollado a medida en Argentina.",
    images: ["/og-image.png"],
  },
};

const INDUSTRIAS = [
  { href: "/servicios/sistemas-gestion/restaurantes", nombre: "Restaurantes" },
  { href: "/servicios/sistemas-gestion/construccion", nombre: "Constructoras" },
  { href: "/servicios/sistemas-gestion/inmobiliarias", nombre: "Inmobiliarias" },
  { href: "/servicios/sistemas-gestion/gimnasios", nombre: "Gimnasios" },
  { href: "/servicios/sistemas-gestion/veterinarias", nombre: "Veterinarias" },
  { href: "/servicios/sistemas-gestion/talleres", nombre: "Talleres" },
  { href: "/servicios/sistemas-gestion/dentistas", nombre: "Dentistas" },
  { href: "/servicios/sistemas-gestion/hoteles", nombre: "Hoteles" },
  { href: "/servicios/sistemas-gestion/nutricionistas", nombre: "Nutricionistas" },
  { href: "/servicios/sistemas-gestion/estudios-juridicos", nombre: "Estudios Jurídicos" },
  { href: "/servicios/sistemas-gestion/ferreterias", nombre: "Ferreterías" },
  { href: "/servicios/sistemas-gestion/concesionarias", nombre: "Concesionarias" },
];

export default function ClinicasPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Sistema de Gestión para Clínicas y Consultorios",
      description: "Software de gestión para clínicas: agenda de turnos, historias clínicas, facturación y pacientes. Desarrollado a medida en Argentina.",
      url: "https://www.uxnicorp.com.ar/servicios/sistemas-gestion/clinicas",
      provider: { "@type": "Organization", name: "UXnicorp" },
      areaServed: { "@type": "Country", name: "Argentina" },
      category: "Clinic Management Software",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.uxnicorp.com.ar" },
        { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.uxnicorp.com.ar/servicios" },
        { "@type": "ListItem", position: 3, name: "Clínicas", item: "https://www.uxnicorp.com.ar/servicios/sistemas-gestion/clinicas" },
      ],
    },
  ];

  return (
    <>
    <main
      style={{
        background: "radial-gradient(ellipse 90% 48% at 72% 20%, rgba(224,166,216,0.70) 0%, rgba(202,222,249,0.72) 38%, rgba(254,224,214,0.66) 72%, rgba(255,255,255,0) 100%), #ffffff",
        minHeight: "100vh",
      }}
    >
      <Script id="clinicas-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">

        <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          <TransitionLink href="/" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#F37AA6", textDecoration: "none" }}>Inicio</TransitionLink>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <TransitionLink href="/servicios" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#F37AA6", textDecoration: "none" }}>Servicios</TransitionLink>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>Clínicas</span>
        </nav>

        <div style={{ borderRadius: "1.5rem", padding: "2.5rem 2.75rem", background: "rgba(224,166,216,0.45)", border: "1px solid rgba(255,255,255,0.6)", boxShadow: "0 2px 20px rgba(0,0,0,0.05)", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "0.75rem" }}>Sistema de Gestión</p>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#111", margin: "0 0 1rem 0", lineHeight: 1.1 }}>
            Sistema de Gestión para Clínicas y Consultorios
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151", maxWidth: "640px", margin: 0 }}>
            Agenda de turnos, historias clínicas, facturación y gestión de pacientes desde una única plataforma. Todo desarrollado a medida para tu clínica, sin depender de software genérico costoso.
          </p>
        </div>

        <div style={{ borderRadius: "1.5rem", padding: "2rem 2.25rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "1.25rem" }}>El problema</p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#374151", margin: 0 }}>
            Las clínicas y consultorios pierden tiempo con agendas de papel, planillas de Excel y sistemas genéricos que no se adaptan a su práctica. Historias clínicas difíciles de buscar, facturación desconectada y pacientes que no reciben recordatorios.
          </p>
        </div>

        <div style={{ borderRadius: "1.5rem", padding: "2rem 2.25rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "1.25rem" }}>Nuestra solución</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { titulo: "Agenda de turnos", texto: "Turnos online con confirmación automática, recordatorios por WhatsApp y control de disponibilidad por profesional." },
              { titulo: "Historia clínica digital", texto: "Historias clínicas electrónicas con búsqueda rápida, indicaciones, estudios y evolución del paciente." },
              { titulo: "Gestión de pacientes", texto: "Base de datos de pacientes, historial de turnos, datos de contacto y mutuales." },
              { titulo: "Facturación integrada", texto: "Facturación electrónica conectada con los turnos. Sin cargar datos dos veces." },
              { titulo: "Reportes y métricas", texto: "Dashboard con turnos por día, profesionales más consultados, ingresos y ocupación." },
            ].map((item) => (
              <div key={item.titulo} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                <span style={{ flexShrink: 0, width: "1.75rem", height: "1.75rem", borderRadius: "0.5rem", background: "rgba(144,64,176,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7l3 3 5-5" stroke="#9040b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#111", margin: "0 0 0.2rem 0" }}>{item.titulo}</p>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "#4a5568", margin: 0 }}>{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { num: "01", titulo: "Análisis", texto: "Entendemos tu clínica, tu operación y qué necesitás gestionar." },
            { num: "02", titulo: "Diseño", texto: "Diseñamos la interfaz para que sea usable por médicos y administración." },
            { num: "03", titulo: "Desarrollo", texto: "Construimos el sistema con tecnología moderna, escalable y segura." },
            { num: "04", titulo: "Lanzamiento", texto: "Despliegue, capacitación del equipo y 30 días de soporte." },
          ].map((e) => (
            <div key={e.num} style={{ borderRadius: "1.25rem", padding: "1.5rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#9040b0", letterSpacing: "0.04em" }}>{e.num}</span>
              <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#111", margin: "0.5rem 0 0.3rem 0" }}>{e.titulo}</p>
              <p style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "#4a5568", margin: 0 }}>{e.texto}</p>
            </div>
          ))}
        </div>

        <div style={{ borderRadius: "1.5rem", padding: "2rem 2.25rem", background: "linear-gradient(135deg, #9040b0 0%, #E0A6D8 100%)", boxShadow: "0 8px 40px rgba(144,64,176,0.22)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.3rem 0", letterSpacing: "-0.03em" }}>¿Tenés una clínica o consultorio y querés organizarlo?</h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>Contanos tu práctica y te armamos una propuesta a medida.</p>
          </div>
          <TransitionLink href="/#contacto" style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.7rem 1.5rem", borderRadius: "0.875rem", background: "#fff", color: "#9040b0", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}>
            Pedir presupuesto
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </TransitionLink>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.875rem" }}>
            También ofrecemos
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {INDUSTRIAS.map((ind) => (
              <TransitionLink key={ind.href} href={ind.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 1.1rem", borderRadius: "0.75rem", background: "rgba(224,166,216,0.45)", border: "1px solid rgba(255,255,255,0.65)", fontSize: "0.84rem", fontWeight: 600, color: "#111", textDecoration: "none" }}>
                {ind.nombre}
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="#9040b0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </TransitionLink>
            ))}
            <TransitionLink href="/servicios" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 1.1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", fontSize: "0.84rem", fontWeight: 600, color: "#111", textDecoration: "none" }}>
              Todos los servicios
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="#9040b0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </TransitionLink>
          </div>
        </div>

        <p className="mt-8 text-[0.75rem] text-gray-400">
          * Cada clínica es distinta. Siempre hacemos una primera charla gratuita para entender qué necesita tu práctica antes de presupuestar.
        </p>

      </div>
    </main>
    <Footer locale="es" />
    </>
  );
}
