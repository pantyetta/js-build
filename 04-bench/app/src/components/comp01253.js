// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00382B, calcu00943A, calcu01399B, calcu01546A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp01253(container, opts = {}) {
  const base = opts?.seed ?? 7;
  const values = [calcu00382B(base), calcu00943A(base), calcu01399B(base), calcu01546A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp01253: ${total}`;
  container.appendChild(el);
  return total;
}
