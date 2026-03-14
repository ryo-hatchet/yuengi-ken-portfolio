import HeroSection from "@/components/sections/HeroSection";
import BeltConveyor from "@/components/BeltConveyor";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import PrototypesSection from "@/components/sections/PrototypesSection";
import ResearchSection from "@/components/sections/ResearchSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BeltConveyor />
      <AboutSection />
      <WorksSection />
      <PrototypesSection />
      <ResearchSection />
    </main>
  );
}
