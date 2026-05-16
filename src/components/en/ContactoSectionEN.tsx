"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

const GONZALO_WA = "5493834368748";
const AILIN_WA = "5491123504530";
const EMAIL = "uxnicorp@gmail.com";

const TIPOS_EN = ["Landing Page", "E-commerce", "System / App", "Not sure yet"];

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.7rem 1rem",
  borderRadius: "0.75rem",
  border: "1px solid rgba(0,0,0,0.09)",
  background: "rgba(255,255,255,0.82)",
  fontSize: "0.875rem",
  color: "#111",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(0,0,0,0.38)",
  marginBottom: "0.4rem",
};

const team = [
  {
    name: "Gonzalo",
    foto: "/Fotos/Daniel.jpg",
    tagline: "Write to me, I'll reply the same day.",
    wa: GONZALO_WA,
    linkedin: "https://www.linkedin.com/in/gonzalo-daniel-vega/",
    bg: "linear-gradient(135deg, rgba(254,220,210,0.9) 0%, rgba(248,200,220,0.8) 100%)",
    ring: "rgba(243,122,166,0.55)",
  },
  {
    name: "Ailin",
    foto: "/Fotos/Ailin.jpg",
    tagline: "Tell me about your project.",
    wa: AILIN_WA,
    linkedin: "https://www.linkedin.com/in/ailin-torrente-299994374/",
    bg: "linear-gradient(135deg, rgba(242,212,252,0.85) 0%, rgba(224,188,242,0.8) 100%)",
    ring: "rgba(176,96,160,0.5)",
  },
  {
    name: "Sol",
    foto: "/Fotos/Sol.jpg",
    tagline: "Got questions? I'm here.",
    wa: null,
    linkedin: "https://www.linkedin.com/in/solandriani/",
    bg: "linear-gradient(135deg, rgba(210,236,255,0.9) 0%, rgba(188,216,250,0.8) 100%)",
    ring: "rgba(10,102,194,0.45)",
  },
];

export default function ContactoSectionEN() {
  const [form, setForm] = useState({ nombre: "", email: "", tipo: "", mensaje: "" });
  const [sendMode, setSendMode] = useState<"whatsapp" | "email">("whatsapp");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sendMode === "whatsapp") {
      const text = `Hi UXNICORP!\nI'm ${form.nombre} (${form.email})\n\nProject: ${
        form.tipo || "Not specified"
      }\n\n${form.mensaje}`;
      window.open(
        `https://wa.me/${GONZALO_WA}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      const subject = `Inquiry from ${form.nombre} — ${form.tipo || "Project"}`;
      const body = `Name: ${form.nombre}\nEmail: ${form.email}\n\nProject type: ${
        form.tipo || "Not specified"
      }\n\nMessage:\n${form.mensaje}`;
      window.open(
        `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        "_self"
      );
    }
  }

  return (
    <section id="contacto" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1220px]">

        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            Contact
          </p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            Let&apos;s talk about your project.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
            Tell us what your business needs. We listen, ask the right questions, and answer clearly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {team.map((p) => (
              <div
                key={p.name}
                style={{
                  borderRadius: "1.5rem",
                  padding: "1.4rem 1.75rem",
                  background: p.bg,
                  border: "1px solid rgba(255,255,255,0.7)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "3.75rem",
                    height: "3.75rem",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    boxShadow: `0 0 0 3px ${p.ring}, 0 4px 16px rgba(0,0,0,0.10)`,
                  }}
                >
                  <Image
                    src={p.foto}
                    alt={p.name}
                    width={60}
                    height={60}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontWeight: 800, fontSize: "1.05rem", color: "#111", margin: "0 0 0.3rem 0", letterSpacing: "-0.02em" }}>
                    {p.name}
                  </p>
                  <p style={{ fontSize: "0.73rem", color: "rgba(0,0,0,0.45)", margin: 0 }}>
                    {p.tagline}
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "row", gap: "0.4rem", flexShrink: 0 }}>
                  {p.wa && (
                    <a
                      href={`https://wa.me/${p.wa}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        padding: "0.45rem 0.85rem",
                        borderRadius: "2rem",
                        background: "rgba(56,154,112,0.14)",
                        color: "#1e7a4a",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        border: "1px solid rgba(56,154,112,0.28)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <WhatsAppIcon size={13} />
                      Whatsapp
                    </a>
                  )}
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      padding: "0.45rem 0.85rem",
                      borderRadius: "2rem",
                      background: "rgba(10,102,194,0.10)",
                      color: "#0a66c2",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      border: "1px solid rgba(10,102,194,0.22)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <LinkedInIcon size={13} />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}

            <div
              style={{
                borderRadius: "1.5rem",
                padding: "1.4rem 2rem",
                background: "rgba(219,201,201,0.5)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "0.75rem",
                  background: "rgba(180,130,120,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={15} style={{ color: "#8a5050" }} />
              </div>
              <div>
                <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8a5050", margin: "0 0 0.2rem 0" }}>
                  Quick questions
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111", textDecoration: "none" }}
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label htmlFor="tipo" style={labelStyle}>Project type</label>
              <select
                id="tipo"
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="">Choose an option</option>
                {TIPOS_EN.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us what you need..."
                style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                background: "rgba(0,0,0,0.05)",
                borderRadius: "0.75rem",
                padding: "0.25rem",
              }}
            >
              <button
                type="button"
                onClick={() => setSendMode("whatsapp")}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  padding: "0.55rem 1rem",
                  borderRadius: "0.55rem",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  background: sendMode === "whatsapp" ? "#fff" : "transparent",
                  color: sendMode === "whatsapp" ? "#1e7a4a" : "rgba(0,0,0,0.38)",
                  boxShadow: sendMode === "whatsapp" ? "0 1px 6px rgba(0,0,0,0.10)" : "none",
                  transition: "all 0.18s",
                }}
              >
                <WhatsAppIcon size={14} />
                WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setSendMode("email")}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  padding: "0.55rem 1rem",
                  borderRadius: "0.55rem",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  background: sendMode === "email" ? "#fff" : "transparent",
                  color: sendMode === "email" ? "#0a66c2" : "rgba(0,0,0,0.38)",
                  boxShadow: sendMode === "email" ? "0 1px 6px rgba(0,0,0,0.10)" : "none",
                  transition: "all 0.18s",
                }}
              >
                <Mail size={14} />
                Email
              </button>
            </div>

            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.55rem",
                padding: "0.9rem 2rem",
                borderRadius: "0.875rem",
                background: sendMode === "whatsapp"
                  ? "linear-gradient(135deg, #389a70 0%, #287a54 100%)"
                  : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                boxShadow: sendMode === "whatsapp"
                  ? "0 4px 20px rgba(56,154,112,0.28)"
                  : "0 4px 20px rgba(37,99,235,0.28)",
                letterSpacing: "-0.01em",
                fontFamily: "inherit",
                transition: "all 0.18s",
              }}
            >
              {sendMode === "whatsapp" ? (
                <><WhatsAppIcon size={18} /> Send via WhatsApp</>
              ) : (
                <><Mail size={18} /> Send via Email</>
              )}
            </button>

            <p style={{ fontSize: "0.72rem", color: "rgba(0,0,0,0.32)", margin: 0, textAlign: "center" }}>
              {sendMode === "whatsapp"
                ? "Your message arrives directly. No middlemen."
                : "We'll reply to your email within 24 hours."}
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}
