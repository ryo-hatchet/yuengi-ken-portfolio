import SectionHeader from "@/components/SectionHeader";
import PrototypeCard from "@/components/PrototypeCard";
import { getPrototypes } from "@/lib/data";

export default function PrototypesSection() {
  const prototypes = getPrototypes();

  return (
    <section id="prototypes" className="bg-bg-card py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Prototypes" subtitle="実験と試作" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prototypes.map((prototype) => (
            <PrototypeCard key={prototype.slug} prototype={prototype} />
          ))}
        </div>
      </div>
    </section>
  );
}
