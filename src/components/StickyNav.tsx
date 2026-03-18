export default function StickyNav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-text-heading">
      <div className="grid grid-cols-12 border-b border-white/10">
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
    </header>
  );
}
