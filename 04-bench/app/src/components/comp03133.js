// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02574B, calcu01632A, calcu02331A, calcu02735A, calcu02469B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp03133 {
  constructor(seed = 16) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02574B(total);
    total = calcu01632A(total);
    total = calcu02331A(total);
    total = calcu02735A(total);
    total = calcu02469B(total);
    return total;
  }
}

export function rendercomp03133(container) {
  const total = new Comp03133().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03133: ${total}`;
  container.appendChild(el);
  return total;
}
