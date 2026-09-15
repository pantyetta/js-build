// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02555A, calcu02072B, calcu00988A, calcu02051A } from '../lib/index.js';
import '../styles/s02.css';
export class Comp01522 {
  constructor(seed = 1) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02555A(total);
    total = calcu02072B(total);
    total = calcu00988A(total);
    total = calcu02051A(total);
    return total;
  }
}

export function rendercomp01522(container) {
  const total = new Comp01522().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01522: ${total}`;
  container.appendChild(el);
  return total;
}
