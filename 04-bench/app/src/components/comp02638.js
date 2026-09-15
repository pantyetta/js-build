// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01896A, calcu00608B, calcu01457B, calcu02361A, calcu01088B } from '../lib/index.js';
import '../styles/s18.css';
export class Comp02638 {
  constructor(seed = 40) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01896A(total);
    total = calcu00608B(total);
    total = calcu01457B(total);
    total = calcu02361A(total);
    total = calcu01088B(total);
    return total;
  }
}

export function rendercomp02638(container) {
  const total = new Comp02638().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02638: ${total}`;
  container.appendChild(el);
  return total;
}
