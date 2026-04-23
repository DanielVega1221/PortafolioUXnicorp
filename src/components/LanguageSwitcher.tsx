"use client";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const esPath = isEnglish ? pathname.slice(3) || "/" : pathname;
  const enPath = isEnglish ? pathname : pathname === "/" ? "/en" : `/en${pathname}`;

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
        style={{
          padding: "0.42rem 0.85rem",
          fontSize: "0.72rem",
          fontWeight: !isEnglish ? 800 : 500,
          color: !isEnglish ? "#F37AA6" : "#9ca3af",
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
        style={{
          padding: "0.42rem 0.85rem",
          fontSize: "0.72rem",
          fontWeight: isEnglish ? 800 : 500,
          color: isEnglish ? "#F37AA6" : "#9ca3af",
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
