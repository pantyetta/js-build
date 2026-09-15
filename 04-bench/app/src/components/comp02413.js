// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01099B, calcu00051B, calcu01146A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp02413 {
  constructor(seed = 24) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01099B(total);
    total = calcu00051B(total);
    total = calcu01146A(total);
    return total;
  }
}

export function rendercomp02413(container) {
  const total = new Comp02413().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02413: ${total}`;
  container.appendChild(el);
  return total;
}
