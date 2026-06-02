import { totals } from "../data";
import { useReveal } from "../hooks";

export default function TotalsBar() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      ref={ref}
      className="relative border-y hairline bg-paper text-ink py-14 md:py-20"
    >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 reveal ${
          shown ? "in" : ""
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {totals.map((t) => (
            <div key={t.label} className="flex flex-col">
              <div className="font-serif text-5xl md:text-6xl text-flame">
                {t.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-ink/60">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
