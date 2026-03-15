import SectionHeader from "@/components/SectionHeader";
import ResearchCard from "@/components/ResearchCard";
import { getResearchArticles } from "@/lib/data";

export default function ResearchPage() {
  const articles = getResearchArticles().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="py-24 sm:py-32 bg-bg-card min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Research" subtitle="研究と発信" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ResearchCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
