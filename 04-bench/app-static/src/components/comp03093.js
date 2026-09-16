// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02583A, calcu00350A, calcu02832A, calcu01081B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03093(container) {
  const seed = 40;
  let total = seed;
  total = calcu02583A(total);
  total = calcu00350A(total);
  total = calcu02832A(total);
  total = calcu01081B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03093: ${total}`;
  container.appendChild(el);
  return total;
}
