/**
 * Recompresses large webp images using sharp.
 * Outputs to public/_compressed/ (same relative paths) so you can review and
 * replace originals when the dev server is not running.
 */
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");
const outDir = path.join(publicDir, "_compressed");

const targets = [
  { file: "conceptos/arq/fondocardarq.webp", quality: 70 },
  { file: "conceptos/arq/fondoARQ.webp",     quality: 72 },
  { file: "conceptos/arq/BRUNNdemo.webp",    quality: 72 },
  { file: "conceptos/gastronomia/fondocard.webp", quality: 70 },
  { file: "conceptos/gastronomia/fondo.webp",     quality: 72 },
];

for (const { file, quality } of targets) {
  const src = path.join(publicDir, file);
  if (!fs.existsSync(src)) {
    console.log(`  skip (not found): ${file}`);
    continue;
  }

  const dest = path.join(outDir, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  const before = fs.statSync(src).size;
  await sharp(src).webp({ quality, effort: 6 }).toFile(dest);
  const after = fs.statSync(dest).size;

  const pct = (((before - after) / before) * 100).toFixed(0);
  console.log(`✓ ${file}`);
  console.log(`  ${(before / 1024).toFixed(1)} KiB → ${(after / 1024).toFixed(1)} KiB  (−${pct}%)`);
}

console.log(`\nDone. Compressed files are in public/_compressed/`);
console.log(`Stop the dev server, then copy them over the originals in public/.`);

