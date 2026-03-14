"use client";

import Link from "next/link";

type PackageCardProps = {
  work: {
    slug: string;
    title: string;
    thumbnail: string;
    tags: string[];
  };
};

export default function PackageCard({ work }: PackageCardProps) {
  return (
    <Link href={`/works/${work.slug}`} className="block flex-shrink-0">
      <div className="group w-56 h-72 border-2 border-dashed border-text-sub bg-bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg">
        {/* サムネイル画像エリア / プレースホルダー */}
        <div className="relative h-40 w-full overflow-hidden border-b-2 border-dashed border-text-sub bg-text-sub/10 flex items-center justify-center">
          <span className="text-5xl font-bold text-accent/40">遊</span>
        </div>

        {/* 下部: タイトルとタグ */}
        <div className="flex flex-col gap-2 p-3">
          <h3 className="text-sm font-bold text-text-heading line-clamp-2">
            {work.title}
          </h3>
          <div className="flex flex-wrap gap-1">
            {work.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-sm bg-accent/15 px-1.5 py-0.5 text-xs font-medium text-accent"
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
