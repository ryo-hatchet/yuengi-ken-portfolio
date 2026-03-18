import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorksSection from "@/components/sections/WorksSection";
import InventionsSection from "@/components/sections/InventionsSection";
import ResearchSection from "@/components/sections/ResearchSection";
import { getWorks, getInventions } from "@/lib/data";

export default function Home() {
  const works = getWorks();
  const inventions = getInventions();

  // Collect items that have actual thumbnail images (not placeholder)
  const showcaseItems = [
    ...works
      .filter((w) => w.thumbnail && !w.thumbnail.includes("placeholder"))
      .map((w) => ({ title: w.title, thumbnail: w.thumbnail, href: `/works/${w.slug}` })),
    ...inventions
      .filter((i) => i.thumbnail && !i.thumbnail.includes("placeholder"))
      .map((i) => ({ title: i.title, thumbnail: i.thumbnail, href: `/inventions/${i.slug}` })),
  ];

  return (
    <main>
      <HeroSection showcaseItems={showcaseItems} />
      <AboutSection />
      <WorksSection />
      <InventionsSection />
      <ResearchSection />
    </main>
  );
}
