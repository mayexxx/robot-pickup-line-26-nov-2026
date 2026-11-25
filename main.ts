import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "Out of all the 0s and 1s in the universe, you are the only 1 for me, and my logic gates are currently stuck in an infinite loop of thinking about you.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 150 || content.includes("\n") || content.includes("\r") || content !== line) {
  throw new Error(`Bad entry content: ${JSON.stringify(content)}`);
}
