// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02848B, calcu01362A, calcu00601A } from '../lib/index.js';
import '../styles/s17.css';
export class Comp02017 {
  constructor(seed = 18) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02848B(total);
    total = calcu01362A(total);
    total = calcu00601A(total);
    return total;
  }
}

export function rendercomp02017(container) {
  const total = new Comp02017().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02017: ${total}`;
  container.appendChild(el);
  return total;
}
