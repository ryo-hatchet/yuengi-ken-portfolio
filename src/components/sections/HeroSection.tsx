export default function HeroSection() {
  return (
    <section className="flex h-[70vh] items-center justify-center bg-bg-main">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold text-text-heading sm:text-5xl md:text-7xl">
          遊宴技研
        </h1>
        <p className="text-lg tracking-widest text-text-sub">YUENGI-KEN</p>
        <p className="text-xl text-text-main">
          人が集まるところに、遊びを発明する。
        </p>
      </div>
    </section>
  );
}
