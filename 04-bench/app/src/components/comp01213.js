// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01579A, calcu02716A, calcu01534A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp01213 {
  constructor(seed = 11) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01579A(total);
    total = calcu02716A(total);
    total = calcu01534A(total);
    return total;
  }
}

export function rendercomp01213(container) {
  const total = new Comp01213().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01213: ${total}`;
  container.appendChild(el);
  return total;
}
