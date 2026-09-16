// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01632B, calcu02066A, calcu01619A, calcu02385A, calcu02582A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp00313 {
  constructor(seed = 25) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01632B(total);
    total = calcu02066A(total);
    total = calcu01619A(total);
    total = calcu02385A(total);
    total = calcu02582A(total);
    return total;
  }
}

export function rendercomp00313(container) {
  const total = new Comp00313().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00313: ${total}`;
  container.appendChild(el);
  return total;
}
