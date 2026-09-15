// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02321B, calcu01267A, calcu01563B, calcu01615A } from '../lib/index.js';
import '../styles/s05.css';
export class Comp02425 {
  constructor(seed = 7) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02321B(total);
    total = calcu01267A(total);
    total = calcu01563B(total);
    total = calcu01615A(total);
    return total;
  }
}

export function rendercomp02425(container) {
  const total = new Comp02425().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02425: ${total}`;
  container.appendChild(el);
  return total;
}
