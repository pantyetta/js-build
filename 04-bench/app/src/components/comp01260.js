// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02655B, calcu01936B, calcu00905A, calcu01470B, calcu02540B } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp01260(container) {
  const seed = 32;
  let total = seed;
  total = calcu02655B(total);
  total = calcu01936B(total);
  total = calcu00905A(total);
  total = calcu01470B(total);
  total = calcu02540B(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp01260: ${total}`;
  container.appendChild(el);
  return total;
}
