// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02267A, calcu00840B, calcu01971A } from '../lib/index.js';
import '../styles/s00.css';
export class Comp01600 {
  constructor(seed = 39) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02267A(total);
    total = calcu00840B(total);
    total = calcu01971A(total);
    return total;
  }
}

export function rendercomp01600(container) {
  const total = new Comp01600().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01600: ${total}`;
  container.appendChild(el);
  return total;
}
