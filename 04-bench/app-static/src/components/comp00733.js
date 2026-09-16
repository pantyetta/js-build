// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01384A, calcu00097A, calcu02863A, calcu02023B, calcu00577A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp00733 {
  constructor(seed = 5) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01384A(total);
    total = calcu00097A(total);
    total = calcu02863A(total);
    total = calcu02023B(total);
    total = calcu00577A(total);
    return total;
  }
}

export function rendercomp00733(container) {
  const total = new Comp00733().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00733: ${total}`;
  container.appendChild(el);
  return total;
}
