import { clients } from "../data";
import { useReveal } from "../hooks";

export default function Clients() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section
      id="clients"
      ref={ref}
      className="relative border-t hairline py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 text-mist">
          <span className="inline-block h-px w-8 bg-line-strong" />
          <span className="eyebrow">Client Work</span>
        </div>

        <div
          className={`mt-6 grid grid-cols-1 lg:grid-cols-2 gap-px bg-line border hairline reveal ${
            shown ? "in" : ""
          }`}
        >
          {clients.map((c, i) => (
            <article
              key={c.name}
              className="group relative bg-ink p-8 md:p-12 min-h-[280px] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-flame">
                  Client {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-mist">
                  Engagement
                </span>
              </div>

              <h3 className="mt-8 font-sans font-semibold tracking-[-0.03em] text-4xl md:text-5xl">
                {c.name}
              </h3>
              <div className="mt-2 text-paper/70 text-sm">{c.meta}</div>

              {c.subs.length > 0 ? (
                <>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {c.subs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border hairline bg-ink/40 px-3 py-1.5 text-xs text-paper/80 hover:border-flame/40 hover:text-paper transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                    <span className="rounded-full border hairline border-dashed px-3 py-1.5 text-xs text-mist">
                      {c.note}
                    </span>
                  </div>
                </>
              ) : (
                <p className="mt-8 text-paper/70 text-[15px] max-w-md">
                  {c.note}
                </p>
              )}

              <div className="mt-auto pt-8 flex items-center gap-2 text-xs text-mist">
                <span className="h-px w-6 bg-line-strong" />
                <span className="uppercase tracking-[0.18em]">
                  Verified · Reddit-native
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
