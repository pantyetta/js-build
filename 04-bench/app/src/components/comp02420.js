// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02249B, calcu01087A, calcu02202A } from '../lib/index.js';
import '../styles/s00.css';
export function rendercomp02420(container, opts = {}) {
  const base = opts?.seed ?? 5;
  const values = [calcu02249B(base), calcu01087A(base), calcu02202A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-1";
  el.textContent = `comp02420: ${total}`;
  container.appendChild(el);
  return total;
}
