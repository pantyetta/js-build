// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02797B, calcu01004A, calcu02801B, calcu00280B } from '../lib/index.js';
import '../styles/s09.css';
export class Comp03409 {
  constructor(seed = 16) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02797B(total);
    total = calcu01004A(total);
    total = calcu02801B(total);
    total = calcu00280B(total);
    return total;
  }
}

export function rendercomp03409(container) {
  const total = new Comp03409().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03409: ${total}`;
  container.appendChild(el);
  return total;
}
