// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu01921B, calcu00696A, calcu02322A } from '../lib/index.js';
import '../styles/s10.css';
export function rendercomp02870(container, opts = {}) {
  const base = opts?.seed ?? 16;
  const values = [calcu01921B(base), calcu00696A(base), calcu02322A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp02870: ${total}`;
  container.appendChild(el);
  return total;
}
