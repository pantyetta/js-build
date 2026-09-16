// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01532A, calcu01417A, calcu01288B } from '../lib/index.js';
import '../styles/s04.css';
export class Comp01504 {
  constructor(seed = 35) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01532A(total);
    total = calcu01417A(total);
    total = calcu01288B(total);
    return total;
  }
}

export function rendercomp01504(container) {
  const total = new Comp01504().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01504: ${total}`;
  container.appendChild(el);
  return total;
}
