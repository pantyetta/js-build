// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01931B, calcu02478A, calcu00157B } from '../lib/index.js';
import '../styles/s07.css';
export class Comp02407 {
  constructor(seed = 8) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01931B(total);
    total = calcu02478A(total);
    total = calcu00157B(total);
    return total;
  }
}

export function rendercomp02407(container) {
  const total = new Comp02407().compute();
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02407: ${total}`;
  container.appendChild(el);
  return total;
}
