import HeroSection from "./components/Sections/HeroSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import ServiceSection from "./components/Sections/ServiceSection";
import TrustValueSection from "./components/Sections/TrustValueSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustValueSection />
      <ProjectsSection />
      <ServiceSection />
    </>
  );
}
