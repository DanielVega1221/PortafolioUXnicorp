import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de UXnicorp. Conocé cómo tratamos tus datos personales y el uso de cookies en nuestro sitio.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.uxnicorp.com.ar/politica-de-privacidad",
    languages: {
      es: "https://www.uxnicorp.com.ar/politica-de-privacidad",
      en: "https://www.uxnicorp.com.ar/en/privacy-policy",
      "x-default": "https://www.uxnicorp.com.ar/politica-de-privacidad",
    },
  },
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    body: `El responsable del tratamiento de los datos personales recabados a través de este sitio web es UXnicorp, con dirección de contacto electrónico: uxnicorp@gmail.com.`,
  },
  {
    title: "2. Datos que recopilamos",
    body: `Podemos recopilar los siguientes datos:\n\n• Datos que vos nos proporcionás voluntariamente a través del formulario de contacto (nombre, email, descripción del proyecto).\n• Datos de navegación recopilados automáticamente a través de Google Analytics (páginas visitadas, tiempo de sesión, país de origen, dispositivo). Estos datos son anónimos y agregados.`,
  },
  {
    title: "3. Finalidad del tratamiento",
    body: `Los datos personales que nos proporcionás se utilizan exclusivamente para:\n\n• Responder a tu consulta o solicitud de presupuesto.\n• Contactarte en relación con el proyecto que nos describiste.\n\nLos datos de navegación se utilizan para analizar el uso del sitio web y mejorar su contenido y experiencia de usuario.`,
  },
  {
    title: "4. Cookies y Google Analytics",
    body: `Este sitio utiliza Google Analytics, un servicio de analítica web proporcionado por Google LLC. Google Analytics emplea cookies propias para recopilar información de forma anónima sobre el comportamiento de los usuarios en el sitio.\n\nPodés optar por no ser rastreado a través del banner de cookies que aparece al ingresar al sitio por primera vez, o en cualquier momento desde el enlace "Preferencias de cookies" en el pie de página.\n\nMás información sobre cómo Google trata los datos: https://policies.google.com/privacy`,
  },
  {
    title: "5. Base legal",
    body: `El tratamiento de tus datos se basa en:\n\n• Tu consentimiento explícito, cuando aceptás las cookies analíticas.\n• La ejecución de medidas precontractuales, cuando nos contactás para solicitar información sobre nuestros servicios.`,
  },
  {
    title: "6. Conservación de datos",
    body: `Los datos personales se conservan durante el tiempo necesario para gestionar tu consulta. Los datos de analítica son conservados por Google según sus propias políticas de retención.`,
  },
  {
    title: "7. Compartición de datos con terceros",
    body: `No vendemos ni cedemos tus datos a terceros. Los únicos terceros que pueden acceder a datos de navegación son Google LLC (mediante Google Analytics), bajo sus propias políticas de privacidad y cumplimiento normativo.`,
  },
  {
    title: "8. Tus derechos",
    body: `Tenés derecho a acceder, rectificar, suprimir y oponerte al tratamiento de tus datos personales. Para ejercerlos, podés escribirnos a uxnicorp@gmail.com.`,
  },
  {
    title: "9. Cambios en esta política",
    body: `Podemos actualizar esta política de privacidad en cualquier momento. La versión vigente siempre estará disponible en esta página con la fecha de última actualización.`,
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <main className="mx-auto max-w-[780px] px-6 py-20 md:px-8 md:py-28">
      <div className="mb-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-400 transition-colors hover:text-gray-700"
        >
          ← UXnicorp
        </Link>
        <h1
          className="mt-6 text-[2.4rem] font-black leading-tight tracking-[-0.04em] text-gray-900 md:text-[3rem]"
        >
          Política de Privacidad
        </h1>
        <p className="mt-3 text-sm text-gray-400">
          Última actualización: abril de 2026
        </p>
        <p className="mt-5 text-base leading-relaxed text-gray-600">
          En UXnicorp nos tomamos en serio la privacidad de quienes visitan nuestro
          sitio. Esta política explica qué datos recopilamos, para qué los usamos
          y cuáles son tus derechos.
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
          ¿Tenés alguna consulta sobre esta política?{" "}
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
          href="/en/privacy-policy"
          className="text-xs text-gray-400 underline-offset-2 hover:underline"
        >
          Read in English →
        </Link>
      </div>
    </main>
  );
}
