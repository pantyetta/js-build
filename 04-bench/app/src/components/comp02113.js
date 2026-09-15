// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00913A, calcu02973A, calcu02320B, calcu00981B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp02113 {
  constructor(seed = 6) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00913A(total);
    total = calcu02973A(total);
    total = calcu02320B(total);
    total = calcu00981B(total);
    return total;
  }
}

export function rendercomp02113(container) {
  const total = new Comp02113().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02113: ${total}`;
  container.appendChild(el);
  return total;
}
