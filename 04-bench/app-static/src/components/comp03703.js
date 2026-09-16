// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01391B, calcu02409B, calcu02898B, calcu00898A } from '../lib/index.js';
import '../styles/s03.css';
export class Comp03703 {
  constructor(seed = 5) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01391B(total);
    total = calcu02409B(total);
    total = calcu02898B(total);
    total = calcu00898A(total);
    return total;
  }
}

export function rendercomp03703(container) {
  const total = new Comp03703().compute();
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03703: ${total}`;
  container.appendChild(el);
  return total;
}
