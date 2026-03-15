import SectionHeader from "@/components/SectionHeader";
import InventionCard from "@/components/InventionCard";
import { getInventions } from "@/lib/data";

export default function InventionsSection() {
  const inventions = getInventions();

  return (
    <section id="inventions" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Inventions" subtitle="発明品" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventions.map((invention) => (
            <InventionCard key={invention.slug} invention={invention} />
          ))}
        </div>
      </div>
    </section>
  );
}
