// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00940A, calcu02263B, calcu02538A } from '../lib/index.js';
import '../styles/s12.css';
export class Comp02572 {
  constructor(seed = 32) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00940A(total);
    total = calcu02263B(total);
    total = calcu02538A(total);
    return total;
  }
}

export function rendercomp02572(container) {
  const total = new Comp02572().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02572: ${total}`;
  container.appendChild(el);
  return total;
}
