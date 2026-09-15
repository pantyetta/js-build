// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02205A, calcu02420A, calcu01609A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00873(container) {
  const seed = 19;
  let total = seed;
  total = calcu02205A(total);
  total = calcu02420A(total);
  total = calcu01609A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00873: ${total}`;
  container.appendChild(el);
  return total;
}
