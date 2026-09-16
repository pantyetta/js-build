// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00432B, calcu02709B, calcu01104A, calcu01752A, calcu00197B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02913(container) {
  const seed = 4;
  let total = seed;
  total = calcu00432B(total);
  total = calcu02709B(total);
  total = calcu01104A(total);
  total = calcu01752A(total);
  total = calcu00197B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02913: ${total}`;
  container.appendChild(el);
  return total;
}
