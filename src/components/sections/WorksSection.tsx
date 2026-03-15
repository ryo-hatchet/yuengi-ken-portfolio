import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import WorkCard from "@/components/WorkCard";
import { getFeaturedWorks } from "@/lib/data";

export default function WorksSection() {
  const works = getFeaturedWorks();

  return (
    <section id="works" className="py-24 sm:py-32 bg-bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Works" subtitle="制作実績" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>

        <div className="text-right">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm font-mono tracking-wider text-accent hover:gap-4 transition-all duration-300"
          >
            すべてのWorksを見る
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
