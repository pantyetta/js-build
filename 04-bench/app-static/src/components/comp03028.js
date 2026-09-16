// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02413A, calcu02146A, calcu01303A } from '../lib/index.js';
import '../styles/s08.css';
export class Comp03028 {
  constructor(seed = 40) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02413A(total);
    total = calcu02146A(total);
    total = calcu01303A(total);
    return total;
  }
}

export function rendercomp03028(container) {
  const total = new Comp03028().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03028: ${total}`;
  container.appendChild(el);
  return total;
}
