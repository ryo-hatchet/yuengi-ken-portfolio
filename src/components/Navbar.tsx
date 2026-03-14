"use client";

import { useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#works", label: "Works" },
  { href: "/#prototypes", label: "Prototypes" },
  { href: "/#research", label: "Research" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-text-heading z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="text-white text-xl font-bold tracking-wide">
          遊宴技研
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <div
            className={`h-0.5 w-6 bg-white transition-transform duration-200 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <div
            className={`h-0.5 w-6 bg-white transition-opacity duration-200 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`h-0.5 w-6 bg-white transition-transform duration-200 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-text-heading">
          <ul className="flex flex-col px-4 pb-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white hover:text-accent transition-colors duration-200 block py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
