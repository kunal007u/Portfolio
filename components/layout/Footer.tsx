import { meta } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} {meta.name}
        </p>
        <p className="text-xs text-white/20">Built with Next.js · TypeScript · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
