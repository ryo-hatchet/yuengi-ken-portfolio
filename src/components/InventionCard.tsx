import Link from "next/link";
import Image from "next/image";
import type { Invention } from "@/types";

type InventionCardProps = {
  invention: Invention;
};

const statusStyles: Record<Invention["status"], string> = {
  "進行中": "bg-accent text-white",
  "完了": "bg-green-600 text-white",
  "構想": "bg-metallic-dark text-white",
};

export default function InventionCard({ invention }: InventionCardProps) {
  return (
    <Link href={`/inventions/${invention.slug}`} className="group block">
      <article className="bg-bg-card overflow-hidden border border-metallic/30 hover:border-accent/30 transition-all duration-500 hover:shadow-xl">
        {/* Thumbnail */}
        <div className="aspect-[4/3] bg-gradient-to-br from-bg-main to-metallic/20 relative overflow-hidden">
          {invention.thumbnail ? (
            <Image
              src={invention.thumbnail}
              alt={invention.title}
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
          <span
            className={`absolute top-3 right-3 text-[10px] font-mono tracking-wider font-bold px-2 py-1 ${statusStyles[invention.status]}`}
          >
            {invention.status}
          </span>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {invention.tags.slice(0, 3).map((tag) => (
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
              {invention.title}
            </h3>
            <span className="text-[11px] font-mono text-text-sub flex-shrink-0 ml-2">
              {invention.year}
            </span>
          </div>
          <p className="text-sm text-text-sub line-clamp-2 leading-relaxed">
            {invention.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
