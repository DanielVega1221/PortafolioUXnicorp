import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "UXnicorp privacy policy. Learn how we handle your personal data and the use of cookies on our website.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/en/privacy-policy",
    languages: {
      en: "https://www.uxnicorp.com.ar/en/privacy-policy",
      es: "https://www.uxnicorp.com.ar/politica-de-privacidad",
      "x-default": "https://www.uxnicorp.com.ar/politica-de-privacidad",
    },
  },
};

const sections = [
  {
    title: "1. Data Controller",
    body: `The data controller responsible for personal data collected through this website is UXnicorp. Contact email: uxnicorp@gmail.com.`,
  },
  {
    title: "2. Data We Collect",
    body: `We may collect the following data:\n\n• Data you voluntarily provide through the contact form (name, email, project description).\n• Navigation data collected automatically via Google Analytics (pages visited, session duration, country of origin, device). This data is anonymous and aggregated.`,
  },
  {
    title: "3. Purpose of Processing",
    body: `Personal data you provide is used exclusively to:\n\n• Respond to your enquiry or project request.\n• Contact you regarding the project you described.\n\nNavigation data is used to analyse website usage and improve content and user experience.`,
  },
  {
    title: "4. Cookies and Google Analytics",
    body: `This site uses Google Analytics, a web analytics service provided by Google LLC. Google Analytics uses first-party cookies to anonymously collect information about user behaviour on the site.\n\nYou can opt out of tracking via the cookie banner that appears on your first visit, or at any time using the "Cookie preferences" link in the footer.\n\nMore information on how Google handles data: https://policies.google.com/privacy`,
  },
  {
    title: "5. Legal Basis",
    body: `The processing of your data is based on:\n\n• Your explicit consent, when you accept analytical cookies.\n• Pre-contractual measures, when you contact us to request information about our services.`,
  },
  {
    title: "6. Data Retention",
    body: `Personal data is retained for the time necessary to handle your enquiry. Analytics data is retained by Google according to their own retention policies.`,
  },
  {
    title: "7. Sharing Data with Third Parties",
    body: `We do not sell or share your data with third parties. The only third party that may access navigation data is Google LLC (via Google Analytics), under their own privacy policies and regulatory compliance.`,
  },
  {
    title: "8. Your Rights",
    body: `You have the right to access, rectify, erase, and object to the processing of your personal data. To exercise these rights, please write to us at uxnicorp@gmail.com.`,
  },
  {
    title: "9. Changes to This Policy",
    body: `We may update this privacy policy at any time. The current version will always be available on this page with the date of the last update.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-[780px] px-6 py-20 md:px-8 md:py-28">
      <div className="mb-12">
        <Link
          href="/en"
          className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400 transition-colors hover:text-gray-700"
        >
          ← UXnicorp
        </Link>
        <h1
          className="mt-6 text-[2.4rem] font-black leading-tight tracking-[-0.04em] text-gray-900 md:text-[3rem]"
        >
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-gray-400">Last updated: April 2026</p>
        <p className="mt-5 text-base leading-relaxed text-gray-600">
          At UXnicorp we take the privacy of our visitors seriously. This policy
          explains what data we collect, how we use it, and what your rights are.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {sections.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl px-7 py-6"
            style={{
              background: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            }}
          >
            <h2 className="mb-3 text-base font-bold text-gray-900">{s.title}</h2>
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-12 rounded-2xl px-7 py-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(243,122,166,0.12) 0%, rgba(202,222,249,0.18) 100%)",
          border: "1px solid rgba(243,122,166,0.18)",
        }}
      >
        <p className="text-sm text-gray-700">
          Any questions about this policy?{" "}
          <a
            href="mailto:uxnicorp@gmail.com"
            className="font-semibold text-[#e0608a] underline-offset-2 hover:underline"
          >
            uxnicorp@gmail.com
          </a>
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/politica-de-privacidad"
          className="text-xs text-gray-400 underline-offset-2 hover:underline"
        >
          Leer en Español →
        </Link>
      </div>
    </main>
  );
}
