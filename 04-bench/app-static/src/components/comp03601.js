// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01373B, calcu02014A, calcu00346A } from '../lib/index.js';
import '../styles/s01.css';
export class Comp03601 {
  constructor(seed = 9) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01373B(total);
    total = calcu02014A(total);
    total = calcu00346A(total);
    return total;
  }
}

export function rendercomp03601(container) {
  const total = new Comp03601().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03601: ${total}`;
  container.appendChild(el);
  return total;
}
