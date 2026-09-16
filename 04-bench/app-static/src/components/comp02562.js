// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02567B, calcu01583B, calcu02562A, calcu00858A, calcu00353B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp02562(container) {
  const seed = 38;
  let total = seed;
  total = calcu02567B(total);
  total = calcu01583B(total);
  total = calcu02562A(total);
  total = calcu00858A(total);
  total = calcu00353B(total);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02562: ${total}`;
  container.appendChild(el);
  return total;
}
