// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00749B, calcu01868B, calcu00995A, calcu02850B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00473(container, opts = {}) {
  const base = opts?.seed ?? 3;
  const values = [calcu00749B(base), calcu01868B(base), calcu00995A(base), calcu02850B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00473: ${total}`;
  container.appendChild(el);
  return total;
}
