// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01724B, calcu00956A, calcu00328B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp02593 {
  constructor(seed = 28) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01724B(total);
    total = calcu00956A(total);
    total = calcu00328B(total);
    return total;
  }
}

export function rendercomp02593(container) {
  const total = new Comp02593().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02593: ${total}`;
  container.appendChild(el);
  return total;
}
