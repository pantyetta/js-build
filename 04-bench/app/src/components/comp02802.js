// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01288A, calcu01739B, calcu01986B, calcu01000B, calcu01651A } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp02802(container) {
  const seed = 1;
  let total = seed;
  total = calcu01288A(total);
  total = calcu01739B(total);
  total = calcu01986B(total);
  total = calcu01000B(total);
  total = calcu01651A(total);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02802: ${total}`;
  container.appendChild(el);
  return total;
}
