type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="border-l-4 border-accent pl-4 mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-text-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-text-sub text-sm sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
