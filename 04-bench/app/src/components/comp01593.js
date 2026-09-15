// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02599A, calcu00586B, calcu00681B, calcu02563B, calcu00396B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01593(container) {
  const seed = 38;
  let total = seed;
  total = calcu02599A(total);
  total = calcu00586B(total);
  total = calcu00681B(total);
  total = calcu02563B(total);
  total = calcu00396B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01593: ${total}`;
  container.appendChild(el);
  return total;
}
