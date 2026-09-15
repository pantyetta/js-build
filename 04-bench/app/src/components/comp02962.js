// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02511A, calcu00766B, calcu00883A, calcu02739A, calcu02738B } from '../lib/index.js';
import '../styles/s02.css';
export class Comp02962 {
  constructor(seed = 17) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02511A(total);
    total = calcu00766B(total);
    total = calcu00883A(total);
    total = calcu02739A(total);
    total = calcu02738B(total);
    return total;
  }
}

export function rendercomp02962(container) {
  const total = new Comp02962().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02962: ${total}`;
  container.appendChild(el);
  return total;
}
