// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02856A, calcu02676B, calcu02145A, calcu00077B, calcu02207B } from '../lib/index.js';
import '../styles/s07.css';
export class Comp02587 {
  constructor(seed = 18) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02856A(total);
    total = calcu02676B(total);
    total = calcu02145A(total);
    total = calcu00077B(total);
    total = calcu02207B(total);
    return total;
  }
}

export function rendercomp02587(container) {
  const total = new Comp02587().compute();
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp02587: ${total}`;
  container.appendChild(el);
  return total;
}
