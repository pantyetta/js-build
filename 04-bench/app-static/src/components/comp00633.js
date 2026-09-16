// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01567A, calcu00576A, calcu00234A, calcu00547A, calcu02150A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00633(container) {
  const seed = 1;
  let total = seed;
  total = calcu01567A(total);
  total = calcu00576A(total);
  total = calcu00234A(total);
  total = calcu00547A(total);
  total = calcu02150A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00633: ${total}`;
  container.appendChild(el);
  return total;
}
