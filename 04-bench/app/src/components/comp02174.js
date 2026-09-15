// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01558A, calcu00130A, calcu01329A } from '../lib/index.js';
import '../styles/s14.css';
export function rendercomp02174(container, opts = {}) {
  const base = opts?.seed ?? 9;
  const values = [calcu01558A(base), calcu00130A(base), calcu01329A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02174: ${total}`;
  container.appendChild(el);
  return total;
}
