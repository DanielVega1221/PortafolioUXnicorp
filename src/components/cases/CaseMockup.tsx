import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  priority?: boolean;
};

export default function CaseMockup({ src, alt, priority }: Props) {
  return (
    <div className="caso-mockup" style={{ flexShrink: 0 }}>
      <div className="caso-mockup-lid">
        <div className="caso-mockup-bezel">
          <div className="caso-mockup-screen">
            {src ? (
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes="(max-width: 640px) 100vw, 380px"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            ) : (
              <div className="caso-mockup-placeholder">
                <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
                  <rect x="2" y="6" width="26" height="19" rx="3.5" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
                  <circle cx="15" cy="15.5" r="5" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
                  <path d="M10 6l1.5-3h7L20 6" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" strokeLinecap="round" />
                  <circle cx="24" cy="10" r="1.5" fill="rgba(255,255,255,0.12)" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="caso-mockup-base">
        <div className="caso-mockup-notch" />
      </div>
    </div>
  );
}
