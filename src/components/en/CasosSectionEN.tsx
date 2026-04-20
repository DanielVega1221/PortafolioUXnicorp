import TransitionLink from "@/components/TransitionLink";

export default function CasosSectionEN() {
  return (
    <section id="casos" className="relative overflow-hidden px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1220px]">

        <div className="mb-14 flex flex-col items-start">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">
            Real cases
          </p>
          <h2 className="mt-4 max-w-2xl text-[2.1rem] font-extrabold leading-[0.97] tracking-[-0.05em] text-gray-900 md:text-[2.8rem] lg:text-[3.1rem]">
            This is what
            <br />
            we did.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-stretch">

          <div
            className="flex flex-col justify-between rounded-[28px] p-8 md:p-10"
            style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FEE0D6] px-3 py-1">
                <div className="h-1.5 w-1.5 rounded-full bg-[#F37AA6]" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#F37AA6]">
                  Glam at Nails
                </span>
              </div>

              <div className="mb-6">
                <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gray-400">
                  The problem
                </p>
                <p className="text-[1rem] leading-relaxed text-gray-700">
                  They had an Instagram presence but no way for clients to book online. Everything went through WhatsApp: late-night messages, missed appointments, zero record-keeping.
                </p>
              </div>

              <div className="mb-6">
                <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gray-400">
                  What we did
                </p>
                <ul className="space-y-2">
                  {[
                    "Full landing page with all the business sections",
                    "Work gallery, testimonials and detailed service descriptions",
                    "Contact form that routes directly to WhatsApp",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F37AA6]" />
                      <span className="text-[0.88rem] leading-snug text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(243,122,166,0.07)", border: "1px solid rgba(243,122,166,0.15)" }}
            >
              <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#F37AA6]">
                Result
              </p>
              <p className="text-[0.95rem] font-semibold leading-snug text-gray-800">
                She went from getting random WhatsApp messages with no context to having a page that presents the full business: services, work gallery, who she is, where she is, and how to book.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="rounded-[28px] p-8"
              style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gray-400">
                The result
              </p>
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/works/GlamAtNails.png"
                  alt="Glam at Nails — landing page"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "220px" }}
                />
              </div>
            </div>

            <TransitionLink
              href="/en/casos"
              className="group flex flex-col justify-between rounded-[28px] p-8 transition-all duration-300 hover:scale-[1.01]"
              style={{ background: "linear-gradient(135deg, #F37AA6 0%, #E0A6D8 100%)" }}
            >
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                See more cases
              </p>
              <div className="mt-10">
                <p className="text-[1.4rem] font-extrabold leading-tight tracking-[-0.03em] text-white">
                  6 projects,
                  <br />
                  6 real stories.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[0.85rem] font-semibold text-white">See all cases</span>
                  <svg viewBox="0 0 16 16" className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </TransitionLink>
          </div>
        </div>

      </div>
    </section>
  );
}
