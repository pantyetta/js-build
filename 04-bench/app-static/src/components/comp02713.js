// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00939A, calcu02442A, calcu02733A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp02713 {
  constructor(seed = 17) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00939A(total);
    total = calcu02442A(total);
    total = calcu02733A(total);
    return total;
  }
}

export function rendercomp02713(container) {
  const total = new Comp02713().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02713: ${total}`;
  container.appendChild(el);
  return total;
}
