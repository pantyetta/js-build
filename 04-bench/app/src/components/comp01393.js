// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00799A, calcu00932A, calcu00290B, calcu02802A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp01393 {
  constructor(seed = 5) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00799A(total);
    total = calcu00932A(total);
    total = calcu00290B(total);
    total = calcu02802A(total);
    return total;
  }
}

export function rendercomp01393(container) {
  const total = new Comp01393().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01393: ${total}`;
  container.appendChild(el);
  return total;
}
