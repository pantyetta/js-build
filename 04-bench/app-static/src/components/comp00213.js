// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00747B, calcu01811B, calcu01082A, calcu02691A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00213(container) {
  const seed = 5;
  let total = seed;
  total = calcu00747B(total);
  total = calcu01811B(total);
  total = calcu01082A(total);
  total = calcu02691A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00213: ${total}`;
  container.appendChild(el);
  return total;
}
