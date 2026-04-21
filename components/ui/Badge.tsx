interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white/90 transition-colors duration-150">
      {label}
    </span>
  );
}
