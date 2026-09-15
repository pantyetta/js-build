// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01613A, calcu01868A, calcu02057B, calcu01487B, calcu00844B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00393(container) {
  const seed = 13;
  let total = seed;
  total = calcu01613A(total);
  total = calcu01868A(total);
  total = calcu02057B(total);
  total = calcu01487B(total);
  total = calcu00844B(total);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00393: ${total}`;
  container.appendChild(el);
  return total;
}
