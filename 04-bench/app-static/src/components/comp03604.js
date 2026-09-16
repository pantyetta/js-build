// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01234A, calcu01271A, calcu01157B, calcu00933B, calcu01400A } from '../lib/index.js';
import '../styles/s04.css';
export class Comp03604 {
  constructor(seed = 16) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01234A(total);
    total = calcu01271A(total);
    total = calcu01157B(total);
    total = calcu00933B(total);
    total = calcu01400A(total);
    return total;
  }
}

export function rendercomp03604(container) {
  const total = new Comp03604().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03604: ${total}`;
  container.appendChild(el);
  return total;
}
