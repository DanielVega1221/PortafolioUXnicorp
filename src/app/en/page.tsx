import dynamic from "next/dynamic";
import HeroEN from "@/components/en/HeroEN";
import SobreNosotrosSectionEN from "@/components/en/SobreNosotrosSectionEN";
import AnimateIn from "@/components/AnimateIn";
import HomeIntro from "@/components/HomeIntro";
import Footer from "@/components/Footer";
import LazyUXScoreSection from "@/components/LazyUXScoreSection";

const CasosSectionEN = dynamic(() => import("@/components/en/CasosSectionEN"));
const ConceptosSectionEN = dynamic(() => import("@/components/en/ConceptosSectionEN"));
const ProcesoSectionEN = dynamic(() => import("@/components/en/ProcesoSectionEN"));
const DiferenciacionSectionEN = dynamic(() => import("@/components/en/DiferenciacionSectionEN"));
const ServiciosSectionEN = dynamic(() => import("@/components/en/ServiciosSectionEN"));
const FAQSectionEN = dynamic(() => import("@/components/en/FAQSectionEN"));
const ContactoSectionEN = dynamic(() => import("@/components/en/ContactoSectionEN"));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project is different, so the cost depends on what the business actually needs. Before pricing anything, we prefer to understand the goal, the scope, and what solution makes sense. We work with defined budgets and no surprise costs midway through the project.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge by the hour or by project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with fixed project budgets and a defined scope. We want clients to feel certain about what they'll pay, so we make everything as clear as possible from the start.",
      },
    },
    {
      "@type": "Question",
      name: "How do you know what kind of website I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before talking about design or development, we try to understand the business, the industry, and what the website needs to achieve. We'd rather recommend what actually makes sense than sell unnecessary complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to know about technology to work with you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. We explain everything in plain language and guide you through the whole process. The goal is to help you make clear, confident decisions — not overwhelm you with technical jargon.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually just an initial conversation to understand the project, the business, and what you're looking for. From there, we organize goals, ideas, references, and define the clearest path forward.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the type of project and its scope. We always work with realistic timelines and maintain clear communication throughout. Simple websites can come together quickly; larger projects require more stages and planning.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't like the design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process is designed for collaboration — we validate decisions together before moving too far forward. We share progress and adjust details during development so the result truly represents the business.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request changes during the project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many projects evolve as they're built, so we keep the process flexible. Depending on the change, we evaluate together the best way to implement it.",
      },
    },
    {
      "@type": "Question",
      name: "Is the website built from scratch or do you use templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what the project needs. What matters to us is that the solution is useful, clear, and coherent with the business — whether that's a custom build or a more standard approach.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between a landing page and a full website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A landing page is designed to communicate something specific or convert around a single goal. A full website has more sections and structure to represent a business more comprehensively. The best option depends on what each case needs to communicate.",
      },
    },
    {
      "@type": "Question",
      name: "Should I go simple or more complex?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best solution isn't always the biggest one. A simple, well-thought-out project often performs far better than something loaded with unnecessary features. We try to find the right balance for each business.",
      },
    },
    {
      "@type": "Question",
      name: "Does my business really need a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not every business needs exactly the same thing. In many cases a website helps build trust, showcase services, and attract clients. In others, a simpler solution is enough. That's why we prefer to understand each situation first before recommending anything.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the website goes live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We don't disappear after delivering a project. We keep supporting, helping, and answering questions so clients feel comfortable using their website and growing it over time.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer support or maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can provide maintenance, improvements, updates, or support based on what each project needs after it's launched.",
      },
    },
    {
      "@type": "Question",
      name: "Will I be dependent on you to manage my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's the opposite of what we aim for. We want every client to understand how their project works and have full clarity over what they're using. We believe in transparency and avoiding unnecessary dependency.",
      },
    },
  ],
};

export default function EnHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeIntro />
      <main>
      <HeroEN />
      <SobreNosotrosSectionEN />
      <AnimateIn><LazyUXScoreSection locale="en" /></AnimateIn>
      <AnimateIn><CasosSectionEN /></AnimateIn>
      <AnimateIn><ConceptosSectionEN /></AnimateIn>
      <ProcesoSectionEN />
      <DiferenciacionSectionEN />
      <ServiciosSectionEN />
      <AnimateIn><FAQSectionEN /></AnimateIn>
      <AnimateIn><ContactoSectionEN /></AnimateIn>
    </main>
    <Footer locale="en" />
    </>
  );
}

