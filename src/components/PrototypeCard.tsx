import Link from "next/link";
import type { Prototype } from "@/types";

type PrototypeCardProps = {
  prototype: Prototype;
};

const statusStyles: Record<Prototype["status"], string> = {
  "進行中": "bg-accent text-white",
  "完了": "bg-green-600 text-white",
  "構想": "bg-text-sub text-white",
};

export default function PrototypeCard({ prototype }: PrototypeCardProps) {
  return (
    <Link href={`/prototypes/${prototype.slug}`} className="group block">
      <div className="bg-bg-card rounded-lg overflow-hidden border border-bg-main hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        {/* サムネプレースホルダー */}
        <div className="aspect-video bg-text-sub/10 flex items-center justify-center relative">
          <span className="text-4xl text-text-sub/30 font-bold">遊</span>
          <span
            className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded ${statusStyles[prototype.status]}`}
          >
            {prototype.status}
          </span>
        </div>

        <div className="p-5">
          <h3 className="font-bold text-text-heading group-hover:text-accent transition-colors mb-2">
            {prototype.title}
          </h3>
          <p className="text-sm text-text-sub line-clamp-2 mb-3">
            {prototype.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {prototype.tags.map((tag) => (
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
