// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01391A, calcu02389A, calcu00248A, calcu01527B, calcu01008A } from '../lib/index.js';
import '../styles/s01.css';
export class Comp01201 {
  constructor(seed = 8) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01391A(total);
    total = calcu02389A(total);
    total = calcu00248A(total);
    total = calcu01527B(total);
    total = calcu01008A(total);
    return total;
  }
}

export function rendercomp01201(container) {
  const total = new Comp01201().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01201: ${total}`;
  container.appendChild(el);
  return total;
}
