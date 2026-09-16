// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01263A, calcu02515B, calcu01616A, calcu00291A } from '../lib/index.js';
import '../styles/s00.css';
export class Comp03220 {
  constructor(seed = 26) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01263A(total);
    total = calcu02515B(total);
    total = calcu01616A(total);
    total = calcu00291A(total);
    return total;
  }
}

export function rendercomp03220(container) {
  const total = new Comp03220().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03220: ${total}`;
  container.appendChild(el);
  return total;
}
