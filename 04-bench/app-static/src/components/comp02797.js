// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01106A, calcu00528A, calcu01420A, calcu00329B, calcu00504B } from '../lib/index.js';
import '../styles/s17.css';
export class Comp02797 {
  constructor(seed = 13) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01106A(total);
    total = calcu00528A(total);
    total = calcu01420A(total);
    total = calcu00329B(total);
    total = calcu00504B(total);
    return total;
  }
}

export function rendercomp02797(container) {
  const total = new Comp02797().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02797: ${total}`;
  container.appendChild(el);
  return total;
}
