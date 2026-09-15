// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01602A, calcu00272B, calcu01996A, calcu00313A, calcu01366B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01413(container) {
  const seed = 23;
  let total = seed;
  total = calcu01602A(total);
  total = calcu00272B(total);
  total = calcu01996A(total);
  total = calcu00313A(total);
  total = calcu01366B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01413: ${total}`;
  container.appendChild(el);
  return total;
}
