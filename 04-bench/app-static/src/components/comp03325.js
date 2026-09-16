// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02750A, calcu02571B, calcu01426A, calcu01462B } from '../lib/index.js';
import '../styles/s05.css';
export class Comp03325 {
  constructor(seed = 29) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02750A(total);
    total = calcu02571B(total);
    total = calcu01426A(total);
    total = calcu01462B(total);
    return total;
  }
}

export function rendercomp03325(container) {
  const total = new Comp03325().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03325: ${total}`;
  container.appendChild(el);
  return total;
}
