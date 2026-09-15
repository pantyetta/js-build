// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02325B, calcu01858A, calcu00040A } from '../lib/index.js';
import '../styles/s08.css';
export class Comp00988 {
  constructor(seed = 50) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02325B(total);
    total = calcu01858A(total);
    total = calcu00040A(total);
    return total;
  }
}

export function rendercomp00988(container) {
  const total = new Comp00988().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00988: ${total}`;
  container.appendChild(el);
  return total;
}
