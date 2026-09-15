// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00007A, calcu01041A, calcu00061A, calcu00872A, calcu00966A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp03013 {
  constructor(seed = 28) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00007A(total);
    total = calcu01041A(total);
    total = calcu00061A(total);
    total = calcu00872A(total);
    total = calcu00966A(total);
    return total;
  }
}

export function rendercomp03013(container) {
  const total = new Comp03013().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03013: ${total}`;
  container.appendChild(el);
  return total;
}
