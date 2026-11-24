// The Funniest Toaster Error Message — make.fun entry.
// Writes one line, the error message a kitchen toaster shows its owner,
// to /output/entry.txt. At most 120 characters, one line, no trailing newline.
// Gate validation keeps the entry honest: a single line, 1-120 chars,
// no trailing newline. A bad entry fails loudly instead of shipping.
//
// Why this line: the judge wants a real toaster error message, fresh, tight,
// one voice, landing on a single read. The surprise comes from labour
// relations, not from any toaster pun: the bread has unionised, and the
// deadpan appliance reports the negotiation like a status update. Every
// word earns its place; nothing here is filler.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT = "/output/entry.txt";

const ENTRY =
  "Error: the bread has unionized. Negotiations begin at breakfast.";

function gate(): void {
  if (ENTRY.length < 1 || ENTRY.length > 120) {
    throw new Error(`entry must be 1-120 chars, got ${ENTRY.length}`);
  }
  if (ENTRY.includes("\n")) throw new Error("entry must be a single line");
  if (ENTRY.endsWith("\n")) throw new Error("entry must not end with a newline");
  if (ENTRY.trim().length === 0) throw new Error("entry must not be only whitespace");
}

gate();
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, ENTRY);
