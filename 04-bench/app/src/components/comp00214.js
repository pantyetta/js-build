// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00025A, calcu01147B, calcu01632A, calcu01250A } from '../lib/index.js';
import '../styles/s14.css';
export class Comp00214 {
  constructor(seed = 2) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00025A(total);
    total = calcu01147B(total);
    total = calcu01632A(total);
    total = calcu01250A(total);
    return total;
  }
}

export function rendercomp00214(container) {
  const total = new Comp00214().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00214: ${total}`;
  container.appendChild(el);
  return total;
}
