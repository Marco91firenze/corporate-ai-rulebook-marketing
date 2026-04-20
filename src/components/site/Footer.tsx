export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-white">
          CORPORATE AI RULEBOOK
          <span className="ml-1 align-super text-[0.55rem] text-zinc-500">™</span>
        </p>
        <p className="mt-4 text-sm text-zinc-600">
          © {new Date().getFullYear()} Corporate AI Rulebook. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
