// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02507A, calcu02946A, calcu02262A } from '../lib/index.js';
import '../styles/s05.css';
export class Comp02905 {
  constructor(seed = 4) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02507A(total);
    total = calcu02946A(total);
    total = calcu02262A(total);
    return total;
  }
}

export function rendercomp02905(container) {
  const total = new Comp02905().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02905: ${total}`;
  container.appendChild(el);
  return total;
}
