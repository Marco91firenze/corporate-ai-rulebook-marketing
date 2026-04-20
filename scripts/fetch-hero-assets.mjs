/**
 * Downloads the same hero MP4 + poster PNG used by v0-compute-11 (Vercel Blob).
 * Run: node scripts/fetch-hero-assets.mjs
 * Or copy bg-hero.mp4 from your V0 zip into public/hero/bg-hero.mp4 instead.
 */
import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const heroDir = path.join(root, "public", "hero");

const ASSETS = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4",
    file: "bg-hero.mp4",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png",
    file: "hero-poster.png",
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          const loc = res.headers.location;
          if (!loc) {
            reject(new Error("Redirect without location"));
            return;
          }
          download(loc, dest).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

await fs.promises.mkdir(heroDir, { recursive: true });
for (const { url, file } of ASSETS) {
  const dest = path.join(heroDir, file);
  process.stdout.write(`Downloading ${file}...\n`);
  await download(url, dest);
  const st = await fs.promises.stat(dest);
  process.stdout.write(`Wrote ${dest} (${(st.size / 1024 / 1024).toFixed(2)} MiB)\n`);
}
