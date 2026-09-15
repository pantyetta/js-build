// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02627A, calcu01425B, calcu02765B, calcu02509A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp00613 {
  constructor(seed = 8) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02627A(total);
    total = calcu01425B(total);
    total = calcu02765B(total);
    total = calcu02509A(total);
    return total;
  }
}

export function rendercomp00613(container) {
  const total = new Comp00613().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00613: ${total}`;
  container.appendChild(el);
  return total;
}
