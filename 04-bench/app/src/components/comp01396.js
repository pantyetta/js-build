// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02824A, calcu02005B, calcu01367A, calcu01341B, calcu02302B } from '../lib/index.js';
import '../styles/s16.css';
export class Comp01396 {
  constructor(seed = 18) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02824A(total);
    total = calcu02005B(total);
    total = calcu01367A(total);
    total = calcu01341B(total);
    total = calcu02302B(total);
    return total;
  }
}

export function rendercomp01396(container) {
  const total = new Comp01396().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01396: ${total}`;
  container.appendChild(el);
  return total;
}
