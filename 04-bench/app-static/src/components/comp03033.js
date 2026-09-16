// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00459A, calcu02296A, calcu00725A, calcu00813B, calcu01684A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03033(container) {
  const seed = 2;
  let total = seed;
  total = calcu00459A(total);
  total = calcu02296A(total);
  total = calcu00725A(total);
  total = calcu00813B(total);
  total = calcu01684A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03033: ${total}`;
  container.appendChild(el);
  return total;
}
