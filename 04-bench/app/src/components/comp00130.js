// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01383A, calcu02875B, calcu02012B, calcu01859B, calcu01900B } from '../lib/index.js';
import '../styles/s10.css';
export class Comp00130 {
  constructor(seed = 17) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01383A(total);
    total = calcu02875B(total);
    total = calcu02012B(total);
    total = calcu01859B(total);
    total = calcu01900B(total);
    return total;
  }
}

export function rendercomp00130(container) {
  const total = new Comp00130().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00130: ${total}`;
  container.appendChild(el);
  return total;
}
