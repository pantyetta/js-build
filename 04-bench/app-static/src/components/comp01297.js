// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01348A, calcu00513A, calcu01237B, calcu02556B, calcu02243A } from '../lib/index.js';
import '../styles/s17.css';
export class Comp01297 {
  constructor(seed = 8) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01348A(total);
    total = calcu00513A(total);
    total = calcu01237B(total);
    total = calcu02556B(total);
    total = calcu02243A(total);
    return total;
  }
}

export function rendercomp01297(container) {
  const total = new Comp01297().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01297: ${total}`;
  container.appendChild(el);
  return total;
}
