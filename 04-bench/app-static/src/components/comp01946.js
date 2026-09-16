// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01632A, calcu00236A, calcu01546A } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp01946(container, opts = {}) {
  const base = opts?.seed ?? 38;
  const values = [calcu01632A(base), calcu00236A(base), calcu01546A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp01946: ${total}`;
  container.appendChild(el);
  return total;
}
