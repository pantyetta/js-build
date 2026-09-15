// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00660A, calcu02420A, calcu02784A, calcu00821A, calcu02623A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp02573(container, opts = {}) {
  const base = opts?.seed ?? 4;
  const values = [calcu00660A(base), calcu02420A(base), calcu02784A(base), calcu00821A(base), calcu02623A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp02573: ${total}`;
  container.appendChild(el);
  return total;
}
