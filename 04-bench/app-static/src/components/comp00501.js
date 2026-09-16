// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02101B, calcu01211A, calcu01856B } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp00501(container) {
  const seed = 8;
  let total = seed;
  total = calcu02101B(total);
  total = calcu01211A(total);
  total = calcu01856B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00501: ${total}`;
  container.appendChild(el);
  return total;
}
