// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02746A, calcu00206B, calcu01672A, calcu02211B } from '../lib/index.js';
import '../styles/s17.css';
export class Comp01717 {
  constructor(seed = 36) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02746A(total);
    total = calcu00206B(total);
    total = calcu01672A(total);
    total = calcu02211B(total);
    return total;
  }
}

export function rendercomp01717(container) {
  const total = new Comp01717().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01717: ${total}`;
  container.appendChild(el);
  return total;
}
