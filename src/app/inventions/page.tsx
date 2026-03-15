import SectionHeader from "@/components/SectionHeader";
import InventionCard from "@/components/InventionCard";
import { getInventions } from "@/lib/data";

export default function InventionsPage() {
  const inventions = getInventions().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="py-24 sm:py-32 min-h-screen">
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
