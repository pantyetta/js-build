// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01352A, calcu00862A, calcu02592B, calcu00358A, calcu02960A } from '../lib/index.js';
import '../styles/s02.css';
export class Comp02002 {
  constructor(seed = 41) {
    this.seed = seed;
  }
  compute() {
    let total = this.seed;
    total = calcu01352A(total);
    total = calcu00862A(total);
    total = calcu02592B(total);
    total = calcu00358A(total);
    total = calcu02960A(total);
    return total;
  }
}

export function rendercomp02002(container) {
  const total = new Comp02002().compute();
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02002: ${total}`;
  container.appendChild(el);
  return total;
}
