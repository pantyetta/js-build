// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00009B, calcu01732B, calcu01706A, calcu02416A } from '../lib/index.js';
import '../styles/s07.css';
export function rendercomp00987(container) {
  const seed = 39;
  let total = seed;
  total = calcu00009B(total);
  total = calcu01732B(total);
  total = calcu01706A(total);
  total = calcu02416A(total);
  const el = document.createElement("div");
  el.className = "blk-4";
  el.textContent = `comp00987: ${total}`;
  container.appendChild(el);
  return total;
}
