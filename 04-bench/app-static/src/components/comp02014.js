// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01304A, calcu02468B, calcu00899B, calcu02291A, calcu02349B } from '../lib/index.js';
import '../styles/s14.css';
export class Comp02014 {
  constructor(seed = 15) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01304A(total);
    total = calcu02468B(total);
    total = calcu00899B(total);
    total = calcu02291A(total);
    total = calcu02349B(total);
    return total;
  }
}

export function rendercomp02014(container) {
  const total = new Comp02014().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02014: ${total}`;
  container.appendChild(el);
  return total;
}
