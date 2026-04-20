"use client";

import { useEffect } from "react";
import { usePageTransition } from "@/components/TransitionProvider";

export default function Template({ children }: { children: React.ReactNode }) {
  const { onPageReady } = usePageTransition();

  useEffect(() => {
    onPageReady();
    const scrollTo = sessionStorage.getItem('uxn-scroll-to');
    if (scrollTo) {
      sessionStorage.removeItem('uxn-scroll-to');
      // Instant scroll before curtain opens — user sees form right away
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
