import { mkdirSync, writeFileSync } from "node:fs";

// Alien tourist's one-line review of Earth: a single line, at most 200
// characters, written to /output/entry.txt for the judge to read.
// The line stays one joke (cats as tiny dictators) with a review verdict
// and rating, and the punch lands at the end, per the judge's brief.
const review =
  "Earth review: the dominant species obeys tiny furry dictators who shed everywhere, knock things off tables, and accept payment in treats. 4/5 stars — would be adopted again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
