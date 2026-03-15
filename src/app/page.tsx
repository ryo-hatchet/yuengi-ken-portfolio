import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import InventionsSection from "@/components/sections/InventionsSection";
import ResearchSection from "@/components/sections/ResearchSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <InventionsSection />
      <ResearchSection />
    </main>
  );
}
