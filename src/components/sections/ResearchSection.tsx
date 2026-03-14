import SectionHeader from "@/components/SectionHeader";
import ResearchCard from "@/components/ResearchCard";
import { getResearchArticles } from "@/lib/data";

export default function ResearchSection() {
  const articles = getResearchArticles()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="research" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Research" subtitle="研究と発信" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ResearchCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
