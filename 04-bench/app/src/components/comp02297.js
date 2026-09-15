// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00699B, calcu01472A, calcu02994B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp02297(container, opts = {}) {
  const base = opts?.seed ?? 34;
  const values = [calcu00699B(base), calcu01472A(base), calcu02994B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02297: ${total}`;
  container.appendChild(el);
  return total;
}
