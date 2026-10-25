import { heroStats } from "../data";
import { useReveal } from "../hooks";

function Stat({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <div
      className="fade-up text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-serif text-4xl md:text-5xl text-flame glow-flame">
        {value}
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-mist">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.05);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden grain"
      ref={ref}
    >
      {/* Decorative grid + glow */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full bg-flame/10 blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-amber/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 md:pt-40 pb-24 text-center">
        <div className="flex items-center justify-center gap-3 text-mist">
          <span className="inline-block h-2 w-2 rounded-full bg-flame ticker" />
          <span className="eyebrow">Community Growth Specialist</span>
        </div>

        <h1
          className={`mt-6 text-center font-sans font-semibold tracking-[-0.04em] leading-[0.92] text-[clamp(3rem,9vw,7.5rem)] reveal ${
            shown ? "in" : ""
          }`}
          style={{ transitionDelay: "80ms" }}
        >
          Built
          <br />
          From
          <br />
          <span className="font-serif-italic text-flame glow-flame">
            Zero.
          </span>
        </h1>

        <div
          className={`mt-10 flex justify-center reveal ${
            shown ? "in" : ""
          }`}
          style={{ transitionDelay: "260ms" }}
        >
          <p className="mx-auto text-center text-paper/80 text-lg leading-relaxed max-w-xl">
            I don&apos;t just manage communities. I build entire ecosystems
            around a brand. Multiple communities from different platforms
            like Reddit, Discord, Instagram, and TikTok, each targeting a
            different angle of the same audience, growing in parallel and
            compounding each other&apos;s reach.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t hairline pt-10 reveal ${
            shown ? "in" : ""
          }`}
          style={{ transitionDelay: "420ms" }}
        >
          {heroStats.map((s, i) => (
            <Stat key={s.label} {...s} delay={500 + i * 90} />
          ))}
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex items-center justify-center gap-3 text-mist">
          <span className="eyebrow">Scroll</span>
          <span className="relative inline-block h-8 w-px bg-line-strong overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-3 bg-flame animate-[ticker_1.6s_ease-in-out_infinite]" />
          </span>
        </div>
      </div>
    </section>
  );
}
