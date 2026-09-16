// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02510B, calcu00628B, calcu02575A, calcu02467A } from '../lib/index.js';
import '../styles/s02.css';
export class Comp00502 {
  constructor(seed = 31) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02510B(total);
    total = calcu00628B(total);
    total = calcu02575A(total);
    total = calcu02467A(total);
    return total;
  }
}

export function rendercomp00502(container) {
  const total = new Comp00502().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00502: ${total}`;
  container.appendChild(el);
  return total;
}
