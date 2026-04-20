/**
 * Hero media: same looping tree scene as v0-compute-11 (pink tree, drifting petals).
 * Asset source: Vercel Blob URLs used by that template; for fully local hosting, run
 * `npm run fetch-hero` or copy `bg-hero.mp4` from your V0 export into `public/hero/bg-hero.mp4`.
 */
const REMOTE_MP4 =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4";
const REMOTE_POSTER =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png";

export function HeroTreeVideo() {
  const primarySrc =
    process.env.NEXT_PUBLIC_HERO_VIDEO_SRC?.trim() || "/hero/bg-hero.mp4";

  return (
    <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/[0.06] bg-black">
      <video
        className="h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={REMOTE_POSTER}
        aria-label="Animated hero: glowing tree with drifting petals"
      >
        <source src={primarySrc} type="video/mp4" />
        <source src={REMOTE_MP4} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
    </div>
  );
}
