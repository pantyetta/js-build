// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00537A, calcu02687B, calcu01638A, calcu02617B } from '../lib/index.js';
import '../styles/s17.css';
export class Comp02137 {
  constructor(seed = 9) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00537A(total);
    total = calcu02687B(total);
    total = calcu01638A(total);
    total = calcu02617B(total);
    return total;
  }
}

export function rendercomp02137(container) {
  const total = new Comp02137().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02137: ${total}`;
  container.appendChild(el);
  return total;
}
