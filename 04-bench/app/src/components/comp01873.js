// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01844A, calcu00157B, calcu02175A, calcu00617B, calcu01453A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp01873 {
  constructor(seed = 22) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01844A(total);
    total = calcu00157B(total);
    total = calcu02175A(total);
    total = calcu00617B(total);
    total = calcu01453A(total);
    return total;
  }
}

export function rendercomp01873(container) {
  const total = new Comp01873().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01873: ${total}`;
  container.appendChild(el);
  return total;
}
