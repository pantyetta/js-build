// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02739A, calcu02709B, calcu00239A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02613(container) {
  const seed = 7;
  let total = seed;
  total = calcu02739A(total);
  total = calcu02709B(total);
  total = calcu00239A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02613: ${total}`;
  container.appendChild(el);
  return total;
}
