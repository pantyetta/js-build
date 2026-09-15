// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01272B, calcu00198A, calcu01652A } from '../lib/index.js';
import '../styles/s15.css';
export class Comp02575 {
  constructor(seed = 2) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01272B(total);
    total = calcu00198A(total);
    total = calcu01652A(total);
    return total;
  }
}

export function rendercomp02575(container) {
  const total = new Comp02575().compute();
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02575: ${total}`;
  container.appendChild(el);
  return total;
}
