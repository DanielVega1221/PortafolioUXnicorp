"use client";

import dynamic from "next/dynamic";

const UXScoreSection = dynamic(() => import("@/components/UXScoreSection"), {
  ssr: false,
  loading: () => (
    <section id="ux-score" className="relative px-6 pb-24 pt-12 md:px-8 md:pb-28 md:pt-16">
      <div className="mx-auto max-w-[1220px]">
        <div className="max-w-2xl rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="h-4 w-24 rounded-full bg-black/6" />
          <div className="mt-4 h-20 w-full max-w-xl rounded-3xl bg-black/6" />
          <div className="mt-6 h-[520px] rounded-[28px] bg-black/5" />
        </div>
      </div>
    </section>
  ),
});

type LazyUXScoreSectionProps = {
  locale?: "es" | "en";
};

export default function LazyUXScoreSection(props: LazyUXScoreSectionProps) {
  return <UXScoreSection {...props} />;
}