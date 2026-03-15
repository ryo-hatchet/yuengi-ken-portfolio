export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-white text-sm font-bold tracking-wider">
                遊宴技研
              </span>
            </div>
            <p className="font-mono text-xs tracking-[0.2em] text-text-sub">
              YUENGI-KEN
            </p>
            <p className="text-xs text-text-sub/60 mt-4">
              テクノロジーで遊びと賑わいを開発する活動体
            </p>
          </div>

          <p className="font-mono text-[10px] text-text-sub/40 tracking-wider">
            &copy; 2025 遊宴技研 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
