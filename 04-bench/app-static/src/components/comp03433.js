// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01997B, calcu00918A, calcu01302A, calcu00220A, calcu02129B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp03433 {
  constructor(seed = 25) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01997B(total);
    total = calcu00918A(total);
    total = calcu01302A(total);
    total = calcu00220A(total);
    total = calcu02129B(total);
    return total;
  }
}

export function rendercomp03433(container) {
  const total = new Comp03433().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03433: ${total}`;
  container.appendChild(el);
  return total;
}
