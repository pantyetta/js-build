// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02242A, calcu00204B, calcu02972B, calcu02047A, calcu02865A } from '../lib/index.js';
import '../styles/s13.css';
export class Comp00793 {
  constructor(seed = 1) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02242A(total);
    total = calcu00204B(total);
    total = calcu02972B(total);
    total = calcu02047A(total);
    total = calcu02865A(total);
    return total;
  }
}

export function rendercomp00793(container) {
  const total = new Comp00793().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00793: ${total}`;
  container.appendChild(el);
  return total;
}
