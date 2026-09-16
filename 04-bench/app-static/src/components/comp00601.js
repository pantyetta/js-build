// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01294A, calcu01866A, calcu00858B, calcu00038B, calcu02424A } from '../lib/index.js';
import '../styles/s01.css';
export class Comp00601 {
  constructor(seed = 25) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01294A(total);
    total = calcu01866A(total);
    total = calcu00858B(total);
    total = calcu00038B(total);
    total = calcu02424A(total);
    return total;
  }
}

export function rendercomp00601(container) {
  const total = new Comp00601().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00601: ${total}`;
  container.appendChild(el);
  return total;
}
