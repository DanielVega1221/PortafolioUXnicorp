import { useState } from "react";
import Image from "next/image";

type BrandMarkProps = {
  size?: number;
};

export function BrandMark({ size = 24 }: BrandMarkProps) {
  const [imageMissing, setImageMissing] = useState(false);

  if (!imageMissing) {
    return (
      <Image
        src="/brand/logo.png"
        alt=""
        width={size}
        height={size}
        className="object-contain"
        onError={() => setImageMissing(true)}
      />
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="10" stroke="#F37AA6" strokeWidth="2" />
      <circle cx="11" cy="11" r="3.5" fill="#F37AA6" />
      <line x1="11" y1="1" x2="11" y2="6.5" stroke="#F37AA6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="15.5" x2="11" y2="21" stroke="#F37AA6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="11" x2="6.5" y2="11" stroke="#F37AA6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15.5" y1="11" x2="21" y2="11" stroke="#F37AA6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}