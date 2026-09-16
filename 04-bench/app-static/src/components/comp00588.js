// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02785A, calcu02724A, calcu01274B, calcu01879A } from '../lib/index.js';
import '../styles/s08.css';
export function rendercomp00588(container) {
  const seed = 15;
  let total = seed;
  total = calcu02785A(total);
  total = calcu02724A(total);
  total = calcu01274B(total);
  total = calcu01879A(total);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00588: ${total}`;
  container.appendChild(el);
  return total;
}
