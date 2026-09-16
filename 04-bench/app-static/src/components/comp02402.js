// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01944A, calcu02547B, calcu00415B, calcu01598B } from '../lib/index.js';
import '../styles/s02.css';
export function rendercomp02402(container, opts = {}) {
  const base = opts?.seed ?? 6;
  const values = [calcu01944A(base), calcu02547B(base), calcu00415B(base), calcu01598B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02402: ${total}`;
  container.appendChild(el);
  return total;
}
