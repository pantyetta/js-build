// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02131A, calcu00508B, calcu02298A, calcu01281A, calcu02123A } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp01401(container) {
  const seed = 38;
  let total = seed;
  total = calcu02131A(total);
  total = calcu00508B(total);
  total = calcu02298A(total);
  total = calcu01281A(total);
  total = calcu02123A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01401: ${total}`;
  container.appendChild(el);
  return total;
}
