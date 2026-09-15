// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00517A, calcu02609A, calcu00306A, calcu00079A, calcu02241B } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp00404(container, opts = {}) {
  const base = opts?.seed ?? 7;
  const values = [calcu00517A(base), calcu02609A(base), calcu00306A(base), calcu00079A(base), calcu02241B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp00404: ${total}`;
  container.appendChild(el);
  return total;
}
