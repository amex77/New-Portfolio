import { ecosystemSubreddits } from "../data";
import { useReveal } from "../hooks";

export default function Ecosystem() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="relative border-t hairline py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 text-mist">
          <span className="inline-block h-px w-8 bg-line-strong" />
          <span className="eyebrow">How It Works</span>
        </div>

        <div
          className={`mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start reveal ${
            shown ? "in" : ""
          }`}
        >
          <div className="lg:col-span-5">
            <h2 className="font-sans font-semibold tracking-[-0.035em] leading-[0.95] text-[clamp(2.4rem,6vw,5rem)]">
              One Brand.
              <br />
              <span className="font-serif-italic text-flame glow-flame">
                Multiple
              </span>
              <br />
              Subreddits.
            </h2>
            <div className="mt-8 space-y-5 text-paper/75 text-[15px] leading-relaxed max-w-md">
              <p>
                A single brand has Multiple dimensions: mindset, lifestyle,
                fitness, relationships, discipline, self-improvement. Instead
                of cramming everything into one community, I build a
                dedicated subreddit for each angle.
              </p>
              <p>
                Each community attracts its own audience, ranks for its own
                keywords, and grows on its own merits, while all of them
                serve the same brand. It's the most powerful Reddit strategy
                available, and almost no one is doing it at scale.
              </p>
              <p className="text-paper">
                This is exactly what I built for Befreed: 10+ subreddits,
                one unified brand, 100M+ views.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border hairline bg-ink/60 backdrop-blur-sm p-6 md:p-10">
              <div className="flex items-center justify-center">
                <div className="px-5 py-2 rounded-full border hairline bg-paper text-ink text-xs font-mono uppercase tracking-[0.22em]">
                  The Brand
                </div>
              </div>
              <div className="my-6 flex items-center justify-center text-mist font-mono text-xs tracking-widest">
                <span>↓</span>
                <span className="mx-4">Multiple Niches</span>
                <span>↓</span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ecosystemSubreddits.map((s) => (
                  <li
                    key={s.name}
                    className="group flex items-center justify-between gap-4 rounded-xl border hairline bg-ink/40 px-4 py-3.5 hover:border-flame/40 hover:bg-ink/70 transition-colors"
                  >
                    <div>
                      <div className="text-paper font-medium text-[15px]">
                        {s.name}
                      </div>
                      <div className="text-xs text-mist mt-0.5">{s.tag}</div>
                    </div>
                    <div className="font-mono text-flame text-sm">
                      {s.members}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-mist">
                <span>Total ecosystem reach</span>
                <span className="text-line-strong">·</span>
                <span className="text-flame font-mono">100M+ views</span>
                <span className="text-line-strong">·</span>
                <span>10+ communities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
