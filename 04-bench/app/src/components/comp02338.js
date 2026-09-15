// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02830B, calcu00791A, calcu01129B } from '../lib/index.js';
import '../styles/s18.css';
export class Comp02338 {
  constructor(seed = 30) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02830B(total);
    total = calcu00791A(total);
    total = calcu01129B(total);
    return total;
  }
}

export function rendercomp02338(container) {
  const total = new Comp02338().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02338: ${total}`;
  container.appendChild(el);
  return total;
}
