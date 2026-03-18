const navLinks = [
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/inventions", label: "Inventions" },
  { href: "/research", label: "Research" },
  { href: "/partyboy", label: "PartyBoy" },
];

export default function StickyNav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg-main border-b-2 border-text-heading">
      <div className="flex items-center h-11">
        {/* Logo */}
        <a
          href="/"
          className="flex-shrink-0 border-r border-text-heading/20 px-4 sm:px-6 h-full flex items-center gap-2"
        >
          <span className="text-lg sm:text-xl font-black text-text-heading tracking-tight">
            遊宴技研
          </span>
          <span className="hidden sm:inline text-[9px] font-mono tracking-[0.15em] text-text-sub uppercase">
            YUENGI-KEN
          </span>
        </a>

        {/* Nav links - equal spacing */}
        <nav className="flex-1 flex items-center h-full">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex-1 border-r border-text-heading/20 h-full flex items-center justify-center hover:bg-text-heading/5 transition-colors"
            >
              <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.15em] text-text-heading/60 hover:text-text-heading uppercase">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Right info */}
        <div className="flex-shrink-0 px-4 sm:px-6 h-full flex items-center gap-3 border-l border-text-heading/20">
          <span className="hidden sm:inline text-[9px] font-mono tracking-wider text-text-sub">
            est. 2024
          </span>
          <div className="w-2.5 h-2.5 bg-accent rounded-full" />
        </div>
      </div>
    </header>
  );
}
