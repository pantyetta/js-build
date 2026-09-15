// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01385A, calcu02096A, calcu01563B, calcu01988B } from '../lib/index.js';
import '../styles/s11.css';
export class Comp00871 {
  constructor(seed = 5) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01385A(total);
    total = calcu02096A(total);
    total = calcu01563B(total);
    total = calcu01988B(total);
    return total;
  }
}

export function rendercomp00871(container) {
  const total = new Comp00871().compute();
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp00871: ${total}`;
  container.appendChild(el);
  return total;
}
