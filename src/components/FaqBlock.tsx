export type FaqItem = {
  q: string;
  a: string;
};

type FaqBlockProps = {
  items: FaqItem[];
  accent?: string;
  label?: string;
  title?: string;
  description?: string;
};

export default function FaqBlock({
  items,
  accent = "#974c67",
  label = "Preguntas frecuentes",
  title = "Dudas que nos hacen siempre.",
  description =
    "Respondemos sin vueltas lo que más nos preguntan sobre este servicio.",
}: FaqBlockProps) {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section
      aria-label={label}
      style={{ marginBottom: "2.5rem" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-8">
        <p
          className="text-sm font-semibold uppercase tracking-[0.24em]"
          style={{ color: accent }}
        >
          {label}
        </p>
        <h2 className="mt-3 max-w-xl text-[1.75rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-gray-900 md:text-[2.2rem]">
          {title}
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-500">
          {description}
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-gray-200/70">
        {items.map((item, i) => (
          <details
            key={i}
            className="group"
            style={{
              borderBottom:
                i === items.length - 1 ? "none" : "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <summary className="flex w-full cursor-pointer list-none select-none items-center justify-between gap-4 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
              <span className="text-[0.95rem] font-semibold leading-snug text-gray-900">
                {item.q}
              </span>
              <span
                className="flex-shrink-0 text-xl font-normal leading-none transition-transform duration-300 group-open:rotate-45"
                style={{ color: accent }}
              >
                +
              </span>
            </summary>
            <div className="px-6 pb-5">
              {item.a.split("\n\n").map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm leading-relaxed text-gray-500"
                  style={{ marginTop: pIdx > 0 ? "0.75rem" : 0 }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}