// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02246A, calcu01374A, calcu02760A, calcu02789B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02733(container) {
  const seed = 14;
  let total = seed;
  total = calcu02246A(total);
  total = calcu01374A(total);
  total = calcu02760A(total);
  total = calcu02789B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02733: ${total}`;
  container.appendChild(el);
  return total;
}
