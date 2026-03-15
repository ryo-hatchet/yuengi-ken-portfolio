"use client";

import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/inventions", label: "Inventions" },
  { href: "/research", label: "Research" },
  { href: "/partyboy", label: "PartyBoy" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top banner - thick bar with logo */}
      <div className="bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-baseline gap-3">
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-none">
              遊宴技研
            </span>
            <span className="hidden sm:inline text-xs font-mono tracking-[0.2em] text-text-sub uppercase">
              YUENGI-KEN
            </span>
          </a>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-[10px] font-mono tracking-wider text-text-sub/60">
              est. 2024
            </span>
            <div className="w-2 h-2 bg-accent rounded-full" />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            <div
              className={`h-0.5 w-5 bg-white transition-all duration-200 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <div
              className={`h-0.5 w-5 bg-white transition-all duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-0.5 w-5 bg-white transition-all duration-200 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Navigation bar - below the banner */}
      <nav className="bg-bg-dark/90 backdrop-blur-sm border-t border-white/10 border-b border-b-white/5">
        {/* Desktop nav */}
        <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-5 py-2.5 text-[11px] font-mono tracking-[0.15em] text-text-sub hover:text-white hover:bg-white/5 transition-all duration-200 uppercase border-r border-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-dark border-t border-white/5">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-text-sub text-xs font-mono tracking-wider hover:text-accent transition-colors duration-200 uppercase block py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
