// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01336A, calcu01665A, calcu01567A, calcu01804B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp01933 {
  constructor(seed = 39) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01336A(total);
    total = calcu01665A(total);
    total = calcu01567A(total);
    total = calcu01804B(total);
    return total;
  }
}

export function rendercomp01933(container) {
  const total = new Comp01933().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01933: ${total}`;
  container.appendChild(el);
  return total;
}
