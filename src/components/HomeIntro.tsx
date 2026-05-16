"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const SHOW_MS = 2200;
const EXIT_MS = 950;
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function HomeIntro() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const progress = useMotionValue(0);
  const counter = useTransform(progress, (v) => `${Math.round(v * 100)}`);

  useEffect(() => {
    if (localStorage.getItem("uxn-intro")) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const rafId = requestAnimationFrame(() => setVisible(true));

    return () => cancelAnimationFrame(rafId);
  }, []);

  useLayoutEffect(() => {
    if (!visible) return;
    const anim = animate(progress, 1, { duration: SHOW_MS / 1000, ease: "linear" });
    const t1 = setTimeout(() => setExiting(true), SHOW_MS);
    const t2 = setTimeout(() => {
      setVisible(false);
      localStorage.setItem("uxn-intro", "1");
    }, SHOW_MS + EXIT_MS);
    return () => { anim.stop(); clearTimeout(t1); clearTimeout(t2); };
  }, [progress, visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      <motion.div
        animate={{ y: exiting ? "-100%" : "0%" }}
        transition={{ duration: EXIT_MS / 1000, ease: EASE }}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "50.5%",
          background: "#fce8f0",
        }}
      />

      <motion.div
        animate={{ y: exiting ? "100%" : "0%" }}
        transition={{ duration: EXIT_MS / 1000, ease: EASE }}
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "50.5%",
          background: "#fce8f0",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(243,122,166,0.22) 0%, rgba(224,166,216,0.14) 40%, transparent 68%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <motion.div
        animate={{ opacity: exiting ? 0 : 1, scale: exiting ? 1.07 : 1 }}
        transition={{ duration: 0.28, ease: "easeIn" }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          pointerEvents: "none",
        }}
      >
        <motion.img
          src="/brand/logo.png"
          alt=""
          initial={{ opacity: 0, scale: 0.5, filter: "blur(16px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          style={{
            height: "80px",
            width: "auto",
            position: "relative",
            zIndex: 1,
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: 0.72 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
            position: "relative",
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          <div style={{ overflow: "hidden", lineHeight: 1 }}>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.74 }}
              style={{
                display: "block",
                fontSize: "1.7rem",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#1a0a10",
                lineHeight: 1,
              }}
            >
              UXnicorp
            </motion.span>
          </div>

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
            style={{
              display: "block",
              width: "48px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #F37AA6, transparent)",
              transformOrigin: "center",
            }}
          />

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1.18 }}
            style={{
              fontSize: "0.58rem",
              fontWeight: 600,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "#e0608a",
            }}
          >
            Diseño · Desarrollo · Estrategia
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2.5rem",
          display: "flex",
          alignItems: "baseline",
          gap: "2px",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <motion.span
          style={{
            fontSize: "0.95rem",
            fontWeight: 700,
            fontFamily: "monospace",
            color: "rgba(30,10,18,0.2)",
            letterSpacing: "-0.02em",
          }}
        >
          {counter}
        </motion.span>
        <span
          style={{
            fontSize: "0.55rem",
            fontWeight: 600,
            color: "rgba(30,10,18,0.15)",
            letterSpacing: "0.1em",
          }}
        >
          %
        </span>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: SHOW_MS / 1000, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: "100%",
          background: "linear-gradient(90deg, #F37AA6 0%, #E0A6D8 50%, #CADEF9 100%)",
          transformOrigin: "left center",
          zIndex: 10,
        }}
      />
    </div>
  );
}
