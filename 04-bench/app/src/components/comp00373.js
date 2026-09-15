// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02552B, calcu02642A, calcu00598B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp00373 {
  constructor(seed = 25) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02552B(total);
    total = calcu02642A(total);
    total = calcu00598B(total);
    return total;
  }
}

export function rendercomp00373(container) {
  const total = new Comp00373().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00373: ${total}`;
  container.appendChild(el);
  return total;
}
