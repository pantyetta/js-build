// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01588A, calcu01938B, calcu00775A, calcu00740A } from '../lib/index.js';
import '../styles/s02.css';
export class Comp01582 {
  constructor(seed = 2) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01588A(total);
    total = calcu01938B(total);
    total = calcu00775A(total);
    total = calcu00740A(total);
    return total;
  }
}

export function rendercomp01582(container) {
  const total = new Comp01582().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01582: ${total}`;
  container.appendChild(el);
  return total;
}
