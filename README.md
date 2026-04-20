# Corporate AI Rulebook — marketing landing

Minimal **Next.js 16** project: **one public page** (`/`) with the product landing UI. **Open app** sends visitors to the deployed product (default: `https://corporate-ai-rulebook.vercel.app/login`). This repo does **not** include the application code, database, or auth—only the marketing shell.

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
```

Optional: `npm run fetch-hero` downloads the hero MP4/poster into `public/hero/` (the page still works with remote fallbacks if you skip this).

## Environment (optional)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_APP_LOGIN_URL` | Full URL for **Open app** (overrides default in `src/lib/app-login-url.ts`) |
| `NEXT_PUBLIC_HERO_VIDEO_SRC` | Optional hero video path (see `HeroTreeVideo.tsx`) |

## Deploy (e.g. Vercel)

Connect this repository, use **Node 22.x**, run `npm run build`. No server secrets are required for the static marketing routes.
