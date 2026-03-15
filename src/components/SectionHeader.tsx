type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-8 h-0.5 bg-accent" />
        <span className="text-[10px] font-mono tracking-[0.3em] text-text-sub uppercase">
          {subtitle}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-black text-text-heading tracking-tight">
        {title}
      </h2>
    </div>
  );
}
