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
        <span
          className="text-lg sm:text-xl md:text-2xl tracking-[0.2em] text-amber-400"
          style={{
            WebkitTextStroke: "0.5px rgba(251,191,36,0.9)",
            textShadow: "0 0 8px rgba(251,191,36,0.7), 0 0 20px rgba(251,191,36,0.3), 0 0 40px rgba(251,191,36,0.15)",
          }}
        >
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
        {/* Row 1: Main giant text area */}
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
            <div className="px-4 sm:px-8 py-6 sm:py-10">
              <div className="flex flex-wrap items-baseline leading-[1]">
                <span className="text-[20vw] sm:text-[17vw] md:text-[15vw] font-black text-text-heading tracking-[0.08em] leading-[1]">
                  遊宴
                </span>
              </div>
              <div className="flex items-baseline leading-[1] mt-1 sm:mt-2">
                <span className="text-[20vw] sm:text-[17vw] md:text-[15vw] font-black text-text-heading tracking-[0.08em] leading-[1]">
                  技研
                </span>
                {/* Arrow accent */}
                <span className="text-accent text-3xl sm:text-5xl md:text-6xl font-black ml-3 sm:ml-6 self-start mt-2">
                  ←
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: LED Ticker strip - 電光掲示板 */}
        <div className="border-t border-b-2 border-text-heading bg-[#050505] h-12 sm:h-14 relative overflow-hidden">
          {/* Scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15 z-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.5) 1px, rgba(0,0,0,0.5) 3px)",
            }}
          />
          {/* Dot matrix background - more visible */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fbbf24 0.8px, transparent 0.8px)",
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
