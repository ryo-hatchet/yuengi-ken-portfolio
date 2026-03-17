"use client";

import dynamic from "next/dynamic";

const BeltConveyor3D = dynamic(() => import("./BeltConveyor3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-[1px] bg-metallic-dark/30" />
        <span className="text-[10px] font-mono tracking-[0.3em] text-text-sub/60 uppercase animate-pulse">
          Loading Conveyor
        </span>
        <div className="w-12 h-[1px] bg-metallic-dark/30" />
      </div>
    </div>
  ),
});

type WorkData = {
  slug: string;
  title: string;
  thumbnail: string;
  tags: string[];
};

type BeltConveyorProps = {
  works: WorkData[];
  embedded?: boolean;
};

export default function BeltConveyor({ works, embedded }: BeltConveyorProps) {
  const content = (
    <>
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 mb-2">
        <span className="font-mono text-[10px] tracking-[0.3em] text-text-sub uppercase">
          Production Line — Latest Works
        </span>
      </div>

      <BeltConveyor3D works={works} />

      {/* Bottom label */}
      <div className="max-w-7xl mx-auto px-6 mt-2 flex justify-between items-center">
        <span className="font-mono text-[10px] tracking-widest text-text-sub/60">
          ← hover to slow · click to open
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
    <section className="w-full bg-bg-dark py-8 overflow-hidden">
      {content}
    </section>
  );
}
