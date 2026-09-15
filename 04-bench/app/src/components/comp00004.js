// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01517B, calcu02255B, calcu00370B } from '../lib/index.js';
import '../styles/s04.css';
export class Comp00004 {
  constructor(seed = 42) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01517B(total);
    total = calcu02255B(total);
    total = calcu00370B(total);
    return total;
  }
}

export function rendercomp00004(container) {
  const total = new Comp00004().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00004: ${total}`;
  container.appendChild(el);
  return total;
}
