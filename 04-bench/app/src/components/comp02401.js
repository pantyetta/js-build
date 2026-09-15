// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00025A, calcu01283A, calcu01938A } from '../lib/index.js';
import '../styles/s01.css';
export class Comp02401 {
  constructor(seed = 1) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00025A(total);
    total = calcu01283A(total);
    total = calcu01938A(total);
    return total;
  }
}

export function rendercomp02401(container) {
  const total = new Comp02401().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02401: ${total}`;
  container.appendChild(el);
  return total;
}
