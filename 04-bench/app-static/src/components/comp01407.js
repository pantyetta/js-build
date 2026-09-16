// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01894B, calcu02285A, calcu01342B, calcu00826A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01407(container) {
  const seed = 4;
  let total = seed;
  total = calcu01894B(total);
  total = calcu02285A(total);
  total = calcu01342B(total);
  total = calcu00826A(total);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01407: ${total}`;
  container.appendChild(el);
  return total;
}
