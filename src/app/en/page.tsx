import HeroEN from "@/components/en/HeroEN";
import SobreNosotrosSectionEN from "@/components/en/SobreNosotrosSectionEN";
import UXScoreSection from "@/components/UXScoreSection";
import CasosSectionEN from "@/components/en/CasosSectionEN";
import ConceptosSectionEN from "@/components/en/ConceptosSectionEN";
import ProcesoSectionEN from "@/components/en/ProcesoSectionEN";
import DiferenciacionSectionEN from "@/components/en/DiferenciacionSectionEN";
import ServiciosSectionEN from "@/components/en/ServiciosSectionEN";
import ContactoSectionEN from "@/components/en/ContactoSectionEN";
import AnimateIn from "@/components/AnimateIn";
import HomeIntro from "@/components/HomeIntro";
import Footer from "@/components/Footer";

export default function EnHomePage() {
  return (
    <>
      <HomeIntro />
      <main>
      <HeroEN />
      <SobreNosotrosSectionEN />
      <AnimateIn><UXScoreSection locale="en" /></AnimateIn>
      <AnimateIn><CasosSectionEN /></AnimateIn>
      <AnimateIn><ConceptosSectionEN /></AnimateIn>
      <ProcesoSectionEN />
      <DiferenciacionSectionEN />
      <ServiciosSectionEN />
      <AnimateIn><ContactoSectionEN /></AnimateIn>
    </main>
    <Footer locale="en" />
    </>
  );
}

