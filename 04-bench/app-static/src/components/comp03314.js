// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01441A, calcu00887B, calcu00894B, calcu01632A } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp03314(container, opts = {}) {
  const base = opts?.seed ?? 26;
  const values = [calcu01441A(base), calcu00887B(base), calcu00894B(base), calcu01632A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp03314: ${total}`;
  container.appendChild(el);
  return total;
}
