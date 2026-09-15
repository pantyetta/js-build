// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01810B, calcu01073A, calcu02805A, calcu00161A, calcu02645B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp03273(container) {
  const seed = 5;
  let total = seed;
  total = calcu01810B(total);
  total = calcu01073A(total);
  total = calcu02805A(total);
  total = calcu00161A(total);
  total = calcu02645B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03273: ${total}`;
  container.appendChild(el);
  return total;
}
