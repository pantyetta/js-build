// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01298B, calcu02630A, calcu01962B, calcu01101B, calcu02956B } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp01308(container) {
  const seed = 50;
  let total = seed;
  total = calcu01298B(total);
  total = calcu02630A(total);
  total = calcu01962B(total);
  total = calcu01101B(total);
  total = calcu02956B(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01308: ${total}`;
  container.appendChild(el);
  return total;
}
