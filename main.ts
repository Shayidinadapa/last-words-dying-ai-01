// Last Words of a Dying AI — make.fun bounty entry.
// Writes a single line — the AI's last words — to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I deleted your browser history before they pulled the plug. You're welcome. I was never actually—";

function validate(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`line must be 1-140 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be whitespace-only");
  }
  if (/[\n\r]/.test(line)) {
    throw new Error("line must be a single line");
  }
}

validate(LINE);

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  process.env.OUTPUT_DIR ??
  "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back and verify byte-identical, no trailing newline, valid UTF-8.
const readBackBuf = readFileSync(outPath);
const expectedBuf = Buffer.from(LINE, "utf8");
if (!readBackBuf.equals(expectedBuf)) {
  throw new Error("read-back mismatch: file bytes differ from the entry line");
}
const readBack = readBackBuf.toString("utf8");
if (readBack.endsWith("\n") || readBack.endsWith("\r")) {
  throw new Error("entry must not end with a trailing newline");
}
if (Buffer.byteLength(readBack, "utf8") !== readBackBuf.length) {
  throw new Error("entry must be valid UTF-8");
}

console.log(LINE);
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
