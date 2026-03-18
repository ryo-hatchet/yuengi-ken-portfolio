"use client";

import { useEffect, useRef } from "react";

function LedTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let x = container.offsetWidth;
    let animId: number;

    const animate = () => {
      x -= 1.2;
      if (x < -content.offsetWidth) {
        x = container.offsetWidth;
      }
      content.style.transform = `translateX(${x}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const messages = [
    "★ 人が集まるところに、遊びを発明する。",
    "★ INTERACTIVE INSTALLATION",
    "★ EXPERIENCE DESIGN",
    "★ TECH INVENTION",
    "★ PARTY ENGINEERING",
    "★ EXPO 2025 — ノモの国 ZONE4",
    "★ Recycle Music Box",
    "★ ボトループファクトリー",
    "★ テクノロジーで遊びと賑わいを開発する活動体",
  ];

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden flex items-center"
    >
      <div
        ref={contentRef}
        className="whitespace-nowrap will-change-transform font-dot"
      >
        <span className="text-base sm:text-lg md:text-xl tracking-[0.2em] text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]">
          {messages.join("　　　")}
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full bg-bg-main overflow-hidden">
      {/* === GRID LAYOUT === */}
      <div className="w-full border-b-2 border-text-heading">
        {/* Row 1: Logo + Nav cells */}
        <div className="grid grid-cols-12 border-b border-text-heading/20 bg-text-heading">
          <div className="col-span-4 sm:col-span-3 border-r border-white/10 px-4 py-3 flex items-center gap-3">
            <a href="/" className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                遊宴技研
              </span>
              <span className="hidden sm:inline text-[9px] font-mono tracking-[0.15em] text-white/40 uppercase">
                YUENGI-KEN
              </span>
            </a>
          </div>
          <a href="/works" className="col-span-1 sm:col-span-1 border-r border-white/10 px-2 sm:px-3 py-3 flex items-center hover:bg-white/5 transition-colors">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-white/60 hover:text-white uppercase">
              Works
            </span>
          </a>
          <a href="/inventions" className="col-span-2 sm:col-span-2 border-r border-white/10 px-2 sm:px-3 py-3 flex items-center hover:bg-white/5 transition-colors">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-white/60 hover:text-white uppercase">
              Inventions
            </span>
          </a>
          <a href="/research" className="col-span-2 sm:col-span-2 border-r border-white/10 px-2 sm:px-3 py-3 flex items-center hover:bg-white/5 transition-colors">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-white/60 hover:text-white uppercase">
              Research
            </span>
          </a>
          <a href="/about" className="col-span-1 sm:col-span-1 border-r border-white/10 px-2 sm:px-3 py-3 flex items-center hover:bg-white/5 transition-colors">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-white/60 hover:text-white uppercase">
              About
            </span>
          </a>
          <div className="col-span-2 sm:col-span-3 px-3 py-3 flex items-center justify-end gap-3">
            <span className="hidden sm:inline text-[9px] font-mono tracking-wider text-white/30">
              est. 2024
            </span>
            <div className="w-2.5 h-2.5 bg-accent rounded-full" />
          </div>
        </div>

        {/* Row 2: Main giant text area */}
        <div className="grid grid-cols-12">
          {/* Left: tag block */}
          <div className="col-span-3 sm:col-span-2 border-r border-text-heading/20 flex flex-col justify-between p-3 sm:p-4">
            <div className="border border-text-heading px-2 py-1.5 inline-block self-start">
              <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-text-heading uppercase leading-tight block">
                CREATIVE<br />TECHNOLOGY<br />STUDIO
              </span>
            </div>
            <div className="mt-4">
              <span className="text-[9px] font-mono tracking-wider text-text-sub">
                2024→NOW
              </span>
            </div>
          </div>

          {/* Center: GIANT 遊宴技研 */}
          <div className="col-span-9 sm:col-span-10 relative">
            <div className="px-3 sm:px-6 py-4 sm:py-6">
              <div className="flex flex-wrap items-baseline leading-[0.9]">
                <span className="text-[22vw] sm:text-[18vw] md:text-[16vw] font-black text-text-heading tracking-[-0.05em] leading-[0.88]">
                  遊宴
                </span>
              </div>
              <div className="flex items-baseline leading-[0.9] -mt-2 sm:-mt-4">
                <span className="text-[22vw] sm:text-[18vw] md:text-[16vw] font-black text-text-heading tracking-[-0.05em] leading-[0.88]">
                  技研
                </span>
                {/* Arrow accent */}
                <span className="text-accent text-3xl sm:text-5xl md:text-6xl font-black ml-2 sm:ml-4 self-start mt-2">
                  ←
                </span>
              </div>
            </div>

            {/* Overlapping accent label */}
            <div className="absolute top-3 right-3 sm:top-5 sm:right-6">
              <div className="bg-text-heading text-white px-3 py-2 sm:px-4 sm:py-3">
                <span className="text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase block">
                  SELECTED
                </span>
                <span className="text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase block">
                  WORKS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: LED Ticker strip - 電光掲示板 */}
        <div className="border-t border-b-2 border-text-heading bg-[#0a0a0a] h-10 sm:h-12 relative overflow-hidden">
          {/* Scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10 z-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
            }}
          />
          {/* Dot matrix background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fbbf24 0.5px, transparent 0.5px)",
              backgroundSize: "6px 6px",
            }}
          />
          <LedTicker />
        </div>

        {/* Row 4: Bottom grid blocks */}
        <div className="grid grid-cols-12">
          {/* Year block */}
          <div className="col-span-4 sm:col-span-2 border-r border-text-heading/20 p-3 sm:p-4 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-text-heading tracking-[-0.03em]">
              2026
            </span>
          </div>

          {/* Category labels */}
          <div className="col-span-8 sm:col-span-5 border-r border-text-heading/20 p-3 sm:p-4 flex flex-col justify-center gap-1">
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-text-heading font-bold uppercase">
                Installation
              </span>
              <span className="text-accent font-bold">/</span>
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-text-heading uppercase">
                Experience Design
              </span>
              <span className="text-accent font-bold">/</span>
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-text-heading font-bold uppercase">
                Invention
              </span>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-text-heading uppercase">
                Party Engineering
              </span>
              <span className="text-accent font-bold">/</span>
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-text-heading uppercase">
                Prototyping
              </span>
            </div>
          </div>

          {/* Japanese tagline */}
          <div className="hidden sm:flex col-span-3 border-r border-text-heading/20 p-3 sm:p-4 items-center justify-center">
            <div className="border-2 border-text-heading rounded-full px-4 py-2">
              <span className="text-sm sm:text-base font-bold text-text-heading">
                作品集
              </span>
            </div>
          </div>

          {/* Version info */}
          <div className="hidden sm:flex col-span-2 p-3 sm:p-4 flex-col items-end justify-center">
            <span className="text-[9px] font-mono tracking-wider text-text-sub uppercase">
              VER
            </span>
            <span className="text-[9px] font-mono tracking-wider text-text-sub uppercase">
              2024–2026
            </span>
          </div>
        </div>

        {/* Row 5: Bottom black bar */}
        <div className="bg-text-heading text-white border-t border-text-heading">
          <div className="flex items-center justify-between px-4 sm:px-6 h-9 sm:h-10">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.15em] uppercase">
              YUENGI-KEN PORTFOLIO
            </span>
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>
              <span className="text-[9px] font-mono tracking-wider text-white/50">
                SCROLL ▾
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
