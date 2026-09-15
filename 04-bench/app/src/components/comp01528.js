// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01945B, calcu02541A, calcu01296A, calcu00352A } from '../lib/index.js';
import '../styles/s08.css';
export class Comp01528 {
  constructor(seed = 15) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01945B(total);
    total = calcu02541A(total);
    total = calcu01296A(total);
    total = calcu00352A(total);
    return total;
  }
}

export function rendercomp01528(container) {
  const total = new Comp01528().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01528: ${total}`;
  container.appendChild(el);
  return total;
}
