// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00868A, calcu01795B, calcu00168A, calcu00722B, calcu01012A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01293(container) {
  const seed = 37;
  let total = seed;
  total = calcu00868A(total);
  total = calcu01795B(total);
  total = calcu00168A(total);
  total = calcu00722B(total);
  total = calcu01012A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01293: ${total}`;
  container.appendChild(el);
  return total;
}
