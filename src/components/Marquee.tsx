import { ecosystemSubreddits } from "../data";

export default function Marquee() {
  const items = [...ecosystemSubreddits, ...ecosystemSubreddits];
  return (
    <div className="relative border-y hairline bg-ink overflow-hidden">
      <div className="flex items-center gap-10 py-5 animate-marquee whitespace-nowrap will-change-transform">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-3 text-paper/80">
            <span className="text-flame font-mono text-sm">●</span>
            <span className="text-sm tracking-tight">{s.name}</span>
            <span className="text-mist text-xs">· {s.members}</span>
            <span className="text-line-strong px-2">/</span>
          </div>
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
