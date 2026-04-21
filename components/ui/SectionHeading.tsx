interface SectionHeadingProps {
  label: string;
  title: string;
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">{title}</h2>
    </div>
  );
}
