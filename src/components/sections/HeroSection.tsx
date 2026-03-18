export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-8.75rem)] bg-bg-main overflow-hidden">
      {/* Dot grid background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Top info bar */}
      <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-3 border-b-2 border-text-heading">
        <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-text-heading uppercase">
          2024–2026 YUENGI-KEN.
        </span>
        <span className="text-[10px] sm:text-xs font-mono tracking-[0.15em] text-text-heading uppercase">
          KEEP VIEW ▸▸
        </span>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 px-6 sm:px-10 pt-6 sm:pt-10">
        {/* Giant typography block */}
        <div className="flex flex-col leading-[0.85]">
          <div className="flex items-baseline gap-3">
            <span className="text-[15vw] sm:text-[13vw] md:text-[11vw] font-black text-text-heading tracking-[-0.04em] leading-[0.85]">
              遊宴
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-[15vw] sm:text-[13vw] md:text-[11vw] font-black text-text-heading tracking-[-0.04em] leading-[0.85]">
              技
            </span>
            <span className="text-[15vw] sm:text-[13vw] md:text-[11vw] font-black text-accent tracking-[-0.04em] leading-[0.85]">
              研
            </span>
          </div>
        </div>

        {/* Subtitle row with category labels */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-text-heading">
            INTERACTIVE INSTALLATION
          </span>
          <span className="text-accent font-bold text-sm">/</span>
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-text-heading font-bold">
            EXPERIENCE DESIGN
          </span>
          <span className="text-accent font-bold text-sm">/</span>
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-text-heading">
            TECH INVENTION
          </span>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-text-heading font-bold">
            PARTY ENGINEERING
          </span>
          <span className="text-accent font-bold text-sm">/</span>
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-text-heading">
            PROTOTYPING
          </span>
        </div>

        {/* Middle section - info blocks grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-12 gap-4 sm:gap-6">
          {/* Left info block */}
          <div className="col-span-12 sm:col-span-4 md:col-span-3">
            <div className="border-t-2 border-text-heading pt-3">
              <p className="text-[10px] font-mono tracking-wider text-text-sub uppercase mb-2">
                テクノロジーで遊びと賑わいを開発する活動体
              </p>
              <p className="text-xs leading-relaxed text-text-main">
                人が集まるところに遊びを発明する。
                体験型インスタレーション、テクノロジー遊具の発明、
                宴の場の体験設計。
              </p>
            </div>
          </div>

          {/* Center info block */}
          <div className="col-span-12 sm:col-span-4 md:col-span-3">
            <div className="border-t-2 border-accent pt-3">
              <p className="text-[10px] font-mono tracking-wider text-accent uppercase mb-2">
                LATEST PROJECTS
              </p>
              <div className="flex flex-col gap-1.5">
                <a href="/works/expo-nomo-zone4" className="text-xs font-mono text-text-heading hover:text-accent transition-colors">
                  → 万博「ノモの国」ZONE4
                </a>
                <a href="/works/recycle-music-box" className="text-xs font-mono text-text-heading hover:text-accent transition-colors">
                  → Recycle Music Box
                </a>
                <a href="/works/bottloop-factory" className="text-xs font-mono text-text-heading hover:text-accent transition-colors">
                  → ボトループファクトリー
                </a>
              </div>
            </div>
          </div>

          {/* Right side - character placeholder */}
          <div className="hidden md:flex col-span-6 items-end justify-end">
            <div className="relative w-64 h-80 border-2 border-dashed border-text-sub/30 rounded-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-3 opacity-20">🧑‍🔧</div>
                <span className="text-[10px] font-mono tracking-wider text-text-sub/50 uppercase">
                  Character<br />Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-text-heading text-white">
        <div className="flex items-center justify-between px-6 sm:px-10 h-10 sm:h-12">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase">
            YUENGI-KEN PORTFOLIO.2026
          </span>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
            </div>
            <span className="hidden sm:inline text-[10px] font-mono tracking-wider text-white/60">
              SCROLL ▾
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-wider text-white/60">
            est. 2024
          </span>
        </div>
      </div>
    </section>
  );
}
