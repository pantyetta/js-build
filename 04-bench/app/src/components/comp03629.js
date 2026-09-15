// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02994A, calcu01935B, calcu00556A } from '../lib/index.js';
import '../styles/s09.css';
export function rendercomp03629(container, opts = {}) {
  const base = opts?.seed ?? 26;
  const values = [calcu02994A(base), calcu01935B(base), calcu00556A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp03629: ${total}`;
  container.appendChild(el);
  return total;
}
