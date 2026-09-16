// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02929B, calcu01745B, calcu00861B, calcu00879B } from '../lib/index.js';
import '../styles/s13.css';
export class Comp01033 {
  constructor(seed = 24) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02929B(total);
    total = calcu01745B(total);
    total = calcu00861B(total);
    total = calcu00879B(total);
    return total;
  }
}

export function rendercomp01033(container) {
  const total = new Comp01033().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01033: ${total}`;
  container.appendChild(el);
  return total;
}
