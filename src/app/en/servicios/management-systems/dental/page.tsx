import React from "react";
import Script from "next/script";
import TransitionLink from "@/components/TransitionLink";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dental Practice Management Software",
  description:
    "Custom dental practice software: appointment scheduling, dental records, patients and billing. Built from scratch in Argentina.",
  keywords: [
    "dental practice management software",
    "software for dentists",
    "dental software argentina",
    "dental appointment scheduling",
  ],
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/en/servicios/management-systems/dental",
    languages: {
      es: "https://www.uxnicorp.com.ar/servicios/sistemas-gestion/dentistas",
      en: "https://www.uxnicorp.com.ar/en/servicios/management-systems/dental",
      "x-default": "https://www.uxnicorp.com.ar/servicios/sistemas-gestion/dentistas",
    },
  },
  openGraph: {
    title: "Dental Practice Management Software | UXnicorp",
    description: "Custom dental practice software: appointment scheduling, dental records, patients and billing. Built from scratch in Argentina.",
    url: "https://www.uxnicorp.com.ar/en/servicios/management-systems/dental",
    type: "website",
    locale: "en_US",
    siteName: "UXnicorp",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dental Practice Management Software — UXnicorp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Practice Management Software | UXnicorp",
    description: "Custom dental practice software: appointment scheduling, dental records, patients and billing. Built from scratch in Argentina.",
    images: ["/og-image.png"],
  },
};

const INDUSTRIES = [
  { href: "/en/servicios/management-systems/restaurants", nombre: "Restaurants" },
  { href: "/en/servicios/management-systems/construction", nombre: "Construction" },
  { href: "/en/servicios/management-systems/clinics", nombre: "Clinics" },
  { href: "/en/servicios/management-systems/real-estate", nombre: "Real Estate" },
  { href: "/en/servicios/management-systems/gyms", nombre: "Gyms" },
  { href: "/en/servicios/management-systems/veterinary", nombre: "Veterinary" },
  { href: "/en/servicios/management-systems/auto-repair", nombre: "Auto Repair" },
  { href: "/en/servicios/management-systems/hotels", nombre: "Hotels" },
  { href: "/en/servicios/management-systems/nutritionists", nombre: "Nutritionists" },
  { href: "/en/servicios/management-systems/law-firms", nombre: "Law Firms" },
  { href: "/en/servicios/management-systems/hardware-stores", nombre: "Hardware Stores" },
  { href: "/en/servicios/management-systems/car-dealerships", nombre: "Car Dealerships" },
];

export default function DentalPageEN() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Dental Practice Management Software",
      description: "Custom dental practice software: appointment scheduling, dental records, patients and billing.",
      url: "https://www.uxnicorp.com.ar/en/servicios/management-systems/dental",
      provider: { "@type": "Organization", name: "UXnicorp" },
      areaServed: { "@type": "Country", name: "Argentina" },
      category: "Dental Practice Management Software",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.uxnicorp.com.ar/en" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.uxnicorp.com.ar/en/servicios" },
        { "@type": "ListItem", position: 3, name: "Dental", item: "https://www.uxnicorp.com.ar/en/servicios/management-systems/dental" },
      ],
    },
  ];

  return (
    <>
    <main style={{ background: "radial-gradient(ellipse 90% 48% at 72% 20%, rgba(224,166,216,0.70) 0%, rgba(202,222,249,0.72) 38%, rgba(254,224,214,0.66) 72%, rgba(255,255,255,0) 100%), #ffffff", minHeight: "100vh" }}>
      <Script id="dental-en-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[1220px] px-6 py-20 md:px-8 md:py-28">
        <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          <TransitionLink href="/en" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#F37AA6", textDecoration: "none" }}>Home</TransitionLink>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <TransitionLink href="/en/servicios" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#F37AA6", textDecoration: "none" }}>Services</TransitionLink>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2.5l4 3.5-4 3.5" stroke="#d1d5db" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>Dental</span>
        </nav>

        <div style={{ borderRadius: "1.5rem", padding: "2.5rem 2.75rem", background: "rgba(224,166,216,0.45)", border: "1px solid rgba(255,255,255,0.6)", boxShadow: "0 2px 20px rgba(0,0,0,0.05)", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "0.75rem" }}>Management System</p>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#111", margin: "0 0 1rem 0", lineHeight: 1.1 }}>Dental Practice Management Software</h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151", maxWidth: "640px", margin: 0 }}>
            Manage appointment scheduling, dental records, patients and billing from a single platform. All custom-built for your dental practice.
          </p>
        </div>

        <div style={{ borderRadius: "1.5rem", padding: "2rem 2.25rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "1.25rem" }}>The problem</p>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#374151", margin: 0 }}>
            Dental practices lose time with paper agendas, paper records that are hard to search, and disconnected billing.
          </p>
        </div>

        <div style={{ borderRadius: "1.5rem", padding: "2rem 2.25rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9040b0", marginBottom: "1.25rem" }}>Our solution</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { titulo: "Appointment scheduling", texto: "Online appointment management with calendar, reminders and automatic confirmations." },
              { titulo: "Dental records per patient", texto: "Complete dental history: consultations, procedures, X-rays and treatment notes." },
              { titulo: "Treatment plans", texto: "Treatment planning with phases, costs, estimated durations and approval tracking." },
              { titulo: "Billing and insurance", texto: "Invoice generation, insurance claim management and payment tracking." },
              { titulo: "Patient database", texto: "Patient profiles with personal data, medical history, visits and treatment plans." },
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
            { num: "01", titulo: "Analysis", texto: "We understand your practice, your operations and what you need to manage." },
            { num: "02", titulo: "Design", texto: "We design the interface to be usable by your team without extensive training." },
            { num: "03", titulo: "Development", texto: "We build the system with modern, scalable and secure technology." },
            { num: "04", titulo: "Launch", texto: "Deployment, team training and 30 days of support." },
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
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", margin: "0 0 0.3rem 0", letterSpacing: "-0.03em" }}>Have a dental practice and want to organize it?</h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>Tell us about your operation and we&apos;ll build a custom proposal.</p>
          </div>
          <TransitionLink href="/en#contacto" style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.7rem 1.5rem", borderRadius: "0.875rem", background: "#fff", color: "#9040b0", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}>
            Request a quote
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M8 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </TransitionLink>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.875rem" }}>Other solutions</p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {INDUSTRIES.map((ind) => (
              <TransitionLink key={ind.href} href={ind.href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 1.1rem", borderRadius: "0.75rem", background: "rgba(224,166,216,0.45)", border: "1px solid rgba(255,255,255,0.65)", fontSize: "0.84rem", fontWeight: 600, color: "#111", textDecoration: "none" }}>
                {ind.nombre}
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="#9040b0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </TransitionLink>
            ))}
            <TransitionLink href="/en/servicios" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 1.1rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.65)", fontSize: "0.84rem", fontWeight: 600, color: "#111", textDecoration: "none" }}>
              All services
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="#9040b0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </TransitionLink>
          </div>
        </div>

        <p className="mt-8 text-[0.75rem] text-gray-400">
          * Every dental practice is different. We always start with a free conversation to understand what your business needs before quoting.
        </p>
      </div>
    </main>
    <Footer locale="en" />
    </>
  );
}
