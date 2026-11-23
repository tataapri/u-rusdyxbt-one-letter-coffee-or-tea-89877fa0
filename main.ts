import { mkdirSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is exactly one letter, A for coffee.
// The gate requires /output/entry.txt to be UTF-8 text of exactly 1 character,
// so write a single byte "A" with no trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "A");
