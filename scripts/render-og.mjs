// Renders assets/og-template.html -> assets/og-image.png at 2400x1260.
//
// The OG image is a baked PNG: editing the <meta> tags does NOT change what
// link previews show. Re-run this whenever the hero copy or project list moves.
//
//   node scripts/render-og.mjs
//
// Needs playwright available (borrowed from the pointd.fyi checkout) and
// network access for the Fontshare webfonts.

import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const template = resolve(here, "../assets/og-template.html");
const out = resolve(here, "../assets/og-image.png");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 2400, height: 1260 },
  deviceScaleFactor: 1,
});

await page.goto(`file://${template}`, { waitUntil: "networkidle" });

// Fail loudly rather than shipping a system-font fallback.
await page.evaluate(() => document.fonts.ready);
const usingWebfont = await page.evaluate(() =>
  document.fonts.check("800 180px 'Cabinet Grotesk'")
);
if (!usingWebfont) {
  await browser.close();
  throw new Error("Cabinet Grotesk did not load — refusing to render with fallback fonts.");
}

await page.screenshot({ path: out });
await browser.close();
console.log(`✓ ${out}`);
