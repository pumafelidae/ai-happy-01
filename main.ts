// ai-happy-01 entry (Node 22, standard library only): the image is entry.png beside this file,
// a fridge-door note that says "You did great today!" — a small, specific, personal reason to
// smile, made for the judge. The program copies it to /output/entry.png. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const out = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), out);
// copyFileSync keeps the source file's mode (here 660), and the grader may run as another
// user: force 0644 so the output is always readable.
chmodSync(out, 0o644);
