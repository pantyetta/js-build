// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01213B, calcu00532A, calcu02172B, calcu02231A } from '../lib/index.js';
import '../styles/s01.css';
export class Comp00001 {
  constructor(seed = 18) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01213B(total);
    total = calcu00532A(total);
    total = calcu02172B(total);
    total = calcu02231A(total);
    return total;
  }
}

export function rendercomp00001(container) {
  const total = new Comp00001().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00001: ${total}`;
  container.appendChild(el);
  return total;
}
