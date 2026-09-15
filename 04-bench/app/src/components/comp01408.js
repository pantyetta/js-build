// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02448A, calcu01428B, calcu00796B, calcu01455B } from '../lib/index.js';
import '../styles/s08.css';
export class Comp01408 {
  constructor(seed = 15) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02448A(total);
    total = calcu01428B(total);
    total = calcu00796B(total);
    total = calcu01455B(total);
    return total;
  }
}

export function rendercomp01408(container) {
  const total = new Comp01408().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01408: ${total}`;
  container.appendChild(el);
  return total;
}
