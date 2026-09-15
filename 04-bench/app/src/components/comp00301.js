// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01223A, calcu01331A, calcu01630A, calcu02767A, calcu00470A } from '../lib/index.js';
import '../styles/s01.css';
export class Comp00301 {
  constructor(seed = 40) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01223A(total);
    total = calcu01331A(total);
    total = calcu01630A(total);
    total = calcu02767A(total);
    total = calcu00470A(total);
    return total;
  }
}

export function rendercomp00301(container) {
  const total = new Comp00301().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00301: ${total}`;
  container.appendChild(el);
  return total;
}
