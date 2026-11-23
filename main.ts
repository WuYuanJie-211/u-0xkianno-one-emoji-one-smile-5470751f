// One Emoji, One Smile — entry generator (Node 22, stdlib only).
// The entry is exactly one emoji: a face holding back happy tears —
// tender, grateful, warm. Nothing else goes in the file.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🥹";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
