"use client";
import { useCallback } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

const ES_TO_EN: Record<string, string> = {
  "/nosotros": "/en/about",
  "/politica-de-privacidad": "/en/privacy-policy",
  "/servicios/sistemas-gestion/restaurantes": "/en/servicios/management-systems/restaurants",
  "/servicios/sistemas-gestion/construccion": "/en/servicios/management-systems/construction",
  "/servicios/sistemas-gestion/clinicas": "/en/servicios/management-systems/clinics",
  "/servicios/sistemas-gestion/inmobiliarias": "/en/servicios/management-systems/real-estate",
  "/servicios/sistemas-gestion/gimnasios": "/en/servicios/management-systems/gyms",
  "/servicios/sistemas-gestion/veterinarias": "/en/servicios/management-systems/veterinary",
  "/servicios/sistemas-gestion/talleres": "/en/servicios/management-systems/auto-repair",
  "/servicios/sistemas-gestion/dentistas": "/en/servicios/management-systems/dental",
  "/servicios/sistemas-gestion/hoteles": "/en/servicios/management-systems/hotels",
  "/servicios/sistemas-gestion/nutricionistas": "/en/servicios/management-systems/nutritionists",
  "/servicios/sistemas-gestion/estudios-juridicos": "/en/servicios/management-systems/law-firms",
  "/servicios/sistemas-gestion/ferreterias": "/en/servicios/management-systems/hardware-stores",
  "/servicios/sistemas-gestion/concesionarias": "/en/servicios/management-systems/car-dealerships",
};
const EN_TO_ES: Record<string, string> = {
  "/en/about": "/nosotros",
  "/en/privacy-policy": "/politica-de-privacidad",
  "/en/servicios/management-systems/restaurants": "/servicios/sistemas-gestion/restaurantes",
  "/en/servicios/management-systems/construction": "/servicios/sistemas-gestion/construccion",
  "/en/servicios/management-systems/clinics": "/servicios/sistemas-gestion/clinicas",
  "/en/servicios/management-systems/real-estate": "/servicios/sistemas-gestion/inmobiliarias",
  "/en/servicios/management-systems/gyms": "/servicios/sistemas-gestion/gimnasios",
  "/en/servicios/management-systems/veterinary": "/servicios/sistemas-gestion/veterinarias",
  "/en/servicios/management-systems/auto-repair": "/servicios/sistemas-gestion/talleres",
  "/en/servicios/management-systems/dental": "/servicios/sistemas-gestion/dentistas",
  "/en/servicios/management-systems/hotels": "/servicios/sistemas-gestion/hoteles",
  "/en/servicios/management-systems/nutritionists": "/servicios/sistemas-gestion/nutricionistas",
  "/en/servicios/management-systems/law-firms": "/servicios/sistemas-gestion/estudios-juridicos",
  "/en/servicios/management-systems/hardware-stores": "/servicios/sistemas-gestion/ferreterias",
  "/en/servicios/management-systems/car-dealerships": "/servicios/sistemas-gestion/concesionarias",
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isDevWeb = pathname.startsWith("/desarrollo-web");
  const isEnglish = pathname.startsWith("/en");

  const setLocaleCookie = useCallback((locale: string) => {
    if (typeof document !== "undefined") {
      document.cookie = `user-locale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, []);

  if (isDevWeb) return null;

  const esPath = isEnglish
    ? (EN_TO_ES[pathname] ?? (pathname.slice(3) || "/"))
    : pathname;

  const enPath = isEnglish
    ? pathname
    : (ES_TO_EN[pathname] ?? (pathname === "/" ? "/en" : `/en${pathname}`));

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        display: "flex",
        borderRadius: "99px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        border: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <TransitionLink
        href={esPath}
        onClick={() => setLocaleCookie("es")}
        style={{
          padding: "0.42rem 0.85rem",
          fontSize: "0.72rem",
          fontWeight: !isEnglish ? 800 : 500,
          color: !isEnglish ? "#974c67" : "#6b7280",
          textDecoration: "none",
          background: !isEnglish ? "rgba(243,122,166,0.10)" : "transparent",
          transition: "all 0.15s",
          letterSpacing: "0.04em",
        }}
      >
        ES
      </TransitionLink>
      <div style={{ width: "1px", background: "rgba(0,0,0,0.07)", margin: "0.35rem 0" }} />
      <TransitionLink
        href={enPath}
        onClick={() => setLocaleCookie("en")}
        style={{
          padding: "0.42rem 0.85rem",
          fontSize: "0.72rem",
          fontWeight: isEnglish ? 800 : 500,
          color: isEnglish ? "#974c67" : "#6b7280",
          textDecoration: "none",
          background: isEnglish ? "rgba(243,122,166,0.10)" : "transparent",
          transition: "all 0.15s",
          letterSpacing: "0.04em",
        }}
      >
        EN
      </TransitionLink>
    </div>
  );
}
