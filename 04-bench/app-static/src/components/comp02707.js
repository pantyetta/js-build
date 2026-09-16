// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02707A, calcu01538A, calcu02755A } from '../lib/index.js';
import '../styles/s07.css';
export class Comp02707 {
  constructor(seed = 25) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02707A(total);
    total = calcu01538A(total);
    total = calcu02755A(total);
    return total;
  }
}

export function rendercomp02707(container) {
  const total = new Comp02707().compute();
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02707: ${total}`;
  container.appendChild(el);
  return total;
}
