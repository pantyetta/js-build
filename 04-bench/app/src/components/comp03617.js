// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01288B, calcu00960A, calcu02110A, calcu00267B } from '../lib/index.js';
import '../styles/s17.css';
export function rendercomp03617(container, opts = {}) {
  const base = opts?.seed ?? 8;
  const values = [calcu01288B(base), calcu00960A(base), calcu02110A(base), calcu00267B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03617: ${total}`;
  container.appendChild(el);
  return total;
}
