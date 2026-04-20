const nav = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#boundary", label: "Your company" },
  { href: "#formats", label: "Formats" },
  { href: "#security", label: "Security" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-white sm:text-base">
          CORPORATE AI RULEBOOK
          <span className="ml-1 align-super text-[0.55rem] text-zinc-500">™</span>
        </p>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Page sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-wider text-zinc-500 transition-colors hover:text-zinc-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
