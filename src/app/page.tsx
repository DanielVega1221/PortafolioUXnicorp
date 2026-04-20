import Hero from "@/components/Hero";
import SobreNosotrosSection from "@/components/SobreNosotrosSection";
import UXScoreSection from "@/components/UXScoreSection";
import CasosSection from "@/components/CasosSection";
import ConceptosSection from "@/components/ConceptosSection";
import ProcesoSection from "@/components/ProcesoSection";
import DiferenciacionSection from "@/components/DiferenciacionSection";
import ServiciosSection from "@/components/ServiciosSection";
import ContactoSection from "@/components/ContactoSection";
import AnimateIn from "@/components/AnimateIn";
import HomeIntro from "@/components/HomeIntro";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <main>
      <Hero />
      <SobreNosotrosSection />
      <AnimateIn><UXScoreSection /></AnimateIn>
      <AnimateIn><CasosSection /></AnimateIn>
      <AnimateIn><ConceptosSection /></AnimateIn>
      <ProcesoSection />
      <DiferenciacionSection />
      <ServiciosSection />
      <AnimateIn><ContactoSection /></AnimateIn>
    </main>
    <Footer locale="es" />
    </>
  );
}
