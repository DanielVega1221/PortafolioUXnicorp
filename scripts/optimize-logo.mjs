/**
 * Generates a small version of the logo for use in small UI contexts.
 * Source: public/brand/logo.png (759x840 px)
 * Output: public/brand/logo-sm.png (120x133 px — 2× retina for a max display size of 60x66 px)
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const src = path.join(root, "public", "brand", "logo.png");
const dest = path.join(root, "public", "brand", "logo-sm.png");

await sharp(src)
  .resize(120, 133, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9, quality: 90 })
  .toFile(dest);

console.log("✓ Generated public/brand/logo-sm.png (120×133 px)");
