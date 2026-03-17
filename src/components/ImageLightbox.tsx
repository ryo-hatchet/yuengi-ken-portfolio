"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type ImageLightboxProps = {
  images: string[];
  alt: string;
};

export default function ImageLightbox({ images, alt }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const open = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const goTo = useCallback(
    (dir: "prev" | "next") => {
      if (isAnimating) return;
      setDirection(dir === "next" ? "left" : "right");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          dir === "next"
            ? (prev + 1) % images.length
            : (prev - 1 + images.length) % images.length
        );
        setDirection(null);
        setIsAnimating(false);
      }, 200);
    },
    [isAnimating, images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goTo("prev");
      if (e.key === "ArrowRight") goTo("next");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goTo]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => open(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-metallic/10 cursor-pointer"
          >
            <Image
              src={img}
              alt={`${alt} - ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-8 h-8 text-white drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" />

          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 font-mono text-sm text-white/60 tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-5 right-5 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="閉じる"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo("prev");
              }}
              className="absolute left-4 md:left-8 z-10 w-14 h-14 flex items-center justify-center text-white/60 hover:text-white transition-all rounded-full hover:bg-white/10 group"
              aria-label="前の画像"
            >
              <svg className="w-8 h-8 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goTo("next");
              }}
              className="absolute right-4 md:right-8 z-10 w-14 h-14 flex items-center justify-center text-white/60 hover:text-white transition-all rounded-full hover:bg-white/10 group"
              aria-label="次の画像"
            >
              <svg className="w-8 h-8 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className={`relative w-[90vw] h-[80vh] max-w-6xl transition-all duration-200 ${
              direction === "left"
                ? "-translate-x-8 opacity-0"
                : direction === "right"
                ? "translate-x-8 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} - ${currentIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
