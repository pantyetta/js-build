// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01171A, calcu00520A, calcu02061A, calcu01252A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp03373 {
  constructor(seed = 36) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01171A(total);
    total = calcu00520A(total);
    total = calcu02061A(total);
    total = calcu01252A(total);
    return total;
  }
}

export function rendercomp03373(container) {
  const total = new Comp03373().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03373: ${total}`;
  container.appendChild(el);
  return total;
}
