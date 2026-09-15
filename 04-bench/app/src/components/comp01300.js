// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02352A, calcu02656B, calcu02399B } from '../lib/index.js';
import '../styles/s00.css';
export class Comp01300 {
  constructor(seed = 13) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02352A(total);
    total = calcu02656B(total);
    total = calcu02399B(total);
    return total;
  }
}

export function rendercomp01300(container) {
  const total = new Comp01300().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01300: ${total}`;
  container.appendChild(el);
  return total;
}
