// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00138B, calcu00561A, calcu01006B, calcu01203B, calcu02008B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01893(container) {
  const seed = 19;
  let total = seed;
  total = calcu00138B(total);
  total = calcu00561A(total);
  total = calcu01006B(total);
  total = calcu01203B(total);
  total = calcu02008B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01893: ${total}`;
  container.appendChild(el);
  return total;
}
