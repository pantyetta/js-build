// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00335B, calcu01372B, calcu02921B } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp03720(container) {
  const seed = 39;
  let total = seed;
  total = calcu00335B(total);
  total = calcu01372B(total);
  total = calcu02921B(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp03720: ${total}`;
  container.appendChild(el);
  return total;
}
