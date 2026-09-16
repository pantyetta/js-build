// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02949A, calcu02852A, calcu00022A } from '../lib/index.js';
import '../styles/s02.css';
export class Comp00802 {
  constructor(seed = 4) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02949A(total);
    total = calcu02852A(total);
    total = calcu00022A(total);
    return total;
  }
}

export function rendercomp00802(container) {
  const total = new Comp00802().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00802: ${total}`;
  container.appendChild(el);
  return total;
}
