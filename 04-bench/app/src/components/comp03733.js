// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00498A, calcu02771B, calcu01634A, calcu02040A, calcu00417A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp03733 {
  constructor(seed = 28) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00498A(total);
    total = calcu02771B(total);
    total = calcu01634A(total);
    total = calcu02040A(total);
    total = calcu00417A(total);
    return total;
  }
}

export function rendercomp03733(container) {
  const total = new Comp03733().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03733: ${total}`;
  container.appendChild(el);
  return total;
}
