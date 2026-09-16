// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02532A, calcu01529A, calcu01830B } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp01587(container) {
  const seed = 32;
  let total = seed;
  total = calcu02532A(total);
  total = calcu01529A(total);
  total = calcu01830B(total);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp01587: ${total}`;
  container.appendChild(el);
  return total;
}
