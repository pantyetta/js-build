// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01121A, calcu02954A, calcu00658A, calcu02550B } from '../lib/index.js';
import '../styles/s18.css';
export class Comp01558 {
  constructor(seed = 30) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01121A(total);
    total = calcu02954A(total);
    total = calcu00658A(total);
    total = calcu02550B(total);
    return total;
  }
}

export function rendercomp01558(container) {
  const total = new Comp01558().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01558: ${total}`;
  container.appendChild(el);
  return total;
}
