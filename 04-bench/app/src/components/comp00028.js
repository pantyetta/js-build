// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02026A, calcu02545A, calcu00373A, calcu00088B, calcu02622B } from '../lib/index.js';
import '../styles/s08.css';
export class Comp00028 {
  constructor(seed = 38) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02026A(total);
    total = calcu02545A(total);
    total = calcu00373A(total);
    total = calcu00088B(total);
    total = calcu02622B(total);
    return total;
  }
}

export function rendercomp00028(container) {
  const total = new Comp00028().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00028: ${total}`;
  container.appendChild(el);
  return total;
}
