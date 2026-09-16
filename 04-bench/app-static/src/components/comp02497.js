// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00703B, calcu02888B, calcu01235A, calcu01875A } from '../lib/index.js';
import '../styles/s17.css';
export class Comp02497 {
  constructor(seed = 4) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu00703B(total);
    total = calcu02888B(total);
    total = calcu01235A(total);
    total = calcu01875A(total);
    return total;
  }
}

export function rendercomp02497(container) {
  const total = new Comp02497().compute();
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02497: ${total}`;
  container.appendChild(el);
  return total;
}
