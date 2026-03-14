import Link from "next/link";
import type { ResearchArticle } from "@/types";

type ResearchCardProps = {
  article: ResearchArticle;
};

export default function ResearchCard({ article }: ResearchCardProps) {
  return (
    <Link href={`/research/${article.slug}`} className="group block">
      <div className="bg-bg-card rounded-lg p-6 border border-bg-main hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-full">
        <time className="text-xs text-text-sub">{article.date}</time>
        <h3 className="font-bold text-text-heading group-hover:text-accent transition-colors mt-2 mb-3">
          {article.title}
        </h3>
        <p className="text-sm text-text-sub line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-bg-main text-text-sub px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
