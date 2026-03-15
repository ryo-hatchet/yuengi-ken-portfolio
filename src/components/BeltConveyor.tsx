import { getWorks } from "@/lib/data";
import PackageCard from "./PackageCard";

type BeltConveyorProps = {
  embedded?: boolean;
};

export default function BeltConveyor({ embedded }: BeltConveyorProps) {
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

  const content = (
    <>
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <span className="font-mono text-[10px] tracking-[0.3em] text-text-sub uppercase">
          Production Line — Latest Works
        </span>
      </div>

      {/* 3D Perspective container */}
      <div className="conveyor-perspective px-4 sm:px-8 md:px-16">
        <div className="conveyor-3d">
          {/* Upper rail */}
          <div className="rail-metallic h-3 w-full rounded-sm" />

          {/* Belt surface */}
          <div className="conveyor-surface bg-metallic/30 overflow-hidden py-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5" />

            <div className="group flex w-max gap-6 sm:gap-10 animate-scroll hover:[animation-play-state:paused] relative z-10">
              {cards}
              {cards}
            </div>
          </div>

          {/* Lower rail */}
          <div className="rail-metallic h-3 w-full rounded-sm" />

          {/* Rollers */}
          <div className="flex justify-around px-4 py-1.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-metallic-dark border border-metallic/50 shadow-inner" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex justify-between items-center">
        <span className="font-mono text-[10px] tracking-widest text-text-sub/60">
          ← hover to pause
        </span>
        <span className="font-mono text-[10px] tracking-widest text-accent/60">
          ● LIVE
        </span>
      </div>
    </>
  );

  if (embedded) {
    return <div className="w-full overflow-hidden">{content}</div>;
  }

  return (
    <section className="w-full bg-bg-dark py-12 overflow-hidden">
      {content}
    </section>
  );
}
