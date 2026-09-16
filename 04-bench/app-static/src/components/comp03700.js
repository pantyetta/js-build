// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02139B, calcu00703B, calcu00670A, calcu02836B } from '../lib/index.js';
import '../styles/s00.css';
export class Comp03700 {
  constructor(seed = 19) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02139B(total);
    total = calcu00703B(total);
    total = calcu00670A(total);
    total = calcu02836B(total);
    return total;
  }
}

export function rendercomp03700(container) {
  const total = new Comp03700().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03700: ${total}`;
  container.appendChild(el);
  return total;
}
