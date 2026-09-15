// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02105A, calcu02258B, calcu01170A, calcu00090A, calcu01198B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp02173 {
  constructor(seed = 44) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02105A(total);
    total = calcu02258B(total);
    total = calcu01170A(total);
    total = calcu00090A(total);
    total = calcu01198B(total);
    return total;
  }
}

export function rendercomp02173(container) {
  const total = new Comp02173().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02173: ${total}`;
  container.appendChild(el);
  return total;
}
