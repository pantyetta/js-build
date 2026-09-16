// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01390A, calcu00615A, calcu02097A, calcu02035B, calcu02973A } from '../lib/index.js';
import '../styles/s07.css';
export class Comp00487 {
  constructor(seed = 30) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01390A(total);
    total = calcu00615A(total);
    total = calcu02097A(total);
    total = calcu02035B(total);
    total = calcu02973A(total);
    return total;
  }
}

export function rendercomp00487(container) {
  const total = new Comp00487().compute();
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp00487: ${total}`;
  container.appendChild(el);
  return total;
}
