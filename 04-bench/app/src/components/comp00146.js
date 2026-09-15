// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu00043B, calcu00717A, calcu00437B, calcu01471A } from '../lib/index.js';
import '../styles/s06.css';
export function rendercomp00146(container, opts = {}) {
  const base = opts?.seed ?? 5;
  const values = [calcu00043B(base), calcu00717A(base), calcu00437B(base), calcu01471A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-3";
  el.textContent = `comp00146: ${total}`;
  container.appendChild(el);
  return total;
}
