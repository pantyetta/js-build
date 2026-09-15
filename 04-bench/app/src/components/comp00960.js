// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02044B, calcu01450B, calcu01920B, calcu02633A, calcu02533A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp00960(container) {
  const seed = 2;
  let total = seed;
  total = calcu02044B(total);
  total = calcu01450B(total);
  total = calcu01920B(total);
  total = calcu02633A(total);
  total = calcu02533A(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00960: ${total}`;
  container.appendChild(el);
  return total;
}
