// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01266A, calcu00025B, calcu02638A, calcu00198A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp03402(container) {
  const seed = 23;
  let total = seed;
  total = calcu01266A(total);
  total = calcu00025B(total);
  total = calcu02638A(total);
  total = calcu00198A(total);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03402: ${total}`;
  container.appendChild(el);
  return total;
}
