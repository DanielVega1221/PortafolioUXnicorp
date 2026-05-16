import type { CSSProperties } from "react";
import { BrandMark } from "@/components/hero/BrandMark";

type HeroBadge = {
  label: string;
  angle: string;
  counterAngle: string;
  radius: string;
  duration: string;
};

type HeroVisualProps = {
  badges: HeroBadge[];
};

export function HeroVisual({ badges }: HeroVisualProps) {
  return (
    <div className="relative hidden h-[372px] -translate-y-10 items-start justify-center pt-1 md:flex">
      <div className="relative mt-[-26px] h-[392px] w-[392px]">
        <div className="absolute inset-[42px] flex items-center justify-center rounded-full border border-white/60 bg-white/12 shadow-[0_20px_64px_rgba(227,166,216,0.26)] backdrop-blur-sm" style={{ contain: "layout style paint" }}>
          <div className="hero-orb-layer hero-orb-layer-a" />
          <div className="hero-orb-layer hero-orb-layer-b" />
          <div className="hero-orb-layer hero-orb-layer-c" />
          <div className="hero-orb-glow" />

          <div className="relative z-10 flex h-[98px] w-[98px] items-center justify-center rounded-full border border-white/70 bg-white/88 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <BrandMark size={48} />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-full border border-white/25" />
        <div className="pointer-events-none absolute inset-[42px] rounded-full border border-white/35" />

        {badges.map((badge) => (
          <div
            key={badge.label}
            className="hero-orbit"
            style={{ "--orbit-duration": badge.duration } as CSSProperties}
          >
            <div
              className="hero-orbit-anchor"
              style={{ transform: `rotate(${badge.angle}) translateY(-${badge.radius})` }}
            >
              <div
                className="hero-orbit-static"
                style={{ transform: `rotate(${badge.counterAngle})` }}
              >
                <div
                  className="hero-orbit-counter"
                  style={{ "--orbit-duration": badge.duration } as CSSProperties}
                >
                  <div className="flex items-center gap-2 rounded-full border border-white bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-md">
                    <span className="h-2 w-2 rounded-full bg-[#F37AA6]" />
                    {badge.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}