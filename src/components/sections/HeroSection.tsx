"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// --- LED Ticker ---
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
            textShadow:
              "0 0 8px rgba(251,191,36,0.7), 0 0 20px rgba(251,191,36,0.3), 0 0 40px rgba(251,191,36,0.15)",
          }}
        >
          {messages.join("　　　")}
        </span>
      </div>
    </div>
  );
}

// --- Showcase Image Slideshow ---
interface ShowcaseItem {
  title: string;
  thumbnail: string;
  href: string;
}

function ShowcaseSlideshow({ items }: { items: ShowcaseItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Shuffle on mount
  const [shuffled, setShuffled] = useState<ShowcaseItem[]>([]);
  useEffect(() => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    setShuffled(copy);
  }, [items]);

  const advance = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffled.length);
      setIsTransitioning(false);
    }, 400);
  }, [shuffled.length]);

  useEffect(() => {
    if (shuffled.length === 0) return;
    const interval = setInterval(advance, 3500);
    return () => clearInterval(interval);
  }, [shuffled.length, advance]);

  if (shuffled.length === 0) return null;

  const current = shuffled[currentIndex];
  if (!current) return null;

  return (
    <Link href={current.href} className="block relative w-full h-full group cursor-pointer overflow-hidden">
      <Image
        src={current.thumbnail}
        alt={current.title}
        fill
        className={`object-cover transition-all duration-500 ${
          isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
        } group-hover:scale-[1.03]`}
        sizes="(max-width: 768px) 0vw, 50vw"
      />
      {/* Overlay with title */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-white text-sm font-mono tracking-wider">
          → {current.title}
        </span>
      </div>
      {/* Corner index indicator */}
      <div className="absolute top-3 right-3 bg-text-heading/80 text-white px-2 py-0.5 text-[9px] font-mono tracking-wider">
        {String(currentIndex + 1).padStart(2, "0")}/{String(shuffled.length).padStart(2, "0")}
      </div>
    </Link>
  );
}

// --- Hero Section ---
interface HeroSectionProps {
  showcaseItems?: ShowcaseItem[];
}

export default function HeroSection({ showcaseItems = [] }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-bg-main overflow-hidden">
      {/* === GRID LAYOUT === */}
      <div className="w-full border-b-2 border-text-heading">
        {/* Row 1: Main giant text area */}
        <div className="grid grid-cols-12 min-h-[50vh] md:min-h-[55vh]">
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
          <div className="col-span-9 sm:col-span-5 md:col-span-5 relative border-r border-text-heading/20">
            <div className="px-4 sm:px-8 py-6 sm:py-10 flex flex-col justify-center h-full">
              <div className="flex flex-wrap items-baseline leading-[1]">
                <span className="text-[18vw] sm:text-[12vw] md:text-[10vw] font-black text-text-heading tracking-[0.08em] leading-[1]">
                  遊宴
                </span>
              </div>
              <div className="flex items-baseline leading-[1] mt-1 sm:mt-2">
                <span className="text-[18vw] sm:text-[12vw] md:text-[10vw] font-black text-text-heading tracking-[0.08em] leading-[1]">
                  技研
                </span>
                <span className="text-accent text-3xl sm:text-5xl md:text-6xl font-black ml-3 sm:ml-6 self-start mt-2">
                  ←
                </span>
              </div>
            </div>
          </div>

          {/* Right: Showcase image slideshow - hidden on mobile */}
          <div className="hidden md:block col-span-5 relative bg-text-heading/5">
            {showcaseItems.length > 0 ? (
              <ShowcaseSlideshow items={showcaseItems} />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[10px] font-mono tracking-wider text-text-sub/50 uppercase">
                  Works & Inventions
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Row 3: LED Ticker strip - 電光掲示板 */}
        <div className="border-t border-b-2 border-text-heading bg-[#050505] h-12 sm:h-14 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-15 z-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.5) 1px, rgba(0,0,0,0.5) 3px)",
            }}
          />
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
