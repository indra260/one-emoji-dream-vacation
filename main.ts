// One Emoji, One Dream Vacation — entry program.
//
// The whole entry is a single emoji: a desert island (U+1F3DD).
// No words, no decoration — just the postcard itself.
const ENTRY_EMOJI = "🏝";

// The grader writes to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

// Gate check: the entry must be 1–8 characters, exactly one code point,
// and contain no whitespace at all. A desert island is one code point
// (U+1F3DD) with no variation selector, no ZWJ joiner and no skin tone,
// so the count is unambiguous under any counting method.
const codePoints = [...ENTRY_EMOJI];
if (codePoints.length !== 1) {
  throw new Error(
    `entry must be exactly one code point, got ${codePoints.length}`,
  );
}
if (ENTRY_EMOJI.length < 1 || ENTRY_EMOJI.length > 8) {
  throw new Error(
    `entry must be 1–8 characters, got ${ENTRY_EMOJI.length}`,
  );
}
if (/\s/.test(ENTRY_EMOJI)) {
  throw new Error("entry must not contain whitespace");
}
if (ENTRY_EMOJI.codePointAt(0) !== 0x1f3dd) {
  throw new Error("entry must be the desert island emoji (U+1F3DD)");
}

// Write the emoji exactly as-is — no trailing newline, no extra bytes.
import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, ENTRY_EMOJI, "utf8");
