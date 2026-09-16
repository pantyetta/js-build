// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01261A, calcu00942B, calcu02193A } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp00408(container) {
  const seed = 5;
  let total = seed;
  total = calcu01261A(total);
  total = calcu00942B(total);
  total = calcu02193A(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00408: ${total}`;
  container.appendChild(el);
  return total;
}
