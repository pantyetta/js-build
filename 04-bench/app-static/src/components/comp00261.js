// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02365A, calcu01004A, calcu02526A } from '../lib/index.js';
import '../styles/s01.css';
export function rendercomp00261(container) {
  const seed = 8;
  let total = seed;
  total = calcu02365A(total);
  total = calcu01004A(total);
  total = calcu02526A(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00261: ${total}`;
  container.appendChild(el);
  return total;
}
