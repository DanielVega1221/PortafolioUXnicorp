"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const CLOSE_MS = 720;
const OPEN_MS  = 680;
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

type Phase = "idle" | "closing" | "opening";

interface TransitionCtx {
  navigate: (href: string) => void;
  onPageReady: () => void;
}

const Ctx = createContext<TransitionCtx>({
  navigate: () => {},
  onPageReady: () => {},
});

export const usePageTransition = () => useContext(Ctx);

export default function TransitionProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const router      = useRouter();
  const pathname    = usePathname();
  const phaseRef    = useRef<Phase>("idle");
  const pathnameRef = useRef(pathname);

  useEffect(() => { pathnameRef.current = pathname; }, [pathname]);

  const topControls = useAnimation();
  const botControls = useAnimation();

  const setPhaseSync = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  const openCurtains = useCallback(async () => {
    setPhaseSync("opening");
    await Promise.all([
      topControls.start({ y: "-100%", transition: { duration: OPEN_MS / 1000, ease: EASE } }),
      botControls.start({ y:  "100%", transition: { duration: OPEN_MS / 1000, ease: EASE } }),
    ]);
    if (phaseRef.current === "opening") {
      setPhaseSync("idle");
    }
  }, [topControls, botControls, setPhaseSync]);

  useEffect(() => {
    if (phaseRef.current !== "closing") return;
    openCurtains();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      if (href === pathnameRef.current) return;
      if (phaseRef.current === "closing") return;

      setPhaseSync("closing");

      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem("uxn-intro", "1");
      }

      Promise.all([
        topControls.start({ y: "0%", transition: { duration: CLOSE_MS / 1000, ease: EASE } }),
        botControls.start({ y: "0%", transition: { duration: CLOSE_MS / 1000, ease: EASE } }),
      ]).then(() => {
        router.push(href);
      });
    },
    [router, topControls, botControls, setPhaseSync]
  );

  const onPageReady = useCallback(() => {}, []);

  const ctxValue = useMemo(
    () => ({ navigate, onPageReady }),
    [navigate, onPageReady]
  );

  return (
    <Ctx.Provider value={ctxValue}>
      {children}

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          pointerEvents: phase !== "idle" ? "all" : "none",
          background: phase !== "idle" ? "#fce8f0" : "transparent",
        }}
      >
        <motion.div
          initial={{ y: "-100%" }}
          animate={topControls}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50.5%",
            background: "#fce8f0",
          }}
        />

        <motion.div
          initial={{ y: "100%" }}
          animate={botControls}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50.5%",
            background: "#fce8f0",
          }}
        />

        <motion.div
          animate={{
            opacity: phase === "idle" ? 0 : 1,
            scale: phase === "opening" ? 0.92 : 1,
          }}
          transition={{
            opacity: {
              duration: 0.22,
              delay: phase === "closing" ? (CLOSE_MS / 1000) * 0.55 : 0,
            },
            scale: { duration: 0.28 },
          }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.65rem",
          }}
        >
          <Image
            src="/brand/logo-sm.png"
            alt=""
            width={51}
            height={56}
            style={{ height: "56px", width: "auto" }}
          />
          <span
            style={{
              fontSize: "0.55rem",
              fontWeight: 600,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "#e0608a",
            }}
          >
            UXnicorp
          </span>
        </motion.div>
      </div>
    </Ctx.Provider>
  );
}
