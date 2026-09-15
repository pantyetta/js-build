// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02317A, calcu02688B, calcu01750B, calcu01582B, calcu00334A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03393(container) {
  const seed = 24;
  let total = seed;
  total = calcu02317A(total);
  total = calcu02688B(total);
  total = calcu01750B(total);
  total = calcu01582B(total);
  total = calcu00334A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03393: ${total}`;
  container.appendChild(el);
  return total;
}
