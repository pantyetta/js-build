// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02642B, calcu02938B, calcu01848B, calcu01420B, calcu01852A } from '../lib/index.js';
import '../styles/s00.css';
export class Comp02500 {
  constructor(seed = 37) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu02642B(total);
    total = calcu02938B(total);
    total = calcu01848B(total);
    total = calcu01420B(total);
    total = calcu01852A(total);
    return total;
  }
}

export function rendercomp02500(container) {
  const total = new Comp02500().compute();
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02500: ${total}`;
  container.appendChild(el);
  return total;
}
