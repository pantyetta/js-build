// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02860A, calcu00501B, calcu00940A, calcu01276A, calcu01717B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp01513 {
  constructor(seed = 49) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02860A(total);
    total = calcu00501B(total);
    total = calcu00940A(total);
    total = calcu01276A(total);
    total = calcu01717B(total);
    return total;
  }
}

export function rendercomp01513(container) {
  const total = new Comp01513().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01513: ${total}`;
  container.appendChild(el);
  return total;
}
