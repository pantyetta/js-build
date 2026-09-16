// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02449A, calcu00993B, calcu01695B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00513(container) {
  const seed = 26;
  let total = seed;
  total = calcu02449A(total);
  total = calcu00993B(total);
  total = calcu01695B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00513: ${total}`;
  container.appendChild(el);
  return total;
}
