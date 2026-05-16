import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import SobreNosotrosSection from "@/components/SobreNosotrosSection";
import AnimateIn from "@/components/AnimateIn";
import HomeIntro from "@/components/HomeIntro";
import Footer from "@/components/Footer";
import LazyUXScoreSection from "@/components/LazyUXScoreSection";

const CasosSection = dynamic(() => import("@/components/CasosSection"));
const ConceptosSection = dynamic(() => import("@/components/ConceptosSection"));
const ProcesoSection = dynamic(() => import("@/components/ProcesoSection"));
const DiferenciacionSection = dynamic(() => import("@/components/DiferenciacionSection"));
const ServiciosSection = dynamic(() => import("@/components/ServiciosSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const ContactoSection = dynamic(() => import("@/components/ContactoSection"));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta hacer una página web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada proyecto es distinto, así que el costo depende de lo que realmente necesite el negocio. Antes de presupuestar, preferimos entender bien el objetivo, el alcance y qué solución tiene sentido para cada caso. Trabajamos con presupuestos definidos y sin costos sorpresa a mitad del proyecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cobran por hora o por proyecto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con presupuestos por proyecto y alcance definido. No nos gusta que un cliente sienta incertidumbre sobre cuánto va a terminar pagando, así que dejamos todo claro desde el comienzo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo saben qué tipo de web necesito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Antes de hablar de diseño o desarrollo, intentamos entender el negocio, el rubro y qué objetivo tiene la web. Preferimos recomendar lo que realmente tiene sentido antes que vender complejidad innecesaria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tengo que saber de tecnología para trabajar con ustedes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Intentamos explicar todo de forma simple y acompañar durante todo el proceso. La idea es ayudarte a tomar decisiones claras para tu proyecto, sin términos técnicos innecesarios.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué necesitan para empezar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generalmente una primera charla para entender el proyecto, el negocio y qué estás buscando. A partir de ahí organizamos objetivos, ideas, referencias y definimos el mejor camino para avanzar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda desarrollar una web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tipo de proyecto y el alcance. Siempre trabajamos con tiempos realistas y mantenemos comunicación clara durante todo el proceso. Hay webs simples que se resuelven relativamente rápido y proyectos más grandes que requieren más etapas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si no me gusta el diseño?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso está pensado para trabajar en conjunto y validar decisiones antes de avanzar demasiado. Mostramos avances y ajustamos detalles durante el desarrollo para que el resultado represente al negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo pedir cambios durante el proyecto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Muchos proyectos evolucionan mientras se desarrollan, así que mantenemos un proceso flexible. Dependiendo del cambio, evaluamos juntos cómo implementarlo de la mejor manera.",
      },
    },
    {
      "@type": "Question",
      name: "¿La web se hace desde cero o usan plantillas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de lo que necesite el proyecto. En UXnicorp lo importante es que la solución sea útil, clara y coherente con el negocio, ya sea una solución personalizada o una más estándar según el caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre una landing page y una web completa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una landing page está pensada para comunicar algo puntual o convertir sobre un objetivo específico. Una web completa tiene más secciones, información y estructura para representar de forma más amplia a un negocio. La mejor opción depende de qué necesite comunicar cada caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Conviene hacer algo simple o algo más complejo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mejor solución no siempre es la más grande. Un proyecto simple, bien pensado y bien ejecutado funciona muchísimo mejor que algo lleno de funciones innecesarias. Buscamos el equilibrio correcto para cada negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mi negocio realmente necesita una página web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No todos los negocios necesitan lo mismo. En muchos casos una web ayuda a transmitir confianza, mostrar servicios y conseguir clientes en Argentina y el exterior. En otros, una solución más simple ya alcanza. Por eso preferimos entender primero cada situación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa después de publicar la web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No desaparecemos después de entregar un proyecto. Seguimos acompañando, ayudando y resolviendo dudas para que el cliente pueda sentirse cómodo usando su web y haciéndola crecer.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dan soporte o mantenimiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Podemos acompañar con mantenimiento, mejoras, actualizaciones o soporte según lo que necesite cada proyecto después de publicado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Voy a depender de ustedes para manejar mi web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La idea es todo lo contrario. Intentamos que cada cliente entienda cómo funciona su proyecto y pueda manejarlo con claridad. Trabajamos desde la transparencia y evitamos generar dependencia innecesaria.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeIntro />
      <main>
      <Hero />
      <SobreNosotrosSection />
      <LazyUXScoreSection />
      <AnimateIn><CasosSection /></AnimateIn>
      <AnimateIn><ConceptosSection /></AnimateIn>
      <ProcesoSection />
      <DiferenciacionSection />
      <ServiciosSection />
      <AnimateIn><FAQSection /></AnimateIn>
      <AnimateIn><ContactoSection /></AnimateIn>
    </main>
    <Footer locale="es" />
    </>
  );
}
