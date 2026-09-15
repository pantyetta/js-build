// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01855A, calcu01389A, calcu00060B } from '../lib/index.js';
import '../styles/s02.css';
export class Comp01702 {
  constructor(seed = 46) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01855A(total);
    total = calcu01389A(total);
    total = calcu00060B(total);
    return total;
  }
}

export function rendercomp01702(container) {
  const total = new Comp01702().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01702: ${total}`;
  container.appendChild(el);
  return total;
}
