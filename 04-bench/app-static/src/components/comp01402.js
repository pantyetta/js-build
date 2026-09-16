// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02435B, calcu01599B, calcu01403B, calcu00804A, calcu01551A } from '../lib/index.js';
import '../styles/s02.css';
export class Comp01402 {
  constructor(seed = 9) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02435B(total);
    total = calcu01599B(total);
    total = calcu01403B(total);
    total = calcu00804A(total);
    total = calcu01551A(total);
    return total;
  }
}

export function rendercomp01402(container) {
  const total = new Comp01402().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01402: ${total}`;
  container.appendChild(el);
  return total;
}
