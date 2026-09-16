// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01000A, calcu02309A, calcu02026A } from '../lib/index.js';
import '../styles/s17.css';
export class Comp00037 {
  constructor(seed = 38) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01000A(total);
    total = calcu02309A(total);
    total = calcu02026A(total);
    return total;
  }
}

export function rendercomp00037(container) {
  const total = new Comp00037().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00037: ${total}`;
  container.appendChild(el);
  return total;
}
