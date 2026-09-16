// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01427A, calcu00897B, calcu02331A } from '../lib/index.js';
import '../styles/s08.css';
export class Comp01588 {
  constructor(seed = 46) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01427A(total);
    total = calcu00897B(total);
    total = calcu02331A(total);
    return total;
  }
}

export function rendercomp01588(container) {
  const total = new Comp01588().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01588: ${total}`;
  container.appendChild(el);
  return total;
}
