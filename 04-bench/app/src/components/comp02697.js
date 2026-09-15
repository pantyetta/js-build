// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02063B, calcu01467B, calcu02797B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp02697(container) {
  const seed = 5;
  let total = seed;
  total = calcu02063B(total);
  total = calcu01467B(total);
  total = calcu02797B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02697: ${total}`;
  container.appendChild(el);
  return total;
}
