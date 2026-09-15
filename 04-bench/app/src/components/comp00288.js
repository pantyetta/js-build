// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00507A, calcu01795A, calcu02550A } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp00288(container) {
  const seed = 1;
  let total = seed;
  total = calcu00507A(total);
  total = calcu01795A(total);
  total = calcu02550A(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00288: ${total}`;
  container.appendChild(el);
  return total;
}
