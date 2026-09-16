// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01366A, calcu02200A, calcu01381B } from '../lib/index.js';
import '../styles/s17.css';
export class Comp00517 {
  constructor(seed = 15) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01366A(total);
    total = calcu02200A(total);
    total = calcu01381B(total);
    return total;
  }
}

export function rendercomp00517(container) {
  const total = new Comp00517().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00517: ${total}`;
  container.appendChild(el);
  return total;
}
