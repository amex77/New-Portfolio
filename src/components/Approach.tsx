import { approachSteps } from "../data";
import { useReveal } from "../hooks";

export default function Approach() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section
      id="approach"
      ref={ref}
      className="relative border-t hairline py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 text-mist">
          <span className="inline-block h-px w-8 bg-line-strong" />
          <span className="eyebrow">The Approach</span>
        </div>

        <div
          className={`mt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end reveal ${
            shown ? "in" : ""
          }`}
        >
          <h2 className="lg:col-span-7 font-sans font-semibold tracking-[-0.035em] leading-[0.95] text-[clamp(2.4rem,6vw,5rem)]">
            Not One Community.
            <br />
            An{" "}
            <span className="font-serif-italic text-flame glow-flame">
              Entire Ecosystem.
            </span>
          </h2>
          <p className="lg:col-span-5 text-paper/75 text-lg leading-relaxed">
            Most Reddit strategies stop at one subreddit. I go further. For
            each brand I work with, I build multiple subreddits, each
            targeting a distinct niche, angle, or audience segment. They
            grow independently, but together they create an interlocking
            Reddit presence that dominates search, captures different
            intent, and feeds each other's growth.
          </p>
        </div>

        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border hairline reveal ${
            shown ? "in" : ""
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          {approachSteps.map((s, i) => (
            <article
              key={s.n}
              className="group relative bg-ink p-8 md:p-10 min-h-[340px] flex flex-col"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-flame text-sm tracking-widest">
                  {s.n}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-mist">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-10 text-2xl md:text-[1.7rem] font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-paper/70 leading-relaxed text-[15px]">
                {s.body}
              </p>
              <div className="mt-auto pt-8 flex items-center gap-2 text-xs text-mist">
                <span className="h-px w-6 bg-line-strong" />
                <span className="uppercase tracking-[0.18em]">
                  Process
                </span>
              </div>
              <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-px bg-flame scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
