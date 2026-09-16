// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00123A, calcu02238B, calcu01111B } from '../lib/index.js';
import '../styles/s05.css';
export class Comp00025 {
  constructor(seed = 45) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00123A(total);
    total = calcu02238B(total);
    total = calcu01111B(total);
    return total;
  }
}

export function rendercomp00025(container) {
  const total = new Comp00025().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00025: ${total}`;
  container.appendChild(el);
  return total;
}
