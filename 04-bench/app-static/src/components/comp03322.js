// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02530A, calcu00187B, calcu02218A } from '../lib/index.js';
import '../styles/s02.css';
export class Comp03322 {
  constructor(seed = 1) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02530A(total);
    total = calcu00187B(total);
    total = calcu02218A(total);
    return total;
  }
}

export function rendercomp03322(container) {
  const total = new Comp03322().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03322: ${total}`;
  container.appendChild(el);
  return total;
}
