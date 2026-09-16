// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01718B, calcu01672B, calcu01550A, calcu00407A, calcu01385B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03573(container) {
  const seed = 38;
  let total = seed;
  total = calcu01718B(total);
  total = calcu01672B(total);
  total = calcu01550A(total);
  total = calcu00407A(total);
  total = calcu01385B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03573: ${total}`;
  container.appendChild(el);
  return total;
}
