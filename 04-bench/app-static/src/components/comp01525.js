// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02745B, calcu02942B, calcu02482A } from '../lib/index.js';
import '../styles/s05.css';
export class Comp01525 {
  constructor(seed = 7) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02745B(total);
    total = calcu02942B(total);
    total = calcu02482A(total);
    return total;
  }
}

export function rendercomp01525(container) {
  const total = new Comp01525().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01525: ${total}`;
  container.appendChild(el);
  return total;
}
