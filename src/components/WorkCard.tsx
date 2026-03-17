import Link from "next/link";
import Image from "next/image";
import type { Work } from "@/types";

type WorkCardProps = {
  work: Work;
};

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Link href={`/works/${work.slug}`} className="group block">
      <article className="bg-bg-card overflow-hidden border border-metallic/30 hover:border-accent/30 transition-all duration-500 hover:shadow-xl">
        {/* Thumbnail */}
        <div className="aspect-[4/3] bg-gradient-to-br from-bg-main to-metallic/20 relative overflow-hidden">
          {work.thumbnail ? (
            <Image
              src={work.thumbnail}
              alt={work.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-[1px] bg-metallic-dark/30" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-text-sub/60 uppercase">
                Image Incoming
              </span>
              <div className="w-8 h-[1px] bg-metallic-dark/30" />
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {work.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono tracking-wider text-text-sub"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-text-heading group-hover:text-accent transition-colors duration-300 text-[15px] leading-snug">
              {work.title}
            </h3>
            <span className="text-[11px] font-mono text-text-sub flex-shrink-0 ml-2">
              {work.year}
            </span>
          </div>
          {work.tagline && (
            <p className="text-[13px] italic text-accent/80 mb-2 leading-snug">
              {work.tagline}
            </p>
          )}
          <p className="text-sm text-text-sub line-clamp-2 leading-relaxed">
            {work.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
