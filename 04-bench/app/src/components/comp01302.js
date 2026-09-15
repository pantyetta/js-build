// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02540A, calcu01558B, calcu01586A, calcu02992B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp01302(container) {
  const seed = 28;
  let total = seed;
  total = calcu02540A(total);
  total = calcu01558B(total);
  total = calcu01586A(total);
  total = calcu02992B(total);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01302: ${total}`;
  container.appendChild(el);
  return total;
}
