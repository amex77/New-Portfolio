export default function Footer() {
  return (
    <footer className="relative border-t hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-flame text-ink">
            <span className="font-serif-italic text-lg leading-none">A</span>
          </span>
          <span className="text-sm text-paper/80">
            Ashish.{" "}
            <span className="text-mist">
              Ecosystems, built from zero.
            </span>
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-paper/70">
          <a href="#approach" className="hover:text-paper">
            Approach
          </a>
          <a href="#case-studies" className="hover:text-paper">
            Case Studies
          </a>
          <a href="#contact" className="hover:text-paper">
            Contact
          </a>
        </div>
        <div className="text-xs text-mist font-mono">
          © {new Date().getFullYear()} · Ashish Mishra
        </div>
      </div>
    </footer>
  );
}
