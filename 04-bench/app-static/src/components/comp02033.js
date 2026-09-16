// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00359B, calcu02503A, calcu02558A, calcu02479B } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02033(container, opts = {}) {
  const base = opts?.seed ?? 24;
  const values = [calcu00359B(base), calcu02503A(base), calcu02558A(base), calcu02479B(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02033: ${total}`;
  container.appendChild(el);
  return total;
}
