// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00822B, calcu02092B, calcu01071A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00093(container) {
  const seed = 2;
  let total = seed;
  total = calcu00822B(total);
  total = calcu02092B(total);
  total = calcu01071A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00093: ${total}`;
  container.appendChild(el);
  return total;
}
