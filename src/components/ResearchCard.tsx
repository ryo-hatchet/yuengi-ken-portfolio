import Link from "next/link";
import type { ResearchArticle } from "@/types";

type ResearchCardProps = {
  article: ResearchArticle;
};

export default function ResearchCard({ article }: ResearchCardProps) {
  return (
    <Link href={`/research/${article.slug}`} className="group block">
      <article className="border border-metallic/30 hover:border-accent/30 p-6 transition-all duration-500 hover:shadow-xl bg-bg-card h-full flex flex-col">
        <time className="text-[10px] font-mono tracking-wider text-text-sub">
          {article.date}
        </time>
        <h3 className="font-bold text-text-heading group-hover:text-accent transition-colors duration-300 mt-3 mb-3 text-[15px] leading-snug flex-1">
          {article.title}
        </h3>
        <p className="text-sm text-text-sub line-clamp-3 leading-relaxed mb-4">
          {article.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono tracking-wider text-text-sub"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
