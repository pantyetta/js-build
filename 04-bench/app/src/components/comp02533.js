// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01391A, calcu02067A, calcu00363A, calcu01154B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp02533 {
  constructor(seed = 28) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01391A(total);
    total = calcu02067A(total);
    total = calcu00363A(total);
    total = calcu01154B(total);
    return total;
  }
}

export function rendercomp02533(container) {
  const total = new Comp02533().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02533: ${total}`;
  container.appendChild(el);
  return total;
}
