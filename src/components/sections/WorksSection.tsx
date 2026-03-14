import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import WorkCard from "@/components/WorkCard";
import { getFeaturedWorks } from "@/lib/data";

export default function WorksSection() {
  const works = getFeaturedWorks();

  return (
    <section id="works" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Works" subtitle="制作実績" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>

        <div className="text-right">
          <Link
            href="/works"
            className="text-accent hover:underline font-medium inline-block transition-transform duration-200 hover:translate-x-1"
          >
            すべてのWorksを見る &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
