// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02966A, calcu02580A, calcu02167A, calcu02680A } from '../lib/index.js';
import '../styles/s01.css';
export class Comp01501 {
  constructor(seed = 41) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02966A(total);
    total = calcu02580A(total);
    total = calcu02167A(total);
    total = calcu02680A(total);
    return total;
  }
}

export function rendercomp01501(container) {
  const total = new Comp01501().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01501: ${total}`;
  container.appendChild(el);
  return total;
}
