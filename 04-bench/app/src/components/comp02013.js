// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01064B, calcu01786A, calcu01945B, calcu02051A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02013(container) {
  const seed = 38;
  let total = seed;
  total = calcu01064B(total);
  total = calcu01786A(total);
  total = calcu01945B(total);
  total = calcu02051A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02013: ${total}`;
  container.appendChild(el);
  return total;
}
