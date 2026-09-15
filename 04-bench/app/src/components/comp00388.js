// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01403B, calcu01707A, calcu01048B } from '../lib/index.js';
import '../styles/s08.css';
export class Comp00388 {
  constructor(seed = 1) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01403B(total);
    total = calcu01707A(total);
    total = calcu01048B(total);
    return total;
  }
}

export function rendercomp00388(container) {
  const total = new Comp00388().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00388: ${total}`;
  container.appendChild(el);
  return total;
}
