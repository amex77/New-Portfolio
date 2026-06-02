import { caseStudies } from "../data";
import { useReveal } from "../hooks";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l hairline pl-3">
      <div className="font-serif text-2xl md:text-[1.7rem] text-paper">
        {value}
      </div>
      <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-mist">
        {label}
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.05);

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative border-t hairline py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 text-mist">
          <span className="inline-block h-px w-8 bg-line-strong" />
          <span className="eyebrow">Case Studies</span>
        </div>

        <div
          className={`mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal ${
            shown ? "in" : ""
          }`}
        >
          <h2 className="font-sans font-semibold tracking-[-0.035em] leading-[0.95] text-[clamp(2.4rem,6vw,5rem)]">
            Real communities.
            <br />
            <span className="font-serif-italic text-flame glow-flame">
              Real numbers.
            </span>
          </h2>
          <p className="text-paper/70 max-w-md text-[15px] leading-relaxed">
            Six subreddits I built from scratch, and a network of five
            more compounding the reach of a single brand.
          </p>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border hairline reveal ${
            shown ? "in" : ""
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          {caseStudies.map((c) => (
            <article
              key={c.id}
              className="group relative bg-ink p-7 md:p-8 flex flex-col min-h-[360px]"
            >
              {/* Subtle accent gradient */}
              <div
                className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${c.accent} opacity-[0.07] blur-2xl group-hover:opacity-20 transition-opacity duration-700`}
              />

              <div className="relative flex items-center justify-between">
                <span className="font-mono text-xs text-flame">
                  {c.handle}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-mist">
                  Case study
                </span>
              </div>

              <h3 className="relative mt-6 text-2xl font-medium tracking-tight">
                {c.name}
              </h3>

              <div className="relative mt-6 grid grid-cols-2 gap-y-4 gap-x-4">
                <Stat value={c.members} label="Members" />
                <Stat value={c.annualViews} label="Annual Views" />
                <Stat value={c.weeklyVisitors} label="Weekly Visitors" />
                <Stat value={c.weeklyContributions} label="Weekly Contrib." />
              </div>

              <p className="relative mt-6 text-[14px] leading-relaxed text-paper/75">
                <span className="text-paper font-medium">
                  Started at {c.started} members.
                </span>{" "}
                {c.story}
              </p>

              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="relative mt-auto pt-6 inline-flex items-center gap-2 text-sm text-flame hover:gap-3 transition-all"
              >
                View Subreddit
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
