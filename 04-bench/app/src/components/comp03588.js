// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02293A, calcu02168A, calcu00964B } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp03588(container) {
  const seed = 1;
  let total = seed;
  total = calcu02293A(total);
  total = calcu02168A(total);
  total = calcu00964B(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03588: ${total}`;
  container.appendChild(el);
  return total;
}
