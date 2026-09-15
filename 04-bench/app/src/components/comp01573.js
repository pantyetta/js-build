// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02073A, calcu00369A, calcu01011A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp01573 {
  constructor(seed = 47) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02073A(total);
    total = calcu00369A(total);
    total = calcu01011A(total);
    return total;
  }
}

export function rendercomp01573(container) {
  const total = new Comp01573().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01573: ${total}`;
  container.appendChild(el);
  return total;
}
