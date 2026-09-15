// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00466A, calcu01780A, calcu02578A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp03087(container) {
  const seed = 12;
  let total = seed;
  total = calcu00466A(total);
  total = calcu01780A(total);
  total = calcu02578A(total);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp03087: ${total}`;
  container.appendChild(el);
  return total;
}
