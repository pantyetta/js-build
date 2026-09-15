// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00788B, calcu01446A, calcu01364B, calcu00014B, calcu02954A } from '../lib/index.js';
import '../styles/s05.css';
export function rendercomp00125(container, opts = {}) {
  const base = opts?.seed ?? 43;
  const values = [calcu00788B(base), calcu01446A(base), calcu01364B(base), calcu00014B(base), calcu02954A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00125: ${total}`;
  container.appendChild(el);
  return total;
}
