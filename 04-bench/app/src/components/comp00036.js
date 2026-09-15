// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01700B, calcu02105A, calcu01035B } from '../lib/index.js';
import '../styles/s16.css';
export function rendercomp00036(container) {
  const seed = 20;
  let total = seed;
  total = calcu01700B(total);
  total = calcu02105A(total);
  total = calcu01035B(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00036: ${total}`;
  container.appendChild(el);
  return total;
}
