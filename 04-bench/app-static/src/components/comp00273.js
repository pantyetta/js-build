// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00553B, calcu02819A, calcu02081A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00273(container) {
  const seed = 28;
  let total = seed;
  total = calcu00553B(total);
  total = calcu02819A(total);
  total = calcu02081A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00273: ${total}`;
  container.appendChild(el);
  return total;
}
