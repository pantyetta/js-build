// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02860A, calcu02898B, calcu01601A, calcu00453A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp02293 {
  constructor(seed = 14) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02860A(total);
    total = calcu02898B(total);
    total = calcu01601A(total);
    total = calcu00453A(total);
    return total;
  }
}

export function rendercomp02293(container) {
  const total = new Comp02293().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02293: ${total}`;
  container.appendChild(el);
  return total;
}
