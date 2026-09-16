// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01034B, calcu02661A, calcu01761B } from '../lib/index.js';
import '../styles/s02.css';
export class Comp02602 {
  constructor(seed = 28) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01034B(total);
    total = calcu02661A(total);
    total = calcu01761B(total);
    return total;
  }
}

export function rendercomp02602(container) {
  const total = new Comp02602().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02602: ${total}`;
  container.appendChild(el);
  return total;
}
