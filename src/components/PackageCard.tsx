"use client";

import Link from "next/link";
import Image from "next/image";

type PackageCardProps = {
  work: {
    slug: string;
    title: string;
    thumbnail: string;
    tags: string[];
  };
};

const DEPTH = 40; // px - box depth

export default function PackageCard({ work }: PackageCardProps) {
  return (
    <Link href={`/works/${work.slug}`} className="block flex-shrink-0">
      <div
        className="group w-52 sm:w-56 transition-transform duration-500 hover:-translate-y-2"
        style={{ perspective: "600px" }}
      >
        <div
          className="relative"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(12deg)",
          }}
        >
          {/* Front face */}
          <div
            className="stamp-border bg-bg-card relative"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(${DEPTH / 2}px)`,
            }}
          >
            {/* Product image area */}
            <div className="relative h-36 w-full bg-gradient-to-br from-bg-main to-metallic/20 overflow-hidden">
              {/* Corner marks */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-metallic-dark/40 z-10" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-metallic-dark/40 z-10" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-metallic-dark/40 z-10" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-metallic-dark/40 z-10" />

              {work.thumbnail ? (
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl text-metallic/40 font-black">遊</span>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-metallic" />

            {/* Info */}
            <div className="p-3">
              <h3 className="text-xs font-bold text-text-heading leading-snug line-clamp-2 mb-2">
                {work.title}
              </h3>
              <div className="flex flex-wrap gap-1">
                {work.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono tracking-wider text-accent bg-accent/10 px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side face */}
          <div
            className="absolute top-0 right-0 h-full bg-metallic/60 border-y border-r border-metallic-dark/30"
            style={{
              width: `${DEPTH}px`,
              transform: `translateX(${DEPTH / 2}px) rotateY(90deg)`,
              transformOrigin: "left center",
            }}
          >
            <div className="h-full w-full bg-gradient-to-l from-black/15 to-transparent" />
          </div>

          {/* Top face */}
          <div
            className="absolute top-0 left-0 w-full bg-metallic/40 border-x border-t border-metallic-dark/20"
            style={{
              height: `${DEPTH}px`,
              transform: `translateY(-${DEPTH / 2}px) rotateX(90deg)`,
              transformOrigin: "center bottom",
            }}
          >
            <div className="h-full w-full bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </Link>
  );
}
