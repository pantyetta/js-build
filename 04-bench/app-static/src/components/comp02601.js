// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00452B, calcu01030A, calcu01893A, calcu00477A } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp02601(container) {
  const seed = 1;
  let total = seed;
  total = calcu00452B(total);
  total = calcu01030A(total);
  total = calcu01893A(total);
  total = calcu00477A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02601: ${total}`;
  container.appendChild(el);
  return total;
}
