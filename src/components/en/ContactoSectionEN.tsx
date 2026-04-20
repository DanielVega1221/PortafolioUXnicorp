"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";

const GONZALO_WA = "5493834368748";
const AILIN_WA = "5491123504530";
const EMAIL = "uxnicorp@gmail.com";

const TIPOS_EN = ["Landing Page", "E-commerce", "System / App", "Not sure yet"];

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
    initial: "G",
    tagline: "I'll reply within 24 hours.",
    wa: GONZALO_WA,
    bg: "rgba(254,224,214,0.65)",
    avatarBg: "linear-gradient(135deg, #F37AA6, #e0608a)",
    avatarColor: "#fff",
  },
  {
    name: "Ailin",
    initial: "A",
    tagline: "Reach out if you have questions about the visual.",
    wa: AILIN_WA,
    bg: "rgba(224,166,216,0.45)",
    avatarBg: "linear-gradient(135deg, #E0A6D8, #b060a0)",
    avatarColor: "#fff",
  },
];

export default function ContactoSectionEN() {
  const [form, setForm] = useState({ nombre: "", email: "", tipo: "", mensaje: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi UXNICORP!\nI'm ${form.nombre} (${form.email})\n\nProject: ${
      form.tipo || "Not specified"
    }\n\n${form.mensaje}`;
    window.open(
      `https://wa.me/${GONZALO_WA}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section id="contacto" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1220px]">

        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            Contact
          </p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
            Tell us what you need. We reply directly, no filters.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

          {/* LEFT — team + email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {team.map((p) => (
              <div
                key={p.name}
                style={{
                  borderRadius: "1.5rem",
                  padding: "1.75rem 2rem",
                  background: p.bg,
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "1rem",
                    background: p.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                  }}
                >
                  <span style={{ fontSize: "1.4rem", fontWeight: 900, color: p.avatarColor, lineHeight: 1 }}>
                    {p.initial}
                  </span>
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontWeight: 800, fontSize: "1rem", color: "#111", margin: "0 0 0.35rem 0" }}>
                    {p.name}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.42)", margin: 0, fontStyle: "italic" }}>
                    {p.tagline}
                  </p>
                </div>

                {/* WA button */}
                <a
                  href={`https://wa.me/${p.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.5rem 1.1rem",
                    borderRadius: "0.65rem",
                    background: "rgba(56,154,112,0.12)",
                    color: "#287a54",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: "1px solid rgba(56,154,112,0.22)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <WhatsAppIcon size={14} />
                  WhatsApp
                </a>
              </div>
            ))}

            {/* Email */}
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

          {/* RIGHT — form */}
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
              <label style={labelStyle}>Project type</label>
              <select
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

            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.55rem",
                padding: "0.9rem 2rem",
                borderRadius: "0.875rem",
                background: "linear-gradient(135deg, #389a70 0%, #287a54 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.95rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(56,154,112,0.28)",
                letterSpacing: "-0.01em",
                fontFamily: "inherit",
              }}
            >
              <WhatsAppIcon size={18} />
              Send via WhatsApp
            </button>

            <p style={{ fontSize: "0.72rem", color: "rgba(0,0,0,0.32)", margin: 0, textAlign: "center" }}>
              Your message arrives directly. No middlemen.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}
