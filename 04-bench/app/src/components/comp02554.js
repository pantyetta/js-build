// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02745A, calcu01229A, calcu02095A, calcu02540B } from '../lib/index.js';
import '../styles/s14.css';
export class Comp02554 {
  constructor(seed = 6) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02745A(total);
    total = calcu01229A(total);
    total = calcu02095A(total);
    total = calcu02540B(total);
    return total;
  }
}

export function rendercomp02554(container) {
  const total = new Comp02554().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02554: ${total}`;
  container.appendChild(el);
  return total;
}
