import { services } from "../data";
import { useReveal } from "../hooks";

export default function About() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="relative border-t hairline py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 text-mist">
          <span className="inline-block h-px w-8 bg-line-strong" />
          <span className="eyebrow">About &amp; Services</span>
        </div>

        <div
          className={`mt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 reveal ${
            shown ? "in" : ""
          }`}
        >
          <div className="lg:col-span-7">
            <h2 className="font-sans font-semibold tracking-[-0.035em] leading-[0.95] text-[clamp(2.4rem,6vw,5rem)]">
              Strategy.
              <br />
              Content.
              <br />
              <span className="font-serif-italic text-flame glow-flame">
                Community.
              </span>
            </h2>
            <div className="mt-8 space-y-5 text-paper/75 text-[15px] leading-relaxed max-w-2xl">
              <p>
                I specialize in building Reddit communities that grow fast
                and stay engaged. Starting from zero 
                no seed audience, I've taken subreddits from under 100
                members to 25K-55K in 4 to 5 months, consistently, across
                multiple niches and two major brand clients.
              </p>
              <p>
                My edge is the ecosystem approach: instead of one generic
                community, I build multiple tightly-focused subreddits that
                each own their niche. The result is a brand presence on
                Reddit that is deep, dominant, and nearly impossible to
                replicate quickly.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border hairline p-6 md:p-8 bg-ink/40">
              <div className="text-xs uppercase tracking-[0.22em] text-mist">
                What I do
              </div>
              <ul className="mt-6 divide-y hairline">
                {services.map((s) => (
                  <li
                    key={s}
                    className="group flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
                  >
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-flame flex-none group-hover:scale-125 transition-transform" />
                    <span className="text-paper/85 text-[15px] leading-snug">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
