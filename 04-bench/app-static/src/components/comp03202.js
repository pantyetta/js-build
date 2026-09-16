// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01330B, calcu02303A, calcu01575B, calcu02562A } from '../lib/index.js';
import '../styles/s02.css';
export class Comp03202 {
  constructor(seed = 12) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01330B(total);
    total = calcu02303A(total);
    total = calcu01575B(total);
    total = calcu02562A(total);
    return total;
  }
}

export function rendercomp03202(container) {
  const total = new Comp03202().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03202: ${total}`;
  container.appendChild(el);
  return total;
}
