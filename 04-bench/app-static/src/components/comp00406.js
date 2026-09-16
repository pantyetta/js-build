// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01288B, calcu01745B, calcu02735B, calcu01142B, calcu00807B } from '../lib/index.js';
import '../styles/s06.css';
export class Comp00406 {
  constructor(seed = 6) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01288B(total);
    total = calcu01745B(total);
    total = calcu02735B(total);
    total = calcu01142B(total);
    total = calcu00807B(total);
    return total;
  }
}

export function rendercomp00406(container) {
  const total = new Comp00406().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00406: ${total}`;
  container.appendChild(el);
  return total;
}
