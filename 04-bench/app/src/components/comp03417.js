// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02279A, calcu01397B, calcu01391A, calcu02594A } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp03417(container) {
  const seed = 29;
  let total = seed;
  total = calcu02279A(total);
  total = calcu01397B(total);
  total = calcu01391A(total);
  total = calcu02594A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03417: ${total}`;
  container.appendChild(el);
  return total;
}
