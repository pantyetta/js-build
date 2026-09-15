// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02330A, calcu02201A, calcu00416A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03213(container) {
  const seed = 18;
  let total = seed;
  total = calcu02330A(total);
  total = calcu02201A(total);
  total = calcu00416A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03213: ${total}`;
  container.appendChild(el);
  return total;
}
