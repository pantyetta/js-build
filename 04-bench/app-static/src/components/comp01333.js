// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00628B, calcu00779B, calcu01783B, calcu01536A, calcu02568A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp01333 {
  constructor(seed = 32) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00628B(total);
    total = calcu00779B(total);
    total = calcu01783B(total);
    total = calcu01536A(total);
    total = calcu02568A(total);
    return total;
  }
}

export function rendercomp01333(container) {
  const total = new Comp01333().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01333: ${total}`;
  container.appendChild(el);
  return total;
}
