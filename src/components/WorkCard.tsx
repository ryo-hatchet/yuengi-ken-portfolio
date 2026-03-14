import Link from "next/link";
import type { Work } from "@/types";

type WorkCardProps = {
  work: Work;
};

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Link href={`/works/${work.slug}`} className="group block">
      <div className="bg-bg-card rounded-lg overflow-hidden border border-bg-main hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        {/* サムネプレースホルダー */}
        <div className="aspect-video bg-text-sub/10 flex items-center justify-center">
          <span className="text-4xl text-text-sub/30 font-bold">遊</span>
        </div>

        <div className="p-5">
          <h3 className="font-bold text-text-heading group-hover:text-accent transition-colors mb-2">
            {work.title}
          </h3>
          <p className="text-sm text-text-sub line-clamp-2 mb-3">
            {work.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-bg-main text-text-sub px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
