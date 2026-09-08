import HeroSection from "./components/Sections/HeroSection";
import PricingSection from "./components/Sections/PricingSection";
import ProcessSection from "./components/Sections/ProcessSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import ServiceSection from "./components/Sections/ServiceSection";
import TrustValueSection from "./components/Sections/TrustValueSection";
import WhyWorkWithMeSection from "./components/Sections/WhyWorkWithMeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustValueSection />
      <ProjectsSection />
      <ServiceSection />
      <ProcessSection />
      <PricingSection />
      <WhyWorkWithMeSection />
    </>
  );
}
