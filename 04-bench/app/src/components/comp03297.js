// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00767A, calcu00477A, calcu01107B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp03297(container) {
  const seed = 4;
  let total = seed;
  total = calcu00767A(total);
  total = calcu00477A(total);
  total = calcu01107B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03297: ${total}`;
  container.appendChild(el);
  return total;
}
