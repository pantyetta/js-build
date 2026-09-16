// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// lib/index.js（バレル）から named import。CSS も import する。

import { calcu02112B, calcu01746A, calcu00923A } from '../lib/index.js';
import '../styles/s13.css';
export function rendercomp00833(container, opts = {}) {
  const base = opts?.seed ?? 13;
  const values = [calcu02112B(base), calcu01746A(base), calcu00923A(base)];
  const total = values.reduce((a, b) => a + b, 0);
  const el = document.createElement("div");
  el.className = "blk-2";
  el.textContent = `comp00833: ${total}`;
  container.appendChild(el);
  return total;
}
