// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00392A, calcu01832A, calcu00724B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp03313 {
  constructor(seed = 14) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00392A(total);
    total = calcu01832A(total);
    total = calcu00724B(total);
    return total;
  }
}

export function rendercomp03313(container) {
  const total = new Comp03313().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03313: ${total}`;
  container.appendChild(el);
  return total;
}
