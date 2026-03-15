import SectionHeader from "@/components/SectionHeader";
import WorkCard from "@/components/WorkCard";
import { getWorks } from "@/lib/data";

export default function WorksPage() {
  const works = getWorks().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="py-24 sm:py-32 bg-bg-card min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Works" subtitle="制作実績" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
