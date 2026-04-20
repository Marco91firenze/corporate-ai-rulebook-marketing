import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center mesh-gradient px-4">
      <h1 className="text-4xl font-bold text-white">Page not found</h1>
      <p className="mt-4 text-slate-400">The page you requested does not exist.</p>
      <Link href="/" className="mt-8 text-cyan-400 hover:text-cyan-300">
        Return home
      </Link>
    </div>
  );
}
