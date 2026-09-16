// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00773B, calcu02716B, calcu02155A } from '../lib/index.js';
import '../styles/s04.css';
export function rendercomp02564(container, opts = {}) {
  const base = opts?.seed ?? 37;
  const values = [calcu00773B(base), calcu02716B(base), calcu02155A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02564: ${total}`;
  container.appendChild(el);
  return total;
}
