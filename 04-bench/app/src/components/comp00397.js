// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02251B, calcu02210A, calcu01714B, calcu01801A } from '../lib/index.js';
import '../styles/s17.css';
export class Comp00397 {
  constructor(seed = 32) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02251B(total);
    total = calcu02210A(total);
    total = calcu01714B(total);
    total = calcu01801A(total);
    return total;
  }
}

export function rendercomp00397(container) {
  const total = new Comp00397().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00397: ${total}`;
  container.appendChild(el);
  return total;
}
