import BeltConveyor from "@/components/BeltConveyor";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-8.75rem)] w-full overflow-hidden bg-bg-main flex flex-col">
      {/* Background giant text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black text-text-heading/[0.06] leading-none tracking-tighter whitespace-nowrap">
          遊宴技研
        </h1>
      </div>

      {/* Belt conveyor - layered on top of background text */}
      <div className="relative z-10 flex-1 flex items-center">
        <BeltConveyor embedded />
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest text-text-sub uppercase">
            scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-text-sub to-transparent" />
        </div>
      </div>
    </section>
  );
}
