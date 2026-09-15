// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02908A, calcu01204A, calcu02821B } from '../lib/index.js';
import '../styles/s07.css';
export class Comp01747 {
  constructor(seed = 2) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02908A(total);
    total = calcu01204A(total);
    total = calcu02821B(total);
    return total;
  }
}

export function rendercomp01747(container) {
  const total = new Comp01747().compute();
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01747: ${total}`;
  container.appendChild(el);
  return total;
}
