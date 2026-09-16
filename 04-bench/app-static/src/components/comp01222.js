// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02557A, calcu01806A, calcu01283A, calcu02760B } from '../lib/index.js';
import '../styles/s02.css';
export class Comp01222 {
  constructor(seed = 50) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02557A(total);
    total = calcu01806A(total);
    total = calcu01283A(total);
    total = calcu02760B(total);
    return total;
  }
}

export function rendercomp01222(container) {
  const total = new Comp01222().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01222: ${total}`;
  container.appendChild(el);
  return total;
}
