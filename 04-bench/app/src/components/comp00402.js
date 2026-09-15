// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01953A, calcu01209B, calcu00636A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp00402(container) {
  const seed = 28;
  let total = seed;
  total = calcu01953A(total);
  total = calcu01209B(total);
  total = calcu00636A(total);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00402: ${total}`;
  container.appendChild(el);
  return total;
}
