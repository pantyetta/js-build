// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01798A, calcu01352A, calcu01181A, calcu00707B } from '../lib/index.js';
import '../styles/s01.css';
export class Comp01261 {
  constructor(seed = 35) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01798A(total);
    total = calcu01352A(total);
    total = calcu01181A(total);
    total = calcu00707B(total);
    return total;
  }
}

export function rendercomp01261(container) {
  const total = new Comp01261().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01261: ${total}`;
  container.appendChild(el);
  return total;
}
