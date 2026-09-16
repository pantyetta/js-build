// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02806A, calcu01208B, calcu01967B, calcu02900A, calcu00720B } from '../lib/index.js';
import '../styles/s05.css';
export class Comp00325 {
  constructor(seed = 30) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02806A(total);
    total = calcu01208B(total);
    total = calcu01967B(total);
    total = calcu02900A(total);
    total = calcu00720B(total);
    return total;
  }
}

export function rendercomp00325(container) {
  const total = new Comp00325().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00325: ${total}`;
  container.appendChild(el);
  return total;
}
