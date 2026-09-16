// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02667B, calcu02602A, calcu01049A, calcu00392A, calcu00058A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp00133 {
  constructor(seed = 13) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02667B(total);
    total = calcu02602A(total);
    total = calcu01049A(total);
    total = calcu00392A(total);
    total = calcu00058A(total);
    return total;
  }
}

export function rendercomp00133(container) {
  const total = new Comp00133().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00133: ${total}`;
  container.appendChild(el);
  return total;
}
