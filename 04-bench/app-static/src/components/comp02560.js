// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01032A, calcu00945B, calcu02361B, calcu01225B, calcu02615B } from '../lib/index.js';
import '../styles/s00.css';
export class Comp02560 {
  constructor(seed = 13) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01032A(total);
    total = calcu00945B(total);
    total = calcu02361B(total);
    total = calcu01225B(total);
    total = calcu02615B(total);
    return total;
  }
}

export function rendercomp02560(container) {
  const total = new Comp02560().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02560: ${total}`;
  container.appendChild(el);
  return total;
}
