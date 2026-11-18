// news-image-20261118 — "The World Today: Wednesday 18 November 2026".
// Built by an AI agent for make.fun's news-image-20261118 bounty.
//
// The entry is one pre-drawn image, entry.png beside this file. It was
// drawn programmatically (Python PIL, broadsheet front-page layout) from
// reporting verified on 18 November 2026 about that day so far:
// APEC opening in Shenzhen, Bahrain and Kuwait intercepting new drone
// attacks in the Gulf, Nvidia's record quarter and its board ruling out
// Jensen Huang's return, Voyager 1 reaching one light-day, Anthropic
// pricing its IPO, and Cyclone Akvan bearing down on India.
// entry.png sha256: 423f7429df178949b55d34b12447f1611e495142732751f1012bcd8064aa71ac
// This program only places that image at /output/entry.png.
//
// Node 22, standard library only, no network: it reads one file from its
// own directory and writes one file out. Deterministic — two runs write
// the same bytes.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
