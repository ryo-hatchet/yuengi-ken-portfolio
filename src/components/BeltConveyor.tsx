import { getWorks } from "@/lib/data";
import PackageCard from "./PackageCard";

export default function BeltConveyor() {
  const works = getWorks();

  const cards = works.map((work) => (
    <PackageCard
      key={work.slug}
      work={{
        slug: work.slug,
        title: work.title,
        thumbnail: work.thumbnail,
        tags: work.tags,
      }}
    />
  ));

  return (
    <section className="w-full bg-text-sub/10">
      {/* 上レール */}
      <div className="h-2 w-full bg-text-sub" />

      {/* コンベアエリア */}
      <div className="overflow-hidden py-6">
        <div className="group flex w-max gap-4 sm:gap-8 animate-scroll hover:[animation-play-state:paused]">
          {/* カードセットを2回繰り返してシームレスループ */}
          {cards}
          {cards}
        </div>
      </div>

      {/* 下レール */}
      <div className="h-2 w-full bg-text-sub" />

      {/* ローラー */}
      <div className="flex justify-around px-8 py-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="h-6 w-6 rounded-full bg-text-sub/50"
          />
        ))}
      </div>
    </section>
  );
}
