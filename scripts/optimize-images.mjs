/**
 * Optimiza imágenes pesadas en public/:
 *  - works/*.png  → works/*.webp (se reemplazan los originales)
 *  - og-image.png → og-image.jpg (se elimina el png original)
 * Ejecutar con el sitio detenido.
 */
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");

const worksPng = [
  { file: "works/SmartHome.png", quality: 82 },
  { file: "works/ComercialRioHondo.png", quality: 82 },
  { file: "works/GlamAtNails.png", quality: 82 },
];

const ogImage = { file: "og-image.png", quality: 85 };

for (const { file, quality } of worksPng) {
  const src = path.join(publicDir, file);
  if (!fs.existsSync(src)) {
    console.log(`  skip (not found): ${file}`);
    continue;
  }

  const dest = file.replace(/\.png$/, ".webp");
  const out = path.join(publicDir, dest);

  const before = fs.statSync(src).size;
  await sharp(src).webp({ quality, effort: 6 }).toFile(out);
  const after = fs.statSync(out).size;

  const pct = (((before - after) / before) * 100).toFixed(0);
  console.log(`✓ ${file} → ${dest}`);
  console.log(`  ${(before / 1024).toFixed(1)} KiB → ${(after / 1024).toFixed(1)} KiB  (−${pct}%)`);
}

{
  const src = path.join(publicDir, ogImage.file);
  if (fs.existsSync(src)) {
    const dest = ogImage.file.replace(/\.png$/, ".jpg");
    const out = path.join(publicDir, dest);

    const before = fs.statSync(src).size;
    await sharp(src).jpeg({ quality: ogImage.quality, mozjpeg: true }).toFile(out);
    const after = fs.statSync(out).size;

    const pct = (((before - after) / before) * 100).toFixed(0);
    console.log(`✓ ${ogImage.file} → ${dest}`);
    console.log(`  ${(before / 1024).toFixed(1)} KiB → ${(after / 1024).toFixed(1)} KiB  (−${pct}%)`);
  } else {
    console.log(`  skip (not found): ${ogImage.file}`);
  }
}

console.log("\nDone. Aplica los cambios de rutas en código y luego borra los .png originales.");