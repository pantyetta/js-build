// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01641B, calcu02122A, calcu02019B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp01273 {
  constructor(seed = 28) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01641B(total);
    total = calcu02122A(total);
    total = calcu02019B(total);
    return total;
  }
}

export function rendercomp01273(container) {
  const total = new Comp01273().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01273: ${total}`;
  container.appendChild(el);
  return total;
}
