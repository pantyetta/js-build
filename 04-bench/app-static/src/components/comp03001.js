// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01502B, calcu00311A, calcu02044B, calcu01218A } from '../lib/index.js';
import '../styles/s01.css';
export class Comp03001 {
  constructor(seed = 8) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01502B(total);
    total = calcu00311A(total);
    total = calcu02044B(total);
    total = calcu01218A(total);
    return total;
  }
}

export function rendercomp03001(container) {
  const total = new Comp03001().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03001: ${total}`;
  container.appendChild(el);
  return total;
}
