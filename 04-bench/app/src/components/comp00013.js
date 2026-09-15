// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00537B, calcu00738A, calcu02641B, calcu01485B, calcu02129B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp00013 {
  constructor(seed = 8) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00537B(total);
    total = calcu00738A(total);
    total = calcu02641B(total);
    total = calcu01485B(total);
    total = calcu02129B(total);
    return total;
  }
}

export function rendercomp00013(container) {
  const total = new Comp00013().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00013: ${total}`;
  container.appendChild(el);
  return total;
}
