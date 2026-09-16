// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02798B, calcu01116B, calcu01291B } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp01728(container) {
  const seed = 6;
  let total = seed;
  total = calcu02798B(total);
  total = calcu01116B(total);
  total = calcu01291B(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01728: ${total}`;
  container.appendChild(el);
  return total;
}
