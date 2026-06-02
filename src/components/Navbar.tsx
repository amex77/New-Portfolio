import { useEffect, useState } from "react";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-ink/80 border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-flame text-ink">
            <span className="absolute inset-0 rounded-full bg-flame pulse-ring opacity-60" />
            <span className="relative font-serif-italic text-lg leading-none">
              A
            </span>
          </span>
          <span className="font-medium tracking-tight">Ashish.</span>
          <span className="hidden sm:inline text-mist text-xs ml-1">
            / Community growth
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-paper/70 hover:text-paper transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-paper text-ink px-4 py-2 text-sm font-medium hover:bg-cream transition-colors"
          >
            Let's talk
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border hairline"
            aria-label="Menu"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 right-0 top-0 h-px bg-paper transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-px bg-paper transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t hairline bg-ink/95 backdrop-blur">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-paper/80 py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-paper text-ink px-4 py-2 text-sm font-medium"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
